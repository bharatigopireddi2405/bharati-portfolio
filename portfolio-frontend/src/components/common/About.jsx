import { FaCheckCircle } from "react-icons/fa";

// Data (Later this can come from an API or database)
const skills = [
  "Java",
  "Spring Boot",
  "React",
  "SQL",
  "FastAPI",
  "Git",
  "REST APIs",
  "Tailwind CSS",
];

function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <h2 className="text-center text-4xl font-bold">
          About Me
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400">
          I'm a passionate Junior Software Engineer with a strong interest
          in Java Full Stack Development. I enjoy building scalable web
          applications, learning modern technologies, and solving real-world
          problems through clean and efficient code.
        </p>

        {/* Two Column Layout */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">

          {/* Left Column - Skills */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Core Skills
            </h3>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-700"
                >
                  <FaCheckCircle className="text-cyan-400" />

                  <span className="text-lg">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Info */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Quick Info
            </h3>

            <div className="space-y-5 rounded-xl border border-slate-700 bg-slate-800 p-6">

              <div>
                <span className="font-semibold text-cyan-400">
                  Experience:
                </span>
                <p className="mt-1 text-slate-300">
                  Junior Software Engineer
                </p>
              </div>

              <div>
                <span className="font-semibold text-cyan-400">
                  Specialization:
                </span>
                <p className="mt-1 text-slate-300">
                  Java Full Stack Development
                </p>
              </div>

              <div>
                <span className="font-semibold text-cyan-400">
                  Domain:
                </span>
                <p className="mt-1 text-slate-300">
                  BFSI | Loan Origination System (LOS)
                </p>
              </div>

              <div>
                <span className="font-semibold text-cyan-400">
                  Location:
                </span>
                <p className="mt-1 text-slate-300">
                  India
                </p>
              </div>

              <div>
                <span className="font-semibold text-cyan-400">
                  Goal:
                </span>
                <p className="mt-1 text-slate-300">
                  Become a Professional Java Full Stack Developer
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;