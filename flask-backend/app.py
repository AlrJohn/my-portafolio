# flask-backend/app.py
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import os, json, requests

# RAG stuff
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

# ----- Config -----
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost:11434")
MODEL_NAME  = os.getenv("OLLAMA_MODEL", "llama3.1:8b")
DATA_PATH   = os.getenv("PORTFOLIO_DATA", os.path.join(os.path.dirname(__file__), "data", "portfolio.json"))

SYSTEM_PROMPT = """You are a helpful assistant embedded in Jonathan Reyes' portfolio site.
Be concise, professional, and friendly. Use the provided CONTEXT when answering questions about Jonathan.
If the answer is unknown or not in context, say you don't know rather than guessing."""

# ----- App -----
app = Flask(__name__)
# During dev, allow your Vite origins. You can tighten later.

CORS(app, resources={
  r"/ask": {"origins": ["https://jonathanalavez.vercel.app/", "http://localhost:5173", "model.arjnhomenet.xyz"]},
  r"/contact": {"origins": ["https://jonathanalavez.vercel.app/", "http://localhost:5173", "model.arjnhomenet.xyz"]},
})

from flask_cors import CORS



# ----- Load data + build vector index -----
print("Loading portfolio data from:", DATA_PATH)
with open(DATA_PATH, "r", encoding="utf-8") as f:
    DOCS = json.load(f)  # list of {"section": "...", "text": "..."}

# Keep a parallel list of strings to embed
DOC_TEXTS = [d["text"] for d in DOCS]

print("Loading embedding model (this may take ~10-30s on first run)...")
EMB_MODEL = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# Encode & normalize for cosine similarity (via inner product on normalized vectors)
EMB_MATRIX = EMB_MODEL.encode(DOC_TEXTS, convert_to_numpy=True, normalize_embeddings=True)
dim = EMB_MATRIX.shape[1]
INDEX = faiss.IndexFlatIP(dim)
INDEX.add(EMB_MATRIX)

def retrieve(query, k=4):
    """Return top-k context snippets for a query."""
    q = EMB_MODEL.encode([query], convert_to_numpy=True, normalize_embeddings=True)
    scores, idxs = INDEX.search(q, k)
    idxs = idxs[0]
    chunks = [DOC_TEXTS[i] for i in idxs]
    return "\n\n".join(chunks)

# ----- Routes -----
@app.route("/health", methods=["GET"])
def health():
    try:
        r = requests.get(f"{OLLAMA_HOST}/api/tags", timeout=5)
        ok = (r.status_code == 200)
        return {"status": "ok" if ok else "bad", "ollama": r.json() if ok else None}
    except Exception as e:
        return {"status": "bad", "error": repr(e)}, 500



@app.route("/ask", methods=["POST", "OPTIONS"])
def ask():
    # 1) Cleanly handle CORS preflight
    if request.method == "OPTIONS":
        # If you don't have @after_request setting CORS headers, add them here too:
        # resp = make_response(("", 200))
        # resp.headers["Access-Control-Allow-Origin"] = request.headers.get("Origin", "*")
        # resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        # resp.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        # return resp
        return make_response(("", 200))

    # 2) Accept JSON, with safe fallbacks (helps during debugging/tools)
    data = request.get_json(silent=True) or {}
    question = (data.get("question") or "").strip()
    if not question:
        question = (request.form.get("question") or "").strip()
    if not question:
        question = (request.args.get("question") or "").strip()

    if not question:
        return jsonify({"response": "Please provide a question."}), 400

    # 3) Retrieve top-k context snippets (RAG)
    try:
        context = retrieve(question, k=4)  # <- your function built from FAISS + sentence-transformers
    except Exception as e:
        print("🔥 RAG retrieve error:", repr(e))
        context = ""

    # 4) Build Ollama chat payload
    payload = {
        "model": MODEL_NAME,  # e.g., "llama3.1:8b"
        "messages": [
            {
                "role": "system",
                "content": (
                    SYSTEM_PROMPT
                    + (f"\n\nCONTEXT:\n{context}" if context else "")
                ),
            },
            {"role": "user", "content": question},
        ],
        "stream": False,
        "options": {
            "temperature": 0.3,
            "num_ctx": 4096,   # increase if you need longer context
            "num_predict": 512 # cap response length
        },
    }

    # 5) Call Ollama and return the reply (with robust error handling)
    try:
        print("→ POST", f"{OLLAMA_HOST}/api/chat", "model:", MODEL_NAME)
        r = requests.post(f"{OLLAMA_HOST}/api/chat", json=payload, timeout=120)
        print("← status:", r.status_code)

        if r.status_code != 200:
            # Log a short body preview for debugging
            body_preview = r.text[:800]
            print("Ollama error body:", body_preview)
            return jsonify({"response": f"Ollama error {r.status_code}: {body_preview}"}), 502

        out = r.json()
        # Ollama returns: {"message": {"role": "assistant", "content": "..."} , ...}
        reply = (out.get("message") or {}).get("content", "").strip()
        if not reply:
            print("⚠️ Empty reply from model:", out)
            return jsonify({"response": "The model returned an empty response."}), 502

        return jsonify({"response": reply})

    except requests.exceptions.ConnectionError as e:
        print("🔥 Connection error to Ollama:", repr(e))
        return jsonify({"response": f"Cannot reach Ollama at {OLLAMA_HOST}"}), 502
    except requests.exceptions.Timeout:
        print("🔥 Timeout calling Ollama")
        return jsonify({"response": "Model timed out. Try again."}), 504
    except Exception as e:
        print("🔥 Unexpected error:", repr(e))
        return jsonify({"response": "Server error. Check backend logs."}), 500

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))
