import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet"; 
import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  Papers, // Import Papers component 
  StarsCanvas, 
  Education, 
  Hobbies 
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Haider Malik",
              "url": "https://www.haidercodes.com",
              "sameAs": [
                "https://github.com/HaiderMalikk",
                "https://www.linkedin.com/in/haider-malikk/",
                "https://www.youtube.com/@greenbytecode"
              ],
              "jobTitle": "Software Engineering Student",
              "worksFor": {
                "@type": "Organization",
                "name": "York University"
              },
              "description": "Software Engineering student specializing in AI/ML, data science, and full-stack development.",
              "knowsAbout": ["Python", "Java", "JavaScript", "TypeScript", "React", "NextJS", "Machine Learning", "AI", "Data Science"]
            }
          `}
        </script>
      </Helmet>
      <div className='relative z-0 bg-#1A1A1D'>
        <StarsCanvas /> 
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Experience />
          <Tech />
          <Works />
          <Papers /> {/* Add Papers component here, after Works */}
          <Hobbies />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
