import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Deepika R | Aspiring Software Developer</title>
        <meta name="description" content="Portfolio of Deepika R - A motivated developer with a strong foundation in programming, focused on building impactful digital solutions with React, Python, and modern web technologies." />
        <meta name="keywords" content="Deepika R, Software Developer, React, Python, MERN Stack, Web Developer, Portfolio" />
        <meta property="og:title" content="Deepika R | Aspiring Software Developer" />
        <meta property="og:description" content="Portfolio of Deepika R - A motivated developer focused on building impactful digital solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
