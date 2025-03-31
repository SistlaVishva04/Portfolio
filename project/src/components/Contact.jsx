import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:vishnuvamsi04@gmail.com';
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                onClick={handleEmailClick}
              >
                <FaEnvelope className="text-blue-400 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <span className="text-gray-300 hover:text-blue-400">
                    vishnuvamsi04@gmail.com
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <FaPhone className="text-blue-400 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a href="tel:9493985540" className="text-gray-300 hover:text-blue-400">
                    +91 9493985540
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <FaLinkedin className="text-blue-400 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/vamsi-sistla" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-blue-400"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-300">Hyderabad, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;