# Jonathan Reyes - Portfolio

A modern, full-stack portfolio website featuring a Retrieval-Augmented Generation (RAG) chatbot powered by a local LLM

## 🚀 Tech Stack

### Frontend
- **React 19** with **Vite** - Fast, modern UI development.
- **Tailwind CSS 4** - Responsive, cleaner styling.
- **Framer Motion** - Smooth animations and transitions.
- **React Router 7** - Client-side routing.

### Backend (Chatbot API)
- **Flask** - Lightweight Python server.
- **Ollama** - Interface for running local LLMs (Llama 3).
- **FAISS** - Vector database for fast similarity search.
- **Sentence-Transformers** - `all-MiniLM-L6-v2` for generating embeddings.

## ✨ Features

- **Personal AI Chatbot**: An "Ask Me" feature that answers questions about my background, projects, and skills using RAG.
- **Dynamic Projects Showcase**: Interactive cards displaying my recent work.
- **Responsive Design**: Built for mobile, tablet, and desktop.
- **Dark Mode**: Fully supported system-aware dark theme.
- **Experience & Coursework**: Detailed timelines of my professional and academic history.

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18+)
- Python (3.10+)
- [Ollama](https://ollama.com/) (running locally)

### 1. Clone the Repository
```bash
git clone https://github.com/AlrJohn/my-portafolio.git
cd my-portafolio
```

### 2. Frontend Setup
Install dependencies and run the dev server:
```bash
npm install
npm run dev
```

### 3. Backend Setup (Optional for Chatbot)
If you want to run the RAG chatbot:

1. Navigate to the backend folder:
   ```bash
   cd flask-backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # Mac/Linux:
   source venv/bin/activate
   ```
3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask server:
   ```bash
   python app.py
   ```
   *The server runs on `http://localhost:5000` by default.*

### 4. Configure Ollama
Ensure you have Ollama running and the model pulled:
```bash
ollama serve
ollama pull llama3.1:8b
```
*You can configure the model and host in `flask-backend/app.py` or via environment variables.*

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
