import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, Trash2, User } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { useChat } from '../context/ChatContext.jsx';
import { askChat } from '../services/chatApi.js';

function Avatar({ isBot }) {
  return (
    <div className={`w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/10 ${isBot ? 'shadow-lg shadow-blue-900/20' : 'bg-slate-700 flex items-center justify-center'}`}>
      {isBot ? (
        <img src={profileImg} alt="" className="w-full h-full object-cover" />
      ) : (
        <User size={18} className="text-gray-400" aria-hidden="true" />
      )}
    </div>
  );
}

export default function Chatbot() {
  const { messages, setMessages, loading, setLoading, clearChat } = useChat();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((current) => [...current, { role: 'user', text }]);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await askChat(text);
      setMessages((current) => [...current, { role: 'bot', text: response }]);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full">
      <div
        className="flex-1 overflow-y-auto p-5 space-y-6"
        aria-live="polite"
        aria-busy={loading}
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-70 space-y-3">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <Sparkles className="text-blue-400" aria-hidden="true" />
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Ask about Jonathan's projects, skills, or experience.
            </p>
          </div>
        )}

        {messages.map((message, index) => {
          const isUser = message.role === 'user';
          return (
            <div key={`${message.role}-${index}`} className={`flex items-end gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
              <Avatar isBot={!isUser} />
              <div className={`px-5 py-3.5 max-w-[80%] text-sm leading-relaxed shadow-sm ${isUser
                ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tr-sm'
                : 'bg-white/10 text-gray-100 border border-white/5 rounded-2xl rounded-tl-sm'
              }`}>
                {message.text}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-end gap-3">
            <Avatar isBot />
            <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1" aria-label="Assistant is responding">
              {[0, 150, 300].map((delay) => (
                <span key={delay} className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="p-4 pt-2">
        {error && (
          <div className="mb-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-sm text-amber-100" role="alert">
            {error} Please try again shortly.
          </div>
        )}
        <div className="relative flex items-center gap-2">
          <label className="sr-only" htmlFor="chat-question">Question</label>
          <input
            ref={inputRef}
            id="chat-question"
            className="w-full bg-black/20 border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') sendMessage();
            }}
            placeholder="Type your question..."
            maxLength={500}
          />
          <button
            className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Send question"
          >
            <Send size={16} aria-hidden="true" />
          </button>
        </div>

        {messages.length > 0 && (
          <button onClick={clearChat} className="mx-auto mt-3 text-xs text-gray-400 hover:text-red-300 flex items-center gap-1">
            <Trash2 size={12} aria-hidden="true" /> Clear conversation
          </button>
        )}
      </div>
    </div>
  );
}
