import { Link } from 'react-router-dom';
import { ExternalLink, FileText } from 'lucide-react';
import Section from '../components/Section.jsx';
import { about, publication, site } from '../data/site.js';

export default function About() {
  return (
    <div className="page py-8">
      <Section title="About Me" subtitle="Who I am and what I work on">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <span className="font-semibold">{site.name}</span>. {about.intro}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/experience" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
            View Experience
          </Link>
          <Link to="/projects" className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
            See Projects
          </Link>
          <a
            href={site.resumeUrl}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <FileText size={16} aria-hidden="true" /> Resume
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Stat title="Focus" value={about.focus} />
          <Stat title="Internship" value={about.internship} />
          <Stat title="Leadership" value={about.leadership} />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {about.highlights.map((highlight) => (
            <Card key={highlight.title} {...highlight} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="text-xs uppercase tracking-wide text-gray-500">Published Research</div>
          <h3 className="mt-1 font-semibold">{publication.title}</h3>
          <a
            href={publication.href}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-300"
          >
            View on {publication.venue} <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </Section>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="text-xs uppercase tracking-wide text-gray-500">{title}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function Card({ title, body }) {
  return (
    <article className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{body}</p>
    </article>
  );
}
