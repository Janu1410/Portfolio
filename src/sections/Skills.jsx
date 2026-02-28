import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Layers, Terminal } from 'lucide-react';

const skillCategories = [
  { 
    name: "Frontend", 
    icon: <Globe size={16} />, 
    skills: ["ReactJS", "HTML5", "CSS3", "Framer Motion", "Bootstrap"] 
  },
  { 
    name: "Backend", 
    icon: <Database size={16} />, 
    skills: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB"] 
  },
  { 
    name: "Cloud & Tools", 
    icon: <Layers size={16} />, 
    skills: ["AWS", "Docker", "Git/GitHub", "Postman", "Monaco Editor"] 
  },
  { 
    name: "Core Systems", 
    icon: <Cpu size={16} />, 
    skills: ["C++", "Python", "Java", "JavaScript", "Data Structures", "DBMS", "SQL"] 
  }
];

const Skills = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 px-6 relative z-10"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Technical.Stack<span className="text-indigo-600 dark:text-purple-500">()</span>
        </h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-500/50 to-transparent dark:from-purple-500/50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-[1px] rounded-2xl transition-all duration-500
              bg-gradient-to-br from-indigo-500/20 to-transparent hover:from-indigo-500/40
              dark:from-white/10 dark:hover:from-purple-500/40"
          >
            {/* Module Container */}
            <div className="
              bg-white/80 dark:bg-[#0a0a0f]/90 
              backdrop-blur-xl p-6 rounded-[15px] h-full 
              border border-slate-200 dark:border-white/5
              shadow-lg dark:shadow-none
            ">
              
              {/* Category Header: Terminal Style */}
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 dark:text-purple-500">{cat.icon}</span>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-gray-300">
                    {cat.name}
                  </h4>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-white/10" />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative group/skill"
                  >
                    <div className="
                      px-4 py-2 rounded-lg text-xs md:text-sm font-mono transition-all duration-300
                      bg-slate-50 border border-slate-200 text-slate-600
                      hover:bg-white hover:border-indigo-500/50 hover:text-indigo-700 hover:shadow-sm
                      
                      dark:bg-white/5 dark:border-white/10 dark:text-gray-400 
                      dark:group-hover/skill:text-white dark:group-hover/skill:border-purple-500/50
                    ">
                      <span className="mr-2
                        text-indigo-400 group-hover/skill:text-indigo-600
                        dark:text-purple-500/50 dark:group-hover/skill:text-purple-400"
                      >#</span>
                      {skill}
                      
                      {/* Subtle Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity
                        bg-indigo-500/5 dark:bg-purple-500/5" 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer System Status */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono
          bg-white/50 border border-slate-200 text-slate-500
          dark:bg-white/5 dark:border-white/5 dark:text-gray-500"
        >
          <Terminal size={12} className="text-emerald-500 dark:text-green-500" />
          <span className="uppercase tracking-tighter">System environment: Fully optimized</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
