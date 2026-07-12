import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle.jsx';
import { navigation, site } from '../data/site.js';

export default function NavBar({ onOpenChat }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition-colors ${
      isActive
        ? 'bg-gray-200 dark:bg-gray-700'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-950/90">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <div className="page h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight" onClick={closeMenu}>
          {site.shortName}
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm" aria-label="Primary navigation">
          {navigation.map(({ label, to, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <button
            onClick={onOpenChat}
            className="ml-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            Ask Me
          </button>
          <a
            href={site.resumeUrl}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <FileText size={16} aria-hidden="true" /> Resume
          </a>
          <DarkModeToggle />
        </nav>

        <button
          className="md:hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="md:hidden border-t border-gray-200 dark:border-gray-800"
          aria-label="Mobile navigation"
        >
          <div className="page py-3 flex flex-col gap-1">
            {navigation.map(({ label, to, end }) => (
              <NavLink key={to} to={to} end={end} className={linkClass} onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                closeMenu();
                onOpenChat();
              }}
              className="px-3 py-2 rounded-xl bg-blue-600 text-white text-left"
            >
              Ask Me
            </button>
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700"
              onClick={closeMenu}
            >
              <FileText size={16} aria-hidden="true" /> Resume
            </a>
            <div className="py-2">
              <DarkModeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
