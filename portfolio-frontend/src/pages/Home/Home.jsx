import Hero from "../../components/common/Hero";
import About from "../../components/common/About";
import Skills from "../../components/common/Skills";
import Projects from "../../components/common/Projects";
import Experience from "../../components/common/Experience";
import Education from "../../components/common/Education";
import Contact from "../../components/common/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

export default Home;