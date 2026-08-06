import SkillCard from "../cards/SkillCard";
import FadeIn from "../ui/FadeIn";
import { skills } from "../../constants/constants";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              My Skills
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Technologies I Work With
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              These are the technologies and tools I use while building
              frontend, backend, and full-stack applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <FadeIn
              key={skill.id}
              delay={index * 0.1}
            >
              <SkillCard
                name={skill.name}
                category={skill.category}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;