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
      className="flex min-h-screen items-center bg-slate-950 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-xl font-semibold uppercase tracking-wide text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight lg:text-7xl">
              Bharati Gopireddi
            </h1>

            <h2 className="mt-5 text-2xl font-medium text-slate-300 lg:text-3xl">
              Junior Software Engineer
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Passionate Java Full Stack Developer who enjoys building scalable
              web applications using Java, Spring Boot, React, and modern
              backend technologies. I enjoy solving real-world problems and
              continuously improving my technical skills.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600"
              >
                <FaDownload />
                Download Resume
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-500"
              >
                <MdEmail />
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#"
                className="text-3xl text-slate-400 transition-all duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-3xl text-slate-400 transition-all duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="text-3xl text-slate-400 transition-all duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Bharati Gopireddi"
              className="h-80 w-80 rounded-full border-4 border-cyan-500 object-cover shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;