import { useEffect, useRef } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import Chatbot from './Chatbot.jsx';

export default function ChatModal({ open, onClose }) {
  const closeRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previousFocus?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <Motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <Motion.div
            className="fixed inset-x-2 bottom-2 md:inset-x-auto md:bottom-8 md:right-8 z-50 md:w-[450px] max-h-[85vh] flex flex-col"
            initial={reduceMotion ? false : { y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: 30, opacity: 0, scale: 0.97 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-title"
          >
            <div className="flex flex-col h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/95 backdrop-blur-xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div>
                  <h2 id="chat-title" className="text-white font-semibold text-sm">Ask Jonathan's AI</h2>
                  <p className="text-xs text-blue-300">Powered by a home-hosted model</p>
                </div>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <Chatbot />
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
