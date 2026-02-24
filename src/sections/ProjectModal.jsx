import React from 'react';
import { motion } from 'framer-motion';
import { X, Server, Layout, Database, ExternalLink, Terminal } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 
        bg-white/60 dark:bg-[#0a0a0f]/90 backdrop-blur-md transition-colors duration-500"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] relative shadow-2xl
          bg-white border border-slate-200 
          dark:bg-[#0f0f15] dark:border-white/10 dark:shadow-purple-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="relative h-56 flex flex-col items-center justify-center border-b
          bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 border-slate-100
          dark:from-purple-600/10 dark:to-blue-600/10 dark:border-white/5"
        >
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-3 rounded-full transition-all group border
              bg-slate-100 border-slate-200 hover:bg-slate-200
              dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            <X size={20} className="text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={14} className="text-indigo-600 dark:text-purple-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] 
              text-indigo-600/70 dark:text-purple-500/70"
            >
              Project.Manifest
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
            {project.title}
          </h2>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left/Middle Column: Technical Narrative */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-4 rounded-full bg-indigo-500 dark:bg-purple-500" />
                  <h3 className="text-lg font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                    System Overview
                  </h3>
                </div>
                <p className="leading-relaxed text-lg font-light italic text-slate-600 dark:text-gray-400">
                  "{project.longDesc}"
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-4 rounded-full bg-blue-500" />
                  <h3 className="text-lg font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                    Core Architecture
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Card 1: Frontend */}
                  <div className="p-5 rounded-2xl border transition-colors group
                    bg-slate-50 border-slate-200 hover:border-indigo-500/30
                    dark:bg-white/5 dark:border-white/5 dark:hover:border-purple-500/30"
                  >
                    <Layout size={20} className="mb-3 transition-transform group-hover:scale-110
                      text-indigo-600 dark:text-purple-500" 
                    />
                    <p className="text-[10px] font-mono font-bold uppercase mb-1 text-slate-400 dark:text-gray-500">Frontend</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-gray-300">{project.stack.frontend}</p>
                  </div>

                  {/* Card 2: Backend */}
                  <div className="p-5 rounded-2xl border transition-colors group
                    bg-slate-50 border-slate-200 hover:border-blue-500/30
                    dark:bg-white/5 dark:border-white/5 dark:hover:border-blue-500/30"
                  >
                    <Server size={20} className="mb-3 transition-transform group-hover:scale-110
                      text-blue-600 dark:text-blue-500" 
                    />
                    <p className="text-[10px] font-mono font-bold uppercase mb-1 text-slate-400 dark:text-gray-500">Backend</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-gray-300">{project.stack.backend}</p>
                  </div>

                  {/* Card 3: Database */}
                  <div className="p-5 rounded-2xl border transition-colors group
                    bg-slate-50 border-slate-200 hover:border-purple-400/30
                    dark:bg-white/5 dark:border-white/5 dark:hover:border-purple-400/30"
                  >
                    <Database size={20} className="mb-3 transition-transform group-hover:scale-110
                      text-violet-600 dark:text-purple-400" 
                    />
                    <p className="text-[10px] font-mono font-bold uppercase mb-1 text-slate-400 dark:text-gray-500">Database</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-gray-300">{project.stack.db}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Key Features & Action */}
            <div className="space-y-8">
              {/* FIXED: Background logic for Module Features */}
              <div className="p-8 rounded-[2rem] border backdrop-blur-sm relative overflow-hidden
                bg-indigo-50/50 border-indigo-100
                dark:bg-transparent dark:bg-gradient-to-b dark:from-purple-500/10 dark:to-transparent dark:border-purple-500/20"
              >
                <h4 className="font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest
                  text-slate-900 dark:text-white"
                >
                   Module Features
                </h4>
                <ul className="space-y-4 relative z-10">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm group
                      text-slate-600 dark:text-gray-400"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shadow-sm
                        bg-indigo-500 shadow-indigo-500/50
                        dark:bg-purple-500 dark:shadow-purple-500/50" 
                      />
                      <span className="group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg text-white
                  bg-gradient-to-r from-indigo-600 to-violet-600 shadow-indigo-500/20
                  dark:from-purple-600 dark:to-blue-600 dark:shadow-purple-500/20"
                onClick={() => window.open(project.link, '_blank')}
              >
                Launch Demo <ExternalLink size={18} />
              </button>
              
              <p className="text-center text-[10px] font-mono uppercase tracking-widest
                text-slate-400 dark:text-gray-600"
              >
                Source verified // 2026 Build
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;