#!/usr/bin/env bash
set -e

# Start Ollama server in background
/bin/ollama serve &

# Wait for Ollama to be ready
until curl -sf http://localhost:11434/api/tags >/dev/null 2>&1; do
  echo "Waiting for Ollama..."
  sleep 1
done

# Optionally pull a model on boot
if [ -n "$MODEL_NAME" ]; then
  echo "Pulling model: $MODEL_NAME"
  /bin/ollama pull "$MODEL_NAME" || true
fi

# Export Ollama endpoint for the Flask app
export OLLAMA_HOST="http://localhost:11434"

# Pick the web port (Railway provides $PORT)
: "${PORT:=5000}"

# Run Flask via gunicorn (2 workers, threads for I/O)
exec gunicorn -w 2 -k gthread -b 0.0.0.0:$PORT app:app
