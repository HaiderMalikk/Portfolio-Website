import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Define a placeholder image for new projects
import placeholder from "../assets/placeholder1.png"; // Make sure this file exists or use another image from assets
import pg1 from "../assets/pg1.png"; // Placeholder image for new projects
import pg2 from "../assets/pg2.png"; // Placeholder image for new projects
import pg3 from "../assets/pg3.png"; // Placeholder image for new projects
import pg4 from "../assets/pg4.png"; // Placeholder image for new projects
import pg5 from "../assets/pg5.png"; // Placeholder image for new projects
import pg6 from "../assets/pg6.png"; // Placeholder image for new projects
// Import website icon
import website from "../assets/website.png"; 

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
  },
  {
    name: "Mood Atlas",
    description: "Mood Finder is an app that recommends destinations based on user moods or feelings. It uses Google Places API for location data and Google Maps API to display the recommended places. It uses OpenAI API to analyze the mood of the user and recommend places based on that.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Flask", color: "blue-text-gradient" },
      { name: "SpringBoot", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
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
    name: "Neural Network Circuit Optimizer",
    description: "The Neural Network Circuit Optimizer, built on my custom digital circuit simulator, uses AI and machine learning to optimize simple digital circuits.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "Tensorflow", color: "blue-text-gradient" },
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
      { name: "Neural Networks", color: "pink-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    image: pg3,
    source_code_link: "https://github.com/HaiderMalikk/Neural-Network-Circuit-Optimizer",
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
    name: "Smart Paper Summarizer",
    description:
      "Smart Paper Summarizer is an AI tool that summarizes educational papers. It uses PyPDF to extract text, OpenAI’s Ada for text embeddings, and Chroma to store and query these embeddings. The context is then passed to GPT-4 mini, which generates concise and accurate summaries.",
    tags: [
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "Chroma", color: "pink-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
    ],
    image: pg5,
    source_code_link: "https://github.com/HaiderMalikk/Smart-Paper-Summarizer",
  },
  {
    name: "Chess Engine and Smart Bot",
    description:
      "My Chess Game Made with Pygame. The game includes a chess game engine, chess bot and its smart move finder. The game can be played with another person or a Chess bot powered by powerful algorithms and data. ELO: 1200",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Pygame", color: "blue-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "Chess", color: "pink-text-gradient" },
      { name: "Algorithms", color: "pink-text-gradient" },
    ],
    image: pg6,
    source_code_link: "https://github.com/HaiderMalikk/Chess",
  },
];

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
        className='bg-cardBg p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={`${name} project thumbnail - ${description.substring(0, 50)}...`}
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
          <h3 className='text-[#F5EFE7] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-[#F5EFE7] text-[14px]'>{description}</p>
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
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#EC7FA9] text-[17px] max-w-3xl leading-[30px]'
        >
          The Following Projects Showcase My Skills And Experience Through
          Real-World Examples Of My Work. Each Project Is Briefly Described With
          Links To The Website And Code Repositories. It Reflects My Creativity,
          Ability To Solve Complex Problems, Work With Different Technologies,
          And My Passion For Building Meaningful Applications.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Change from empty string to "projects" to match navLinks id
export default SectionWrapper(Works, "projects");
