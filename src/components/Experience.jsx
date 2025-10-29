import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import the starbucks icon or use a placeholder
import work from "../assets/company/work.jpeg"; // Make sure this path is correct
import work2 from "../assets/company/work2.png"; // Make sure this path is correct

// Modify the experiences array to leave only the Starbucks entry
const experiences = [
  {
    title: "Full Stack Developer Co-op",
    company_name: "Royal Bank of Canada",
    icon: work2, 
    iconBg: "#EC7FA9",
    date: "September 2025 - April 2026",
    points: [
      "Working in the Technology and Operations RIG Team. RIG is short for RBC Interface Guidlines and it's RBC core design system used internaly by many teams across RBC.", 
      "At RBC i will be working with React, Angular and Typescript to build and maintain reusable components, RIG's AI Agent/ MCP server and other tools to help developers and designers.",
      "Used CI/CD tools like Jenkins and GitHub Actions to automate the build and deployment process.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "AI/ML Engineer Intern",
    company_name: "CAPRiser Advisory",
    icon: work,
    iconBg: "#EC7FA9",
    date: "March 2025 - June 2025",
    points: [
      "Built an AI-powered financial analysis system to evaluate market trends and investment opportunities.",
      "Integrated real-time financial data APIs (e.g., Yahoo Finance) for key indicators like RSI, moving averages, and volatility.",
      "Designed ML models in Python for stock prediction, ensuring accuracy via real-world validation.",
      "Led AWS deployment, optimizing scalability and real-time data processing.",
      "Created technical documentation for seamless project handover",
      "Collaborated in a fast-paced, research-driven environment with the CEO and developers.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#EC7FA9",
        color: "#F5EFE7",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #EC7FA9" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: `0 0 0 4px #F5EFE7, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)`,
        ...(experience.icon === work2 && { width: '60px', height: '60px' })
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full overflow-visible'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`${experience.icon === work2 ? 'w-[95%] h-[95%] scale-150' : 'w-[70%] h-[70%]'} object-contain rounded-2xl`}
            style={experience.icon === work2 ? { transform: 'scale(1.5)', transformOrigin: 'center' } : {}}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#F5EFE7] text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[#F5EFE7] text-[16px] font-semibold italic'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#F5EFE7] text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#F5EFE7">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
