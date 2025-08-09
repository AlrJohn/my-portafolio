from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os
# from dotenv import load_dotenv




from dotenv import dotenv_values
secrets = dotenv_values(".env")
os.environ["OPEN_API_KEY"] = secrets["OPEN_API_KEY"]

client = OpenAI(api_key=os.environ["OPEN_API_KEY"])

app = Flask(__name__)
CORS(app)

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('question', '')

    prompt = f"""
    You are a chatbot that knows everything about Jonathan Alavez Reyes. Answer the question truthfully.

    Question: {question}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",  # or "gpt-3.5-turbo"
            messages=[
                {"role": "system", "content": "You are Jonathan's personal chatbot."},
                {"role": "user", "content": prompt}
            ]
        )

        return jsonify({
            "response": response.choices[0].message.content
        })

    except Exception as e:
        print("🔥 ERROR:", e)  # Print error to terminal
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
