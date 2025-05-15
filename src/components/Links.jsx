import React, { useState } from 'react';
import './links-style.css';
import mail from "../assets/mail.png";
import github from "../assets/github-2.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import discord from "../assets/discord.png";

const Links = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Discord username copied!");
    setTimeout(() => {
      setCopyMessage("");
    }, 3000);
  };

  return (
    <div className="card relative">
      <ul className="flex-row">
        {/* GitHub */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <a href="https://github.com/HaiderMalikk" target="_blank" rel="noopener noreferrer">
            <div className="svg flex justify-center items-center">
              <img src={github} alt="GitHub" className="w-7 h-7" />
            </div>
          </a>
          <div className="text">GitHub</div>
        </li>
        
        {/* LinkedIn */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <a href="https://www.linkedin.com/in/haider-malikk/" target="_blank" rel="noopener noreferrer">
            <div className="svg flex justify-center items-center">
              <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
            </div>
          </a>
          <div className="text">LinkedIn</div>
        </li>
        
        {/* YouTube */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <a href="https://www.youtube.com/@greenbytecode" target="_blank" rel="noopener noreferrer">
            <div className="svg flex justify-center items-center">
              <img src={youtube} alt="YouTube" className="w-7 h-7" />
            </div>
          </a>
          <div className="text">YouTube</div>
        </li>

        {/* Email */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <a href="mailto:haidermalik662@gmail.com">
            <div className="svg flex justify-center items-center">
              <img src={mail} alt="Email" className="w-7 h-7" />
            </div>
          </a>
          <div className="text">Email</div>
        </li>
        
        {/* Discord */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <a onClick={() => copyToClipboard("___haider___")} className="cursor-pointer">
            <div className="svg flex justify-center items-center">
              <img src={discord} alt="Discord" className="w-[32px] h-[32px] mb-1" />
            </div>
          </a>
          <div className="text">Discord</div>
        </li>
      </ul>
      
      {copyMessage && (
        <div className="mt-4 p-2 bg-[#F5EFE7] text-[#1A1A1D] rounded text-center">
          {copyMessage}
        </div>
      )}
    </div>
  );
};

export default Links;
