import ExperienceCard from "../cards/ExperienceCard";
import { experiences } from "../../constants/constants";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Work Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My professional experience, learning journey, and the technologies
            I have worked with.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              company={experience.company}
              role={experience.role}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;