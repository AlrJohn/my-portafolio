// src/components/ProjectCard.jsx
export default function ProjectCard({ p }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 hover:-translate-y-0.5 hover:shadow-lg transition">
      <h3 className="font-semibold mb-1">{p.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{p.blurb}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {p.tech?.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 text-sm">
        {p.repo && (
          <a className="underline" href={p.repo} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        {p.demo && <a className="underline" href={p.demo}>Demo</a>}
      </div>
    </div>
  );
}
