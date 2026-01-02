import { AnimatePresence, motion } from 'framer-motion';
import Chatbot from '../components/chatbot.jsx';
import { X } from 'lucide-react';

export default function ChatModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[95vw] md:w-[450px] max-h-[80vh] flex flex-col"
            initial={{ y: 80, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          >
            {/* Glass Container */}
            <div className="flex flex-col h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/80 backdrop-blur-xl">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5 border-2 border-slate-900" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5 animate-ping opacity-75" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Ask Jonathan's AI</h3>
                    <p className="text-xs text-blue-300">Responds instantly</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Content */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <Chatbot />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
