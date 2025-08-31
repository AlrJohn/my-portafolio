import { MessageCircle } from 'lucide-react';

export default function FloatingChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
      aria-label="Open chatbot"
    >
      <MessageCircle />
    </button>
  );
}
