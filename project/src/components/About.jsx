import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            I am a passionate Software Developer, Web Developer, and Prompt Engineer with a strong foundation in various programming languages and technologies. Currently pursuing my Bachelor's in Computer Science at Anurag University, I am dedicated to creating innovative solutions and staying up-to-date with the latest technological advancements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;