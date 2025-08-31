import { AnimatePresence, motion } from 'framer-motion';
import Chatbot from '../components/chatbot.jsx';

export default function ChatModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-[95vw] max-w-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            <div className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold">Ask Me Anything</h3>
                <button onClick={onClose} className="text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  Close
                </button>
              </div>
              <div className="p-2">
                <Chatbot />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
