import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { useChat } from '../context/ChatContext.jsx';
import { Send, Sparkles, User, Trash2 } from 'lucide-react';

function Avatar({ src, isBot }) {
  return (
    <div className={`w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-white/10 ${isBot ? 'shadow-lg shadow-blue-900/20' : 'bg-slate-700 flex items-center justify-center'}`}>
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <User size={18} className="text-gray-400" />
      )}
    </div>
  );
}

export default function Chatbot() {
  const { messages, setMessages, loading, setLoading, clearChat } = useChat();
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
    <div className="flex flex-col h-[500px] w-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-50 space-y-3">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <Sparkles className="text-blue-400" />
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Hi! I'm Jonathan's digital twin. Ask me about his projects, skills, or experience.
            </p>
          </div>
        )}

        {messages.map((msg, i) => {
          const isUser = msg.role === 'user';
          if (!msg.text) return null;
          return (
            <div key={i} className={`flex items-end gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
              <Avatar src={isUser ? null : profileImg} isBot={!isUser} />

              <div className={`px-5 py-3.5 max-w-[80%] text-sm leading-relaxed shadow-sm ${isUser
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tr-sm'
                  : 'bg-white/10 backdrop-blur-md text-gray-100 border border-white/5 rounded-2xl rounded-tl-sm'
                }`}>
                {msg.text}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-end gap-3">
            <Avatar src={profileImg} isBot={true} />
            <div className="bg-white/5 backdrop-blur-md border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 pt-2">
        <div className="relative flex items-center gap-2">
          <input
            className="w-full bg-black/20 border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 placeholder:text-gray-500 transition-all font-light"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your question..."
          />

          <button
            className="absolute right-2 p-2 bg-blue-600/90 hover:bg-blue-600 text-white rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
          >
            <Send size={16} />
          </button>
        </div>

        {messages.length > 0 && (
          <button onClick={clearChat} className="mx-auto mt-3 text-xs text-gray-500 hover:text-red-400 flex items-center gap-1 transition">
            <Trash2 size={10} /> Clear conversation
          </button>
        )}
      </div>
    </div>
  );
}
