import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import { experienceGroups } from "../data/experience.js";

export default function Experience() {
  return (
    <section className="page py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Experience</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        AI engineering, research, and leadership grouped by how recruiters evaluate the work.
      </p>

      <div className="space-y-16">
        {experienceGroups.map((group) => (
          <section key={group.title}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {group.description}
              </p>
            </div>
            <ExperienceTimeline items={group.items} accent={group.accent} />
          </section>
        ))}
      </div>
    </section>
  );
}
