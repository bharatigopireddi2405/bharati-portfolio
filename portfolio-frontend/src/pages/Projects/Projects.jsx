import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../constants/constants";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Here are some of the projects I have built to improve my
            frontend, backend, and full-stack development skills.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;