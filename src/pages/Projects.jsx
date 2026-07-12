import Section from '../components/Section.jsx';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <div className="page py-12 md:py-16">
      <Section
        title="Projects"
        subtitle="Public, inspectable work across AI products, RAG systems, and full-stack delivery."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} p={project} />)}
        </div>
      </Section>
    </div>
  );
}
