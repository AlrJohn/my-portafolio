import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 dark:border-gray-800">
      <div className="page text-sm text-gray-500 dark:text-gray-400 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} {site.shortName}</span>
        <span>Built with React, Vite, and Tailwind CSS</span>
      </div>
    </footer>
  );
}
