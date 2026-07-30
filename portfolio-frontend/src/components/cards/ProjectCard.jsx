import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10">
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 flex-grow leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-cyan-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} source code`}
          className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} live project`}
          className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;