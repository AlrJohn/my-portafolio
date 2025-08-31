export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="container mx-auto px-4 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
        <span>© {new Date().getFullYear()} Jonathan Reyes</span>
        <span>Built with React • Vite • Tailwind</span>
      </div>
    </footer>
  );
}
