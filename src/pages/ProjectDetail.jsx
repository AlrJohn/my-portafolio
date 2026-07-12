import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import { getProjectBySlug } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  return (
    <article className="page py-12 md:py-16">
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline dark:text-blue-300">
        <ArrowLeft size={16} aria-hidden="true" /> Back to projects
      </Link>

      <header className="max-w-4xl">
        <div className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
          {project.category}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.repo && (
            <ExternalButton href={project.repo} icon={<Github size={16} aria-hidden="true" />}>
              Code
            </ExternalButton>
          )}
          {project.demo && (
            <ExternalButton href={project.demo} icon={<ExternalLink size={16} aria-hidden="true" />}>
              Demo
            </ExternalButton>
          )}
        </div>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryItem label="Role" value={project.role} />
        <SummaryItem label="Primary Stack" value={project.tech.slice(0, 3).join(', ')} />
        <SummaryItem label="Focus" value={project.highlights[0]} />
        <SummaryItem label="Artifact" value="Public repo + case study" />
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-10">
          <CaseSection title="Problem" body={project.caseStudy.problem} />
          <CaseSection title="Approach" body={project.caseStudy.approach} />
          <ListSection title="Architecture" items={project.caseStudy.architecture} />
          <ListSection title="Outcomes" items={project.caseStudy.outcomes} />
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="font-semibold">Highlights</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <span key={item} className="rounded bg-blue-600/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="font-semibold">Tech</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </article>
  );
}

function ExternalButton({ href, icon, children }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {icon}
      {children}
    </a>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="border-l-2 border-blue-600 pl-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-100">{value}</div>
    </div>
  );
}

function CaseSection({ title, body }) {
  return (
    <section>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{body}</p>
    </section>
  );
}

function ListSection({ title, items }) {
  return (
    <section>
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
