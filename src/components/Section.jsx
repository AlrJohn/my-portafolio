export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-10">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 dark:text-gray-400 mb-6">{subtitle}</p>}
      {children}
    </section>
  );
}
