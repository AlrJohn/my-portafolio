import CourseTimeline from "../components/CourseTimeline.jsx";

export default function CourseworkPage() {
  return (
    <section className="page py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Coursework</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Selected courses I’ve completed with strong performance and relevant skills.
      </p>
      <CourseTimeline />
    </section>
  );
}
