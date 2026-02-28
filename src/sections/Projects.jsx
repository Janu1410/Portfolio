import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderCode, ArrowUpRight, Terminal } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "CodeVizAi",
    desc: "AI-Based code visualization tool using Monaco Editor and AST parsing to trace Python logic.",
    longDesc: "A technical tool for developers to visualize execution flow. It parses Abstract Syntax Trees (AST) to provide real-time logic tracing with AI-driven explanations.",
    tech: ["React", "FastAPI", "Groq AI"],
    stack: { frontend: "React, Monaco Editor", backend: "FastAPI, Python AST", db: "Stateless" },
    features: ["Real-time AST Parsing", "AI Code Explanations", "Interactive Editor"],
    link: "#"
  },
  {
    title: "Destiny Wander",
    desc: "Comprehensive travel management system engineered for seamless trip planning and booking.",
    longDesc: "A robust travel platform built on the .NET framework. It handles dynamic itinerary generation and user management with a responsive, enterprise-grade architecture.",
    tech: ["ASP.NET", "Bootstrap", "SQL Server"],
    stack: { frontend: "HTML5, CSS3, Bootstrap", backend: "ASP.NET Core, C#", db: "MS SQL Server" },
    features: ["Secure User Authentication", "Dynamic Booking Engine", "Responsive Dashboard"],
    link: "#"
  },
  {
    title: "Urban Navigator (CityBot)",
    desc: "Virtual city guide chatbot for residents and tourists with personalized recommendations and route help.",
    longDesc: "Urban Navigator, also known as CityBot, is a smart city exploration assistant that helps users discover attractions, nearby amenities, and better ways to travel through the city. It focuses on personalized suggestions, user-friendly interaction, and practical navigation guidance.",
    tech: ["Chatbot", "Maps Integration", "Recommendation Engine"],
    stack: { frontend: "Web Chat UI", backend: "AI Chatbot Engine", db: "Places and User Preference Data" },
    features: ["Personalized City Suggestions", "Nearby Attraction Discovery", "Route Guidance for Users"],
    link: "https://your-chatbot-live-link.com" 
  },
  {
    title: "AI Quizzer",
    desc: "Adaptive learning platform featuring JWT auth and containerized deployment.",
    longDesc: "Full-stack application generating dynamic quizzes using LLMs. Features secure auth and is fully containerized for scalable cloud deployment.",
    tech: ["MERN", "Docker", "LLM"],
    stack: { frontend: "React", backend: "Node.js, Express", db: "MongoDB" },
    features: ["AI Question Generation", "JWT Security", "Docker Microservices"],
    link: "#"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto py-20 px-6 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(p)}
            className="group relative p-8 rounded-[2rem] transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm
              bg-white border border-slate-200 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30
              dark:bg-white/5 dark:border-white/10 dark:hover:border-purple-500/30 dark:hover:shadow-none"
          >
            {/* Minimalist Design: Decorative Code Line on the left */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] transition-opacity duration-500 opacity-0 group-hover:opacity-100
              bg-gradient-to-b from-transparent via-indigo-500 to-transparent
              dark:via-purple-500" 
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl 
                  bg-indigo-50 text-indigo-600
                  dark:bg-purple-500/10 dark:text-purple-500"
                >
                  <FolderCode size={28} />
                </div>
                <div className="flex gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded transition-all
                      bg-slate-100 border border-slate-200 text-slate-500 group-hover:text-indigo-600 group-hover:border-indigo-500/30
                      dark:bg-white/5 dark:border-white/5 dark:text-gray-500 dark:group-hover:text-purple-300 dark:group-hover:border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-3 transition-colors
                text-slate-900 group-hover:text-indigo-600
                dark:text-white dark:group-hover:text-white"
              >
                {p.title}
              </h4>
              <p className="text-sm mb-8 leading-relaxed line-clamp-2
                text-slate-600 dark:text-gray-400"
              >
                {p.desc}
              </p>

              {/* Action-oriented Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs font-mono uppercase tracking-widest font-bold
                    text-indigo-600 dark:text-purple-500"
                  >
                    View Project Details
                  </span>
                  <ArrowUpRight size={16} className="text-indigo-600 dark:text-purple-500" />
                </div>
                
                <Terminal size={14} className="transition-colors
                  text-slate-400 group-hover:text-indigo-500/50
                  dark:text-gray-700 dark:group-hover:text-purple-500/50" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
