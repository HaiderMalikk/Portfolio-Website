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
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="ml-1 text-[#F5EFE7] md:w-5 md:h-5"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const Contact = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = async (text) => {
    try {
      // Use modern clipboard API
      await navigator.clipboard.writeText(text);
      setCopyMessage("Username copied to clipboard!");
      setTimeout(() => {
        setCopyMessage("");
      }, 3000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopyMessage("Username copied to clipboard!");
      } catch (err) {
        setCopyMessage("Failed to copy. Please try again.");
      }
      
      document.body.removeChild(textArea);
      
      setTimeout(() => {
        setCopyMessage("");
      }, 3000);
    }
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
          {/* Email contact */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 min-w-[32px] md:min-w-[40px] rounded-full bg-textwhite">
              <img src={mail} alt="Email" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <a href="mailto:haidermalik662@gmail.com" className="text-[#F5EFE7] text-[14px] sm:text-[16px] md:text-[18px] hover:underline hover:text-[#1E1E1E] flex items-center truncate">
              haidermalik662@gmail.com
              <LinkIcon />
            </a>
          </div>

          {/* GitHub contact */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 min-w-[32px] md:min-w-[40px] rounded-full bg-textwhite">
              <img src={github} alt="GitHub" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <a href="https://github.com/HaiderMalikk" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[14px] sm:text-[16px] md:text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center truncate">
              github.com/HaiderMalikk
              <LinkIcon />
            </a>
          </div>

          {/* LinkedIn contact */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 min-w-[32px] md:min-w-[40px] rounded-full bg-[#F5EFE7]">
              <img src={linkedin} alt="LinkedIn" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <a href="https://www.linkedin.com/in/haider-malikk/" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[14px] sm:text-[16px] md:text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center truncate">
              linkedin.com/in/haider-malikk
              <LinkIcon />
            </a>
          </div>
          
          {/* YouTube contact */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 min-w-[32px] md:min-w-[40px] rounded-full bg-[#F5EFE7]">
              <img src={youtube} alt="YouTube" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <a href="https://www.youtube.com/@greenbytecode" target="_blank" rel="noopener noreferrer" className="text-[#F5EFE7] text-[14px] sm:text-[16px] md:text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center truncate">
              youtube.com/@greenbytecode
              <LinkIcon />
            </a>
          </div>

          {/* Discord contact - changed to button for better semantics */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 min-w-[32px] md:min-w-[40px] rounded-full bg-[#F5EFE7]">
              <img src={discord} alt="Discord" className="w-5 h-5 md:w-6 md:h-6 mb-[2px]" />
            </div>
            <button 
              onClick={() => copyToClipboard("___haider___")} 
              className="text-[#F5EFE7] text-[14px] sm:text-[16px] md:text-[18px] hover:underline hover:text-[#1A1A1D] flex items-center cursor-pointer bg-transparent border-0 p-0"
            >
              ___haider___
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1 text-[#F5EFE7] md:w-5 md:h-5"
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
