import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircle, FaTimes } from 'react-icons/fa';

import APIIcon from '../img/APIIcon.png';
import sethuicon from '../img/sethuicon.jpg' ;
import BotIcon from '../img/BotIcon.webp';
// Import your image here
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sureksha Setu",
      description: "An online web application designed to assist people during natural or man-made calamities. It gathers input from victims regarding their situation and promptly activates the nearest available volunteer. By coordinating with NGOs such as Akshaya Patra and government forces like the NDRF, the platform ensures efficient disaster response.",
      imageUrl:sethuicon, 
      githubUrl: "",
    },
    {
      title: "Movie Character Chatbot:",
      description: "A chatbot which respond like the movie character you choose to talk there are more than 30+ fictional character related to different movie industry (Tollyword,Bollyword,Hollyword) you can clear your doubts with them you can ask anything to them they will respond according to the personality them have in that movie",
      imageUrl:BotIcon, 
      githubUrl: "https://github.com/SistlaVishva04/MovieCharacters_Chatbot",
    },
    {
      title: "API Keys Generator",
      description: "Created a web-based API Keys Generator platform that grants users free access to a vast number of public API keys depending on their requirements, such as AI models (OpenAI, Gemini), weather services, maps, and more",
      imageUrl:APIIcon,
      githubUrl: "", 
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="h-49 bg-gray-600 relative">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Image Coming Soon
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaCircle className="text-blue-400 animate-pulse" />
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                </div>
                <div className="mt-4 flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
                
                 GitHub
                  </motion.button>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <FaTimes size={24} />
              </button>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;