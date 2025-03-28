import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas, Hobbies } from "./components";

const App = () => {
  return (
    <BrowserRouter>
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
          <Hobbies />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
