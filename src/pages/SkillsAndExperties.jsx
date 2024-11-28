import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaBicycle } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiAppwrite, SiExpo } from 'react-icons/si';
import Title from '../components/Title';

const SkillsAndExpertise = () => {
  return (
    <div role='Skills' className="flex flex-col items-center min-h-screen  p-8 animate-slideUp">
      <div className='text-[5vh]'>
        <Title text1={"Skills & Expertise".toUpperCase()} />
      </div>
      
      {/* Skills Grid */}
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* MERN Stack Section */}
          <div className="bg-gray-500/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <FaNodeJs className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">MERN Stack</h3>
            <p className="text-gray-300">Building full-stack applications with MongoDB, Express, React, and Node.js.</p>
            <div className="flex space-x-3 mt-4">
              <SiMongodb className="text-green-500 text-3xl" />
              <SiExpress className="text-gray-300 text-3xl" />
              <FaReact className="text-cyan-400 text-3xl" />
              <FaNodeJs className="text-cyan-400 text-3xl" />
            </div>
          </div>

          {/* React Native Section */}
          <div className="bg-gray-500/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <FaReact className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">React Native & Expo</h3>
            <p className="text-gray-300">Building cross-platform mobile apps using React Native and Expo.</p>
            <div className="flex space-x-3 mt-4">
              <FaReact className="text-cyan-400 text-3xl" />
              <SiExpo className="text-purple-500 text-3xl" />
            </div>
          </div>

          {/* Appwrite Section */}
          <div className="bg-gray-500/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <SiAppwrite className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Appwrite Integration</h3>
            <p className="text-gray-300">Using Appwrite for backend services like database, authentication, and API management.</p>
          </div>
        </div>
      </div>

      {/* Expertise Grid */}
      <div className="mt-10 w-full max-w-4xl">

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Control Systems Section */}
          <div className="bg-gray-500/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Control Systems</h3>
            <p className="text-gray-300">In-depth knowledge of control system principles and applications.</p>
          </div>

          {/* Transform Theory Section */}
          <div className="bg-gray-500/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Transform Theory</h3>
            <p className="text-gray-300">Expertise in signal processing and transform techniques.</p>
          </div>

          {/* Electromagnetic Field Theory Section */}
          <div className="bg-gray-500/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Electromagnetic Field Theory</h3>
            <p className="text-gray-300">Solid understanding of electromagnetic principles and applications.</p>
          </div>

          {/* Additional Expertise */}
          <div className="bg-gray-500/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Additional Skills</h3>
            <p className="text-gray-300">API binding, Git, MongoDB, GitBash, Express, Tailwind, Cloudinary, BLDC motor, Motor Controller, BMS, LFP battery, Micro Controller, TOM.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExpertise;
  