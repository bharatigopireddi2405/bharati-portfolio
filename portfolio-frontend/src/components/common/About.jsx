import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "MySQL",
  "REST APIs",
];

function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I'm a passionate Junior Software Engineer with a strong interest
            in Java Full Stack Development. I enjoy building scalable web
            applications, learning modern technologies, and solving real-world
            problems through clean and efficient code.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Left Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Core Skills
            </h3>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors duration-300 hover:border-cyan-400 hover:bg-slate-700"
                >
                  <FaCheckCircle className="shrink-0 text-cyan-400" />

                  <span className="text-lg">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Quick Info
            </h3>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-5 rounded-xl border border-slate-700 bg-slate-800 p-6"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;