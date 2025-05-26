import { motion } from "framer-motion";
import './styles-comp.css'

import { styles } from "../styles";
import Links from "./Links";
import me from '../assets/me.jpg'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="w-full flex flex-col items-start md:items-start">
          <h1 className={`${styles.heroHeadText} text-[#F5EFE7]`}>
            Hi, I'm <span className='text-[#EC7FA9]'>Haider</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#F5EFE7]`}>
            Software Engineering Student <br/>
            AI Engineer & Full-Stack Developer
          </p>
          
          {/* Links section - centered on mobile, left-aligned on desktop */}
          <div className="mt-7 md:mt-16 w-full flex justify-center md:justify-start">
            <Links />
          </div>
        </div>
      </div>
      
      {/* Image section - moved up for better visibility on mobile */}
      <div className="absolute md:right-20 lg:right-40 xl:right-82 
                     bottom-20 sm:bottom-24 md:bottom-36
                     right-1/2 transform translate-x-1/2 md:translate-x-0
                     z-10">
        <div className="container-bg p-3 sm:p-5 rounded-2xl 
                       w-[250px] sm:w-[350px] md:w-[400px] 
                       h-[250px] sm:h-[330px] md:h-[370px] 
                       flex justify-center items-center">
          <img 
            src={me} 
            alt="Haider Malik" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
