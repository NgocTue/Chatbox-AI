from flask import Flask, render_template, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv()  # Load biến môi trường từ file .env

app = Flask(__name__)

# API Key của OpenAI từ .env
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=user_input,
        max_tokens=150
    )
    chatbot_reply = response.choices[0].text.strip()
    return jsonify({"reply": chatbot_reply})

if __name__ == '__main__':
    app.run(debug=True)
