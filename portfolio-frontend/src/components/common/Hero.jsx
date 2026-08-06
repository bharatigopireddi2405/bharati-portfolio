import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile.png";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background glow */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-[-100px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-semibold uppercase tracking-wide text-cyan-400"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-4 text-5xl font-extrabold leading-tight lg:text-7xl"
            >
              Bharati Gopireddi
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-5 text-2xl font-medium text-slate-300 lg:text-3xl"
            >
              Junior Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
            >
              Passionate Java Full Stack Developer who enjoys building scalable
              web applications using Java, Spring Boot, React, and modern
              backend technologies. I enjoy solving real-world problems and
              continuously improving my technical skills.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-colors duration-300 hover:bg-cyan-600"
              >
                <FaDownload />
                Download Resume
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-cyan-500"
              >
                <MdEmail />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="mt-10 flex items-center gap-6"
            >
              <motion.a
                href="#"
                aria-label="GitHub profile"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-3xl text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="#"
                aria-label="LinkedIn profile"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-3xl text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="mailto:bharatigopireddi@gmail.com"
                aria-label="Send email"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-3xl text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                <MdEmail />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src={profileImage}
                alt="Bharati Gopireddi"
                whileHover={{ scale: 1.05 }}
                className="h-80 w-80 rounded-full border-4 border-cyan-500 object-cover shadow-2xl shadow-cyan-500/20"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;