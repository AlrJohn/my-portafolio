import { useState } from 'react';
import botAvatar from '../assets/bot-avatar.png';
import userAvatar from '../assets/user-avatar.png';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages([...messages, userMessage]);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      const botMessage = { role: 'bot', text: data.response };
      setMessages((msgs) => [...msgs, botMessage]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: 'bot', text: 'Error getting response.' }]);
    } finally {
      setInput('');
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg w-full max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">Ask Me Anything!</h2>

      {/* Chat message area */}
      <div className="h-[70vh] overflow-y-auto border p-4 mb-4 bg-gray-100 dark:bg-gray-900 rounded space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start space-x-3 ${
              msg.role === 'user' ? 'justify-end flex-row-reverse' : 'justify-start'
            }`}
          >
            {/* Avatar */}
            <img
              src={msg.role === 'user' ? userAvatar : botAvatar}
              alt={msg.role === 'user' ? 'You' : 'Bot'}
              className="w-10 h-10 max-w-[40px] max-h-[40px] rounded-full object-cover shrink-0"
            />

            {/* Message bubble */}
            <div
              className={`px-4 py-2 max-w-[75%] rounded-2xl text-sm ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing animation */}
        {loading && (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <img src={botAvatar} alt="Bot" className="w-6 h-6 rounded-full object-cover" />
            <span className="animate-pulse">Typing...</span>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="flex">
        <input
          className="flex-1 border border-gray-300 dark:border-gray-600 p-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask me something..."
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
