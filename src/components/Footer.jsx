import { site, socialLinks } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 dark:border-gray-800">
      <div className="page flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>&copy; {new Date().getFullYear()} {site.shortName}</span>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
