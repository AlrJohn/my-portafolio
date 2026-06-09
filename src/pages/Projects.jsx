import Section from '../components/Section.jsx';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <div className="page py-8">
      <Section title="Projects" subtitle="Selected work in AI/ML and full-stack development">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => <ProjectCard key={project.title} p={project} />)}
        </div>
      </Section>
    </div>
  );
}
