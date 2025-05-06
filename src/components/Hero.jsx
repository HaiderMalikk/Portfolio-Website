import { motion } from "framer-motion";
import './styles-comp.css'

import { styles } from "../styles";
import Code from "./code";
import me from '../assets/IMG_me.png'

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
        <Code />
          </div>
        </div>
      </div>

      <div className="absolute bottom-36 right-72 z-10">
        <div className="container-bg p-5 rounded-2xl w-[350px] h-[320px] flex justify-center items-center">
          <img src={me} alt="me" className="w-[420px] h-[290px] object-cover rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
