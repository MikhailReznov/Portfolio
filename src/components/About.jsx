import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Founder & CTO | Game developer | Unreal Engine Generalist | Lecturer | Gamer</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a <b>game developer</b> and gaming enthusiast with more than <b>5 years</b> of industry experience. 
        My preferred game engine is <b>Unreal Engine</b>.

        I have participated in many projects where I was able to acquire skills in <b>VFX, Environment -Ambient, 
        Level Design, Scene composition- and Sound Design</b> working with <b>Oral Roberts University</b> 
        recreating the Chapel for Meta-Events, a AA gaming studio in Barcelona where I made 
        impressive levels and visuals; and companies like <b>Lead Voices</b>, <b>HackerHouseHQ</b>, and 
        recently <b>Neo-Worlder</b> by Lootverse that create <b>games and metaverse experiences</b> with unique features.

        I've also given <b>lectures</b> on UE to students of all ages, teaching them 
        techniques for creating <b>open worlds, game features, importing custom models</b>, 
        etc. and I have helped many develop their <b>skills</b>.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
