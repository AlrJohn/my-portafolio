import { useEffect, useRef, useState } from 'react';
import botAvatar from '../assets/bot-avatar.png';
import userAvatar from '../assets/user-avatar.png';
import { useChat } from '../context/ChatContext.jsx';  

function Avatar({ src, alt, size = 40 }) {
  return (
    <div style={{ width: size, height: size, flex: '0 0 auto', borderRadius: 9999, overflow: 'hidden' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
}

export default function Chatbot() {
  const { messages, setMessages, loading, setLoading } = useChat(); 
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setLoading(true);

    try {
      const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data?.response || '…' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Error getting response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 w-full max-w-xl bg-white dark:bg-gray-800">
      <div className="h-[60vh] overflow-y-auto border p-4 mb-4 bg-gray-100 dark:bg-gray-900 rounded space-y-4">
        {messages.map((msg, i) => {
          const isUser = msg.role === 'user';
          if (!msg.text) return null;
          return (
            <div key={i} className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
              {!isUser && <Avatar src={botAvatar} alt="Bot" size={40} />}
              <div className={`px-4 py-2 max-w-[75%] rounded-2xl text-sm leading-relaxed ${
                isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white'
              }`}>
                {msg.text}
              </div>
              {isUser && <Avatar src={userAvatar} alt="You" size={40} />}
            </div>
          );
        })}
        {loading && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Avatar src={botAvatar} alt="Bot" size={24} />
            <span className="animate-pulse">Typing…</span>
          </div>
        )}
        <div ref={endRef} />
      </div>

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
