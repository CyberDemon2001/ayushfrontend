import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
