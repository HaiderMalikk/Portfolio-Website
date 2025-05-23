import React from 'react';
import './links-style.css';
import mail from "../assets/mail.png";
import github from "../assets/github-2.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import discord from "../assets/discord.png";

const Links = () => {
  const copyToClipboard = async (text) => {
    try {
      // Use modern clipboard API
      await navigator.clipboard.writeText(text);
      
      // Check if it's a mobile device
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Use native alert on mobile
        alert("Discord username (___haider___) copied to clipboard!");
      } else {
        // Use custom alert on desktop (non-disruptive)
        const alertElement = document.createElement('div');
        alertElement.textContent = "Discord username copied!";
        alertElement.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #F5EFE7;
          color: #1A1A1D;
          padding: 10px 20px;
          border-radius: 5px;
          text-align: center;
          z-index: 9999;
          font-size: 0.875rem;
        `;
        document.body.appendChild(alertElement);
        
        // Remove the alert after 3 seconds
        setTimeout(() => {
          alertElement.remove();
        }, 3000);
      }
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
        // Show alert based on device type
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          alert("Discord username (___haider___) copied to clipboard!");
        } else {
          // Desktop notification
          const alertElement = document.createElement('div');
          alertElement.textContent = "Discord username copied!";
          alertElement.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #F5EFE7;
            color: #1A1A1D;
            padding: 10px 20px;
            border-radius: 5px;
            text-align: center;
            z-index: 9999;
            font-size: 0.875rem;
          `;
          document.body.appendChild(alertElement);
          
          // Remove the alert after 3 seconds
          setTimeout(() => {
            alertElement.remove();
          }, 3000);
        }
      } catch (err) {
        alert("Failed to copy. Please try again.");
      }
      
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="card relative">
      <ul className="flex-row">
        
        {/* Email */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <a href="mailto:haidermalik662@gmail.com">
            <div className="svg flex justify-center items-center svg-mobile">
              <img src={mail} alt="Email" className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
          </a>
          <div className="text">Email</div>
        </li>

        {/* GitHub */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <a href="https://github.com/HaiderMalikk" target="_blank" rel="noopener noreferrer">
            <div className="svg flex justify-center items-center svg-mobile">
              <img src={github} alt="GitHub" className="w-5 h-5 sm:w-7 sm:h-7" />
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
            <div className="svg flex justify-center items-center svg-mobile">
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-7 sm:h-7" />
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
            <div className="svg flex justify-center items-center svg-mobile">
              <img src={youtube} alt="YouTube" className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
          </a>
          <div className="text">YouTube</div>
        </li>

        
        {/* Discord - Changed to use native alerts on mobile */}
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <button 
            onClick={() => copyToClipboard("___haider___")}
            className="cursor-pointer bg-transparent border-0 p-0"
          >
            <div className="svg flex justify-center items-center svg-mobile">
              <img src={discord} alt="Discord" className="w-6 h-6 sm:w-[32px] sm:h-[32px] mb-1" />
            </div>
          </button>
          <div className="text">Discord</div>
        </li>
      </ul>
    </div>
  );
};

export default Links;
