import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  border-2 border-cardBorder p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-cardBg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[#F5EFE7] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#548CA8] text-[17px] max-w-3xl leading-[30px]'
      >
        <span className="inline-flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-[#548CA8] text-xl" />
          <span className="text-[#F5EFE7] font-medium">Toronto, Canada</span>
        </span>
        <br />
        Hello! My name is Haider, and I just finished my second year at York University studying Software Engineering. Now I am currently interning at RBC as a Full Stack Developer on the RIG team. I Have Experience In Programming Languages Such As Python, JavaScript AI/ML Frameworks Like Tensorflow, PyTorch and Scikit-learn, Full-Stack Development with React, And NextJS and Backend Frameworks Like Flask, ExpressJS. My Interests Include Machine Learning, Data Science, AI research and development and a little bit of Web Development. My Goal Is To Learn Something New Every Day, Whether Through School, LeetCode, Personal Projects, Or Other Activities. I Firmly Believe That Every Bit Of Knowledge Gained, No Matter How Small, Represents Progress.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
