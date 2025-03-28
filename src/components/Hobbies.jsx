import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { hobbies } from "../constants";

const HobbyCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full border-2 border-cardBorder p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-cardBg rounded-[20px] py-5 px-8 min-h-[320px] flex flex-col'
      >
        <div className="flex items-center mb-4">
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain mr-4'
          />
          <h3 className='text-[#F5EFE7] text-[24px] font-bold'>
            {title}
          </h3>
        </div>

        <p className="text-[#F5EFE7] text-[16px] flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Hobbies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Outside of work</p>
        <h2 className={styles.sectionHeadText}>Hobbies.</h2>
      </motion.div>

      <div className='mt-0 w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#EC7FA9] text-[17px] max-w-3xl leading-[30px]'
        >
        When I'm Not Coding or Studying, I Enjoy Spending My Time On These Activities That Help Me Stay Balanced And Creative.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={`hobby-${index}`} index={index} {...hobby} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
