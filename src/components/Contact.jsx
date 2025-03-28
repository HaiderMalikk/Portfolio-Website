import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import mail from "../assets/mail.png";
import github from "../assets/github-2.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      <p className={styles.sectionSubText}>Get in touch</p>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#EC7FA9] p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5EFE7]">
              <i className="fa fa-envelope text-[#F5EFE7] text-[18px]"></i>
              <img src={mail} alt="Email" className="w-5 h-5" />
            </div>
            <a href="mailto:haidermalik662@gmail.com" className="text-[#F5EFE7] text-[18px]">
              haidermalik662@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5EFE7]">
              <i className="fa fa-github text-[#F5EFE7] text-[18px]"></i>
              <img src={github} alt="GitHub" className="w-5 h-5" />
            </div>
            <a href="https://github.com/HaiderMalikk" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[18px]">
              github.com/HaiderMalikk
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5EFE7]">
              <i className="fa fa-linkedin text-[#F5EFE7] text-[18px]"></i>
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </div>
            <a href="https://www.linkedin.com/in/haider-malikk/" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[18px]">
              linkedin.com/in/haider-malikk
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5EFE7]">
              <i className="fa fa-youtube-play text-[#F5EFE7] text-[18px]"></i>
              <img src={youtube} alt="YouTube" className="w-5 h-5" />
            </div>
            <a href="https://www.youtube.com/@interestingly05" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[18px]">
              youtube.com/@interestingly05
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
