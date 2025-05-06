import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import mail from "../assets/mail.png";
import github from "../assets/github-2.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import discord from "../assets/discord.png";

// Link icon component
const LinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="ml-2 text-[#F5EFE7]"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const Contact = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Username copied to clipboard!");
    setTimeout(() => {
      setCopyMessage("");
    }, 3000);
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-cardBg p-8 rounded-2xl"
      >

        <div className="mt-0 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-textwhite">
              <i className="fa fa-envelope text-[#F5EFE7] text-[18px]"></i>
              <img src={mail} alt="Email" className="w-5 h-5" />
            </div>
            <a href="mailto:haidermalik662@gmail.com" className="text-[#F5EFE7] text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center">
              haidermalik662@gmail.com
              <LinkIcon />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-textwhite">
              <i className="fa fa-github text-[#F5EFE7] text-[18px]"></i>
              <img src={github} alt="GitHub" className="w-5 h-5" />
            </div>
            <a href="https://github.com/HaiderMalikk" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center">
              github.com/HaiderMalikk
              <LinkIcon />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5EFE7]">
              <i className="fa fa-linkedin text-[#F5EFE7] text-[18px]"></i>
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </div>
            <a href="https://www.linkedin.com/in/haider-malikk/" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center">
              linkedin.com/in/haider-malikk
              <LinkIcon />
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5EFE7]">
              <i className="fa fa-youtube-play text-[#F5EFE7] text-[18px]"></i>
              <img src={youtube} alt="YouTube" className="w-5 h-5" />
            </div>
            <a href="https://www.youtube.com/@greenbytecode" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center">
              youtube.com/@greenbytecode
              <LinkIcon />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5EFE7]">
              <i className="fa fa-youtube-play text-[#F5EFE7] text-[18px]"></i>
              <img src={discord} alt="Discord" className="w-6 h-6" />
            </div>
            <button 
              onClick={() => copyToClipboard("___haider___")} 
              className="text-[#F5EFE7] text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center cursor-pointer"
            >
              ___haider___
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 text-[#F5EFE7]"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {copyMessage && (
          <div className="mt-4 p-2 bg-[#F5EFE7] text-[#1A1A1D] rounded text-center">
            {copyMessage}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
