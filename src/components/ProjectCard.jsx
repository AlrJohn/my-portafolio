import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ p }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
        {p.category}
      </div>
      <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{p.blurb}</p>

      {p.impact?.length > 0 && (
        <ul className="mb-4 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
          {p.impact.slice(0, 2).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {p.tech?.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 text-sm">
        <Link
          to={`/projects/${p.slug}`}
          className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-300"
        >
          Case study <ArrowRight size={14} aria-hidden="true" />
        </Link>
        {p.repo && (
          <a className="inline-flex items-center gap-1 underline" href={p.repo} target="_blank" rel="noreferrer">
            <Github size={14} aria-hidden="true" /> Code
          </a>
        )}
        {p.demo && (
          <a
            className="inline-flex items-center gap-1 underline"
            href={p.demo}
            target={p.demo.startsWith('http') ? '_blank' : undefined}
            rel={p.demo.startsWith('http') ? 'noreferrer' : undefined}
          >
            <ExternalLink size={14} aria-hidden="true" /> Demo
          </a>
        )}
      </div>
    </article>
  );
}
