import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Programming Languages': ['Python', 'Java', 'C'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React','Flask',"Node.js"],
    'AI & ML': ['Streamlit','Data Preprocessing & Feature Engineering'],
    'Version Control': ['Git', 'GitHub'],
    'Deployment': ['Netlify', 'Render'],
    'Databases': ['MySQL','JDBC'],
    'Data Visualization': ['PowerBI']
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;