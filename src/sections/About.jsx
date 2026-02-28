import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Code2, Terminal } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "The Maharaja Sayajirao University of Baroda",
      result: "CGPA: 7.12",
      icon: <GraduationCap size={18} className="text-purple-600 dark:text-purple-500" />
    },
    {
      degree: "12th Standard (Science)",
      institution: "Higher Secondary Board",
      result: "90.16%",
      icon: <Award size={18} className="text-blue-600 dark:text-blue-500" />
    },
    {
      degree: "10th Standard",
      institution: "Secondary Board",
      result: "84.50%",
      icon: <BookOpen size={18} className="text-pink-600 dark:text-pink-500" />
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 px-6 relative z-10"
    >
      {/* Section Header with Tech Decoration */}
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          About<span className="text-indigo-600 dark:text-purple-500">_</span>
        </h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-500/50 to-transparent dark:from-purple-500/50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        
        {/* Left: Bio in a "Code Editor" Style Container */}
        <div className="lg:col-span-3 space-y-6">
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-blue-500/20 dark:from-purple-500/20 dark:to-blue-500/20">
            <div className="
              bg-white/80 dark:bg-[#0a0a0f]/80 
              backdrop-blur-xl p-6 md:p-8 rounded-[14px] 
              border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none
            ">
              <div className="flex items-center gap-2 mb-6 text-slate-500 dark:text-gray-500 font-mono text-xs">
                <Terminal size={14} /> <span>janu.sys --initialize</span>
              </div>
              
              <div className="space-y-4 font-sans leading-relaxed text-slate-600 dark:text-gray-400">
                <p>
                  I am a <span className="text-slate-900 dark:text-white font-semibold">Software Developer</span> who enjoys building
                  reliable web applications with clean UI and practical backend logic. My core stack includes
                  <span className="text-indigo-600 dark:text-purple-400 font-medium"> React, Node.js, FastAPI, PostgreSQL, and MongoDB</span>.
                </p>
                <p>
                  Currently, I am working as a <span className="text-slate-900 dark:text-white font-semibold">Software Developer Intern</span> at
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> KCX (Vadodara, on-site)</span>, where I contribute to
                  FinOps product modules, dashboard features, and API-driven workflows.
                </p>
                <p>
                  Along with development, I actively strengthen my fundamentals in
                  <span className="text-slate-900 dark:text-white font-medium"> Data Structures, DBMS, and SQL</span>, and use
                  <span className="text-slate-900 dark:text-white font-medium"> GitHub, Docker, AWS, and Postman</span> in day-to-day project work.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center gap-4">
                <Code2 className="text-indigo-600 dark:text-purple-500" size={20} />
                <p className="text-sm italic text-slate-500 dark:text-gray-500">
                  "I focus on writing practical, maintainable code that solves real user problems."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Education as a "Dependency Tree" */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-mono text-indigo-600 dark:text-purple-500 uppercase tracking-[0.2em] mb-6">
            System.Education()
          </h4>
          
          <div className="space-y-4 relative">
            {/* Vertical Line Decoration */}
            <div className="absolute left-[21px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-indigo-500/30 via-blue-500/20 to-transparent dark:from-purple-500/50" />
            
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-1 w-3 h-3 rounded-full 
                  bg-white dark:bg-[#0a0a0f] 
                  border-2 border-indigo-500 dark:border-purple-500 
                  z-10 group-hover:scale-125 transition-transform" 
                />
                
                <div className="p-4 rounded-xl transition-all duration-300
                  bg-white border border-slate-200 hover:border-indigo-500/30 hover:shadow-md
                  dark:bg-white/5 dark:border-white/5 dark:hover:border-purple-500/30 dark:hover:shadow-none
                ">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-sm text-slate-800 dark:text-gray-200">{edu.degree}</h5>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border 
                      bg-indigo-50 text-indigo-600 border-indigo-200
                      dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20"
                    >
                      {edu.result}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-gray-500 font-medium mb-2">{edu.institution}</p>
                  <div className="flex gap-2">
                    {edu.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
