import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
        >
          Janu<span className="text-purple-500">.</span>
        </motion.h1>
        
        {/* Animated Progress Bar */}
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          // --- FIX IS HERE: Trigger onComplete when THIS animation ends ---
          onAnimationComplete={() => {
            console.log("Animation done, switching state...");
            onComplete(); 
          }}
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;