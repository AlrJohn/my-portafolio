import Section from '../components/Section.jsx';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <Section title="Projects" subtitle="Selected work in AI/ML and full-stack">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </Section>
  );
}
