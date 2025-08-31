import { motion } from "framer-motion";
import { sortCoursework } from "../data/coursework.js";

export default function CourseTimeline() {
  const terms = sortCoursework();

  return (
    <div className="relative">
      {/* vertical spine */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

      <ul className="space-y-6">
        {terms.map((term, i) => (
          <motion.li
            key={term.termId}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
            className="relative pl-10 md:pl-12"
          >
            <span className="absolute left-3.5 md:left-5 top-2 inline-block h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-600/10" />

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold">{term.label}</h3>
                {typeof term.gpa === "number" && (
                  <span className="text-xs text-gray-500">GPA {term.gpa.toFixed(2)}</span>
                )}
                {term.deanList && (
                  <span className="text-xs px-2 py-0.5 rounded bg-green-600/10 text-green-700 dark:text-green-300 border border-green-600/20">
                    Dean’s List
                  </span>
                )}
              </div>

              <div className="mt-3 grid gap-3">
                {term.courses.map((c, idx) => (
                  <div
                    key={`${term.termId}-${c.code}-${idx}`}
                    className="rounded-xl border border-gray-200 dark:border-gray-800 p-3 bg-white dark:bg-gray-800"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-medium">
                        {c.code} — {c.title}
                        {c.credits ? (
                          <span className="ml-2 text-xs text-gray-500">{c.credits} cr.</span>
                        ) : null}
                      </div>
                      {c.grade && (
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-600/10 text-blue-700 dark:text-blue-300">
                          {c.grade}
                        </span>
                      )}
                    </div>

                    {c.highlights && (
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        {c.highlights}
                      </p>
                    )}

                    {c.tags?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
