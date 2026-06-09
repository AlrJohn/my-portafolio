import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ChatModal from './components/ChatModal.jsx';
import FloatingChatButton from './components/FloatingChatButton.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { ChatProvider } from './context/ChatContext.jsx';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <ChatProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex flex-col">
        <NavBar onOpenChat={() => setChatOpen(true)} />
        <main id="main-content" className="flex-1 pt-16">
          <Outlet context={{ openChat: () => setChatOpen(true) }} />
        </main>
        <Footer />
        <FloatingChatButton onClick={() => setChatOpen(true)} />
        <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
      </div>
    </ChatProvider>
  );
}
