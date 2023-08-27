import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function Home() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Skills/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default Home
