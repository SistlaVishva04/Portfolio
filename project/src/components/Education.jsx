import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Anurag University",
      period: "2022-Ongoing"
    },
    {
      degree: "Intermediate in MPC",
      institution: "Sri Chaitanya College",
      period: "2020-2022"
    },
    {
      degree: "Schooling in State board",
      institution: "Sri Chaitanya School",
      period: "-2020"
    }
  ];

  const certifications = [
    "Completed Python course in Infosys Spring Board",
    "Completed HTML,CSS course in Infosys Spring Board",
    "Done Prompt Engineering certification in Simplilearn"
  ];

  return (
    <section id="education" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Certifications</h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-4 flex items-center">
                  <span className="text-yellow-400 mr-2">🎖</span>
                  <p>{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;