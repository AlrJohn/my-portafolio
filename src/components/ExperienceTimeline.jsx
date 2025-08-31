import { motion } from "framer-motion";
import { sortExperiences } from "../data/experience.js";

export default function ExperienceTimeline() {
  const items = sortExperiences();

  return (
    <div className="relative">
      {/* vertical spine */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

      <ul className="space-y-6">
        {items.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
            className="relative pl-10 md:pl-12"
          >
            {/* dot */}
            <span className="absolute left-3.5 md:left-5 top-2 inline-block h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-600/10" />

            <article className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
              <header className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold">
                  {item.role} •{" "}
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
                {item.bullets?.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>

              {item.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function formatRange(start, end, current) {
  const fmt = (s) => {
    if (!s) return "Present";
    const [y, m] = s.split("-").map(Number);
    return new Date(y, (m || 1) - 1).toLocaleString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  return `${fmt(start)} — ${current ? "Present" : fmt(end)}`;
}
