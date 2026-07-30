import EducationCard from "../cards/EducationCard";
import { education } from "../../constants/constants";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Academic Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My educational background and the knowledge I gained throughout my academic journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item) => (
            <EducationCard
              key={item.id}
              institute={item.institute}
              degree={item.degree}
              duration={item.duration}
              score={item.score}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;