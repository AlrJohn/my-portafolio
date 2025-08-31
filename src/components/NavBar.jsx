import { NavLink, useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle.jsx';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function NavBar({ onOpenChat }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition ${
      isActive ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="text-lg font-bold tracking-tight">
          Jonathan Reyes
        </button>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <button onClick={onOpenChat} className="ml-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
            Ask Me
          </button>
          <DarkModeToggle />
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          <Menu />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-2 flex flex-col gap-1">
            <NavLink to="/" className={linkClass} end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink to="/experience" className={linkClass} onClick={() => setOpen(false)}>Experience</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
            <button onClick={() => { setOpen(false); onOpenChat(); }} className="px-3 py-2 rounded-xl bg-blue-600 text-white">
              Ask Me
            </button>
            <div className="py-2"><DarkModeToggle /></div>
          </div>
        </div>
      )}
    </header>
  );
}
