import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ChatContext = createContext(null);
const STORAGE_KEY = 'chat_messages';
const MAX_MESSAGES = 30;

function loadMessages() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(saved)) return [];
    return saved
      .filter((message) => ['user', 'bot'].includes(message?.role) && typeof message?.text === 'string')
      .slice(-MAX_MESSAGES);
  } catch {
    return [];
  }
}

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState(loadMessages);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_MESSAGES)));
  }, [messages]);

  const value = useMemo(
    () => ({
      messages,
      setMessages: (update) => {
        setMessages((current) => {
          const next = typeof update === 'function' ? update(current) : update;
          return next.slice(-MAX_MESSAGES);
        });
      },
      loading,
      setLoading,
      clearChat: () => setMessages([]),
    }),
    [messages, loading],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within ChatProvider');
  return context;
}
