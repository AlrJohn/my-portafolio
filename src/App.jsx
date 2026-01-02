import { Outlet, Link, NavLink } from 'react-router-dom';
import FloatingChatButton from './components/FloatingChatButton.jsx';
import ChatModal from './components/ChatModal.jsx';
import { useEffect, useState } from 'react';
import { ChatProvider } from './context/ChatContext.jsx';  // <-- add
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition ${
      isActive ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <ChatProvider> {/* <-- wrap everything */}
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
          <div className="page h-14 flex items-center justify-between">
            <Link to="/" className="font-semibold tracking-tight">Jonathan Reyes</Link>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              <NavLink to="/" className={linkClass} end>Home</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/projects" className={linkClass}>Projects</NavLink>
              <NavLink to="/experience" className={linkClass}>Experience</NavLink>
              <NavLink to="/coursework" className={linkClass}>Coursework</NavLink>

              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
              <button
                onClick={() => setChatOpen(true)}
                className="ml-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                Ask Me
              </button>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <div className="page py-8">
            <Outlet context={{ openChat: () => setChatOpen(true) }} />
          </div>
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-800">
          <div className="page py-6 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Jonathan Reyes — Built with React • Vite • Tailwind
          </div>
        </footer>

        <FloatingChatButton onClick={() => setChatOpen(true)} />
        <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
      </div>
    </ChatProvider>
    
  );
}
