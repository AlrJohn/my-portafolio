import ExperienceTimeline from "../components/ExperienceTimeline.jsx";

export default function Experience() {
  return (
    <section className="page py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Experience</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Highlights across internships, research, and leadership.
      </p>

      <ExperienceTimeline />
    </section>
  );
}
