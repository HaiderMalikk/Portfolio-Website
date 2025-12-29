import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import the mobile fixes CSS
import './mobile-fixes.css';

// Define a placeholder image for new projects
import placeholder from "../assets/placeholder1.png"; // Make sure this file exists or use another image from assets
import pg1 from "../assets/pg1.png"; // Placeholder image for new projects
import pg2 from "../assets/pg2.png"; // Placeholder image for new projects
import pg3 from "../assets/pg3.png"; // Placeholder image for new projects
import pg4 from "../assets/pg4.png"; // Placeholder image for new projects
import pg5 from "../assets/pg5.png"; // Placeholder image for new projects
import pg6 from "../assets/pg6.png"; // Placeholder image for new projects
import fp1 from "../assets/ada.png"; // Placeholder image for new projects
// Import website icon
import website from "../assets/website.png"; 

// Add this to your projects array in Works.jsx
const featuredProject = null

const projects = [
  // First two projects have both GitHub and website links
  {
     name: "Reddish Trends",
  description: "Reddish Trends is a Reddit powered stock market analyzer. This is a unique website that uses reddit to uncover stock data and anaylize sentiment data using algorithms, add financial data using yahoo finance and provide feedback using AI. ",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "Flask", color: "blue-text-gradient" },
    { name: "TypeScript", color: "green-text-gradient" },
    { name: "Python", color: "green-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
    { name: "OpenAI", color: "pink-text-gradient" },
    { name: "Firebase", color: "pink-text-gradient" },
  ],
  image: pg1,
  source_code_link: "https://github.com/HaiderMalikk/Reddish-Trends",
  live_site_link: "https://www.reddishtrends.com", // This project has a website link
  featured: true // Add this property to identify featured projects
  },
  {
    name: "Reddit Jams",
    description: "RedditJams is an intelligent music recommendation system that analyzes your Spotify playlist, searches Reddit's music community for similar tastes, and uses GPT-4 to generate personalized song recommendations.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: pg5,
    source_code_link: "https://github.com/HaiderMalikk/RedditJams",
    live_site_link: "https://redditjams.com", // This project has a website link
  },
  {
    name: "Mood Atlas",
    description: "Mood Finder is an app that recommends destinations based on user moods or feelings. It uses Google Places API for location data and Google Maps API to display the recommended places. It uses OpenAI API to analyze the mood of the user and recommend places based on that.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Flask", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    image: pg2,
    source_code_link: "https://github.com/HaiderMalikk/Mood-Atlas",
    live_site_link: "https://mood-atlas.vercel.app", // This project has a website link
  },
  // The rest of the projects have only GitHub links (no live_site_link property)
  {
    name: "ADA",
    description: 
    "ADA (Advanced Digital Agent) is aimed to be a JARVIS like AI that can answer question like siri but with the context of the world around you, and you as the admin controling every move of this Agent.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Artificial Intelligence", color: "green-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Computer Vision", color: "pink-text-gradient" },
      { name: "AI Agents", color: "pink-text-gradient" },
      { name: "Intelligent Systems", color: "pink-text-gradient" },
  ],
  image: fp1, // Use an appropriate image from your imports
  source_code_link: "https://github.com/HaiderMalikk/ADA",
  },
  // Add the new projects
  {
    name: "Supa Charge",
    description:
    "Supa Charge is a app that allows users to find electric vehicle charging stations. it uses Google Places API for location data and Google Maps API to display the recommended places.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Xcode", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: pg4,
    source_code_link: "https://github.com/HaiderMalikk/Supa-Charger-App",
  },
  {
    name: "Chess Engine and Smart Bot",
    description:
      "My Chess Game Made with Pygame. The game includes a chess game engine, chess bot and its smart move finder. The game can be played with another person or a Chess bot powered by powerful algorithms and data. ELO: 1200",
    tags: [
      { name: "Pygame", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "Chess", color: "pink-text-gradient" },
      { name: "Algorithms", color: "pink-text-gradient" },
    ],
    image: pg6,
    source_code_link: "https://github.com/HaiderMalikk/Chess",
  },
];

// Add this component before the ProjectCard component
const FeaturedProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450
        }}
      >
        <div className='bg-[#548CA8] p-5 rounded-2xl w-full shadow-lg mobile-project-card featured-project'>
          <div className='flex flex-col lg:flex-row gap-6'>
            {/* Image section - reduced height on mobile */}
            <div className='relative lg:w-1/2 w-full h-[230px] sm:h-[345px]'>
              <img
                src={image}
                alt={`${name} project thumbnail`}
                className='w-full h-full object-contain sm:object-cover rounded-2xl'
              />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                {/* Live site link button */}
                {live_site_link && (
                  <div
                    onClick={() => window.open(live_site_link, "_blank")}
                    className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer mr-2'
                  >
                    <img
                      src={website}
                      alt='live site'
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                )}
                {/* GitHub repository link button */}
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>

            {/* Content section - Add specific mobile classes */}
            <div className='lg:w-1/2 w-full flex flex-col justify-between'>
              <div>
                <h3 className='text-[#F5EFE7] font-bold text-[28px] mobile-project-title'>{name}</h3>
                <div 
                  className='mt-4 text-[#F5EFE7] text-[16px] mobile-project-desc'
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              </div>

              <div className='mt-6 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className='bg-[#548CA8] p-5 rounded-2xl sm:w-[360px] w-full shadow-lg mobile-project-card'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={`${name} project thumbnail`}
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              {/* Live site link button - only render when live_site_link exists */}
              {live_site_link && (
                <div
                  onClick={() => window.open(live_site_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
                >
                  <img
                    src={website}
                    alt='live site'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              )}
              {/* GitHub repository link button */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-[#F5EFE7] font-bold text-[24px] mobile-project-title'>{name}</h3>
            <p className='mt-2 text-[#F5EFE7] text-[14px] mobile-project-desc'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // Filter out null values from featured projects
  const featuredProjects = featuredProject ? [featuredProject] : [];
  return (
    <div className="bg-transparent mobile-projects-section ">
      {/* Debug element to verify visibility */}
      <div className="hidden sm:hidden md:hidden lg:hidden mobile-debug-text text-white p-2 bg-red-500 fixed top-0 left-0 z-50">Projects section visible</div>
      
      <motion.div variants={textVariant()} className="bg-transparent">
        <p className={`${styles.sectionSubText} text-[#548CA8] mobile-section-subtitle`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-white mobile-section-title`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex bg-transparent'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#548CA8] text-[17px] max-w-3xl leading-[30px]'
        >
          The Following Projects Showcase My Skills And Experience Through
          Real-World Examples Of My Work. Each Project Is Briefly Described With
          Links To The Website And Code Repositories. It Reflects My Creativity,
          Ability To Solve Complex Problems, Work With Different Technologies,
          And My Passion For Building Meaningful Applications.
        </motion.p>
      </div>

      {/* Featured Projects - with mobile-specific class for targeting with CSS */}
      {featuredProjects.length > 0 && (
        <div className='mt-0 md:mt-20 flex flex-col gap-10 bg-transparent'>
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={`featured-${project.name}`} {...project} />
          ))}
        </div>
      )}

      <div className='mt-20 flex flex-wrap gap-7 bg-transparent sm:mb-0 mb-40'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

// Change from empty string to "projects" to match navLinks id
export default SectionWrapper(Works, "projects");
