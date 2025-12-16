import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { caseStudies, services, skills, testimonials } from "./data/data";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services services={services}/>
      <CaseStudies caseStudies={caseStudies} />
      <Skills skills={skills}/>
      <Testimonials testimonials={testimonials}/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
