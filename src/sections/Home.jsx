import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const roles = ["Software Developer", "Full Stack Developer", "React Specialist"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center min-h-[85vh] text-center px-6 relative z-10"
    >
      
      {/* Professional Badge - 
          Light: Indigo tint (Clean) 
          Dark: Purple tint (Glow) 
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm
          border border-indigo-100 bg-indigo-50 text-indigo-700
          dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400"
      >
        Software Engineer
      </motion.div>
      
      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r 
          from-indigo-600 to-violet-600 
          dark:from-purple-400 dark:to-blue-500">
          Janu.
        </span>
      </h1>
      
      {/* Dynamic Role Animation */}
      <div className="text-xl md:text-4xl font-light text-slate-600 dark:text-gray-400 mb-6 flex flex-col md:flex-row items-center justify-center gap-2">
        <span>I am a</span>
        <div className="h-[40px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              // Light: Indigo gradient / Dark: Purple gradient
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r 
                from-indigo-600 to-violet-600 
                dark:from-purple-400 dark:to-blue-500"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Professional Overview */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-gray-400 mb-10 leading-relaxed"
      >
        Passionate Full-Stack Developer with a strong focus on building 
        <span className="text-slate-900 dark:text-white font-semibold"> scalable web applications</span> and 
        <span className="text-slate-900 dark:text-white font-semibold"> interactive user interfaces</span>. 
        Specializing in the React ecosystem, I bridge the gap between clean backend architecture and 
        high-performance frontend experiences.
      </motion.p>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Primary Action */}
        <button className="px-8 py-3 rounded-full font-bold text-white transition-all duration-300 hover:scale-105
          bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20
          dark:from-purple-600 dark:to-blue-600 dark:shadow-purple-500/25"
        >
          Download CV
        </button>
        
        {/* Secondary Action */}
        <button className="px-8 py-3 rounded-full font-bold transition-all duration-300 backdrop-blur-md
          border border-slate-200 text-slate-700 hover:bg-slate-50
          dark:border-white/10 dark:text-white dark:hover:bg-white/5"
        >
          Contact Me
        </button>
      </div>
    </motion.div>
  );
};

export default Home;