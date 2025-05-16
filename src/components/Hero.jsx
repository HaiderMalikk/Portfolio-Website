import { motion } from "framer-motion";
import './styles-comp.css'

import { styles } from "../styles";
import Links from "./Links";
import me from '../assets/me.jpg'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-[#F5EFE7]`}>
            Hi, I'm <span className='text-[#EC7FA9]'>Haider</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#F5EFE7]`}>
            Software Engineering Student <br className='sm:block hidden' />
            AI Engineer & Full-Stack Developer
          </p>
          <div className="mt-20">
        <Links />
          </div>
        </div>
      </div>
      
      {/* img section - responsive implementation */}
      <div className="absolute md:right-20 lg:right-40 xl:right-82 
                      bottom-10 sm:bottom-20 md:bottom-36
                      z-10">
        <div className="container-bg p-3 sm:p-5 rounded-2xl 
                        w-[300px] sm:w-[350px] md:w-[400px] 
                        h-[300px] sm:h-[330px] md:h-[370px] 
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
