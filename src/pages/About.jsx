// src/pages/About.jsx
import Section from '../components/Section.jsx';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Section title="About Me" subtitle="Who I am and what I’m about">
      {/* Intro */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm <span className="font-semibold">Jonathan Alavez Reyes</span>, a Computer Science student at
        <span className="font-semibold"> Penn State Abington</span> and Schreyer Honors Scholar, focused on
        <span className="font-semibold"> AI/ML</span>, human-centered systems, and polished full-stack apps.
        I enjoy turning research ideas into usable tools.
      </p>

      {/* CTAs */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/experience"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          View Experience
        </Link>
        <Link
          to="/projects"
          className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          See Projects
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </Link>
      </div>

      {/* Quick stats */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat title="GPA" value="4.00" />
        <Stat title="Focus" value="AI/ML • Full-Stack" />
        <Stat title="Internship" value="AI Engineering @ JLG" />
        <Stat title="Leadership" value="SGA • National Guard" />
      </div>

      {/* Highlights */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="AI + Engineering"
          body="LLM interface over 200k+ transcripts, semantic search (embeddings + clustering), retrieval-augmented generation, and production-minded UX."
        />
        <Card
          title="Research & Impact"
          body="Robotics (ROS, LiDAR, CV), an ongoing study on AI & self-efficacy, and human-centered experimentation to optimize real-world workflows."
        />
      </div>

      {/* Tiny note linking to Experience */}
      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Want the full story? Explore my detailed roles, research, and leadership on the{' '}
        <Link to="/experience" className="underline underline-offset-2 hover:text-blue-600">
          Experience
        </Link>{' '}
        page.
      </p>
    </Section>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-gray-500">{title}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function Card({ title, body }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{body}</p>
    </div>
  );
}
