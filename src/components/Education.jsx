import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, slideIn } from "../utils/motion";
import york from '../assets/york.jpg'

const EducationCard = ({ school, degree, date, description, image, index }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-5">
      <img 
        src={york} 
        alt={school}
        className="w-[150px] h-[150px] rounded-lg object-cover"
      />
      <div>
        <h3 className="text-[#F5EFE7] font-bold text-[40px]">{school}</h3>
        <p className="text-[#F5EFE7] text-[30px] font-semibold">{degree}</p>
        <p className="mt-2 text-[#F5EFE7]  text-[20px]">{date}</p>
      </div>
    </div>
    <p className="text-[#F5EFE7] text-[18px]"><strong>Relevant coursework</strong> <br/> {description}</p>
  </div>
);

const Education = () => {
  const educationItems = [
    {
      school: "York University",
      degree: "Bachelor of Engineering in Software Engineering",
      date: "September 2023 - June 2027",
      description: "• Intro and Advanced OOP • Data Structures • Computer Organization• Embedded Systems • Software Development Project • Mechatronics Programing",
      image: "/path/to/university-image.jpg", 
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-cardBg p-8 rounded-2xl"
        >
          <div className="mt-2">
            {educationItems.map((education, index) => (
              <EducationCard key={`education-${index}`} index={index} {...education} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
