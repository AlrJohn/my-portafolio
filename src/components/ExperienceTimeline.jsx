import { motion as Motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { experience, sortExperiences } from '../data/experience.js';

const accents = {
  blue: 'bg-blue-600 ring-blue-600/10',
  indigo: 'bg-indigo-600 ring-indigo-600/10',
  emerald: 'bg-emerald-600 ring-emerald-600/10',
};

export default function ExperienceTimeline({ items = experience, accent = 'blue' }) {
  const sortedItems = sortExperiences(items);
  const dotClass = accents[accent] || accents.blue;

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

      <ul className="space-y-6">
        {sortedItems.map((item, i) => (
          <Motion.li
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.04 }}
            className="relative pl-10 md:pl-12"
          >
            <span className={`absolute left-3.5 md:left-5 top-2 inline-block h-3 w-3 rounded-full ring-4 ${dotClass}`} />

            <article className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <header className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold">
                  {item.role}
                  <span className="text-gray-500"> / </span>
                  <span className="text-gray-600 dark:text-gray-300">{item.org}</span>
                </h3>
                <span className="text-xs text-gray-500">
                  {formatRange(item.start, item.end, item.current)}
                </span>
              </header>

              {item.location && (
                <div className="text-sm text-gray-500">{item.location}</div>
              )}

              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm leading-relaxed">
                {item.bullets?.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>

              {item.links?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-300"
                    >
                      {link.label} <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}

              {item.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Motion.li>
        ))}
      </ul>
    </div>
  );
}

function formatRange(start, end, current) {
  const fmt = (value) => {
    if (!value) return 'Present';
    const [year, month] = value.split('-').map(Number);
    return new Date(year, (month || 1) - 1).toLocaleString(undefined, {
      month: 'short',
      year: 'numeric',
    });
  };
  return `${fmt(start)} - ${current ? 'Present' : fmt(end)}`;
}
