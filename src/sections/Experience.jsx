import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Terminal, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Software Developer",
    company: "KCX (FinOps Startup)",
    period: "2025 – Present",
    location: "Remote / Hybrid",
    description: "Leading the architectural design of a Cloud Cost Intelligence platform. Focused on building high-performance monitoring dashboards and data-ingestion pipelines.",
    highlights: ["React.js", "Node.js", "PostgreSQL", "AWS Infrastructure"]
  },
  {
    role: "Backend Developer Intern",
    company: "Edunet Foundation",
    period: "Nov 2024 – Apr 2025",
    location: "Remote",
    description: "Engineered backend logic for enterprise Employee Management systems. Specialized in integrating SAP HANA and ABAP RAP for high-availability data handling.",
    highlights: ["ABAP", "SAP HANA", "REST API Architecture"]
  }
];

const Experience = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 px-6 relative z-10"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Experience<span className="text-indigo-600 dark:text-purple-500">.log</span>
        </h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-500/30 to-transparent dark:from-purple-500/30" />
      </div>
      
      <div className="relative space-y-8">
        {/* The Animated "Path" Line */}
        <div className="absolute left-[11px] md:left-6 top-2 bottom-2 w-[1px] 
          bg-gradient-to-b from-indigo-500 via-blue-500/20 to-transparent
          dark:from-purple-500 dark:via-blue-500/20" 
        />

        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-10 md:pl-20 group"
          >
            {/* Pulsing Timeline Node */}
            <div className="absolute left-0 md:left-4 top-1 w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-ping
                bg-indigo-500/20 dark:bg-purple-500/20" 
              />
              <div className="relative w-3 h-3 rounded-full z-10 border-2
                bg-white border-indigo-500
                dark:bg-[#0a0a0f] dark:border-purple-500" 
              />
            </div>

            {/* Experience Card */}
            <div className="p-6 md:p-8 rounded-[2rem] transition-all duration-500 backdrop-blur-sm
              bg-white/80 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-500/30
              dark:bg-white/5 dark:border-white/5 dark:hover:border-purple-500/20 dark:shadow-none dark:group-hover:bg-white/[0.07]"
            >
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold transition-colors
                    text-slate-900 group-hover:text-indigo-600
                    dark:text-white dark:group-hover:text-purple-400"
                  >
                    {exp.role}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm font-mono text-slate-500 dark:text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-indigo-500 dark:text-purple-500" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap
                  bg-indigo-50 border border-indigo-100 text-indigo-600
                  dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-purple-400"
                >
                  <Calendar size={14} /> {exp.period}
                </div>
              </div>

              <p className="leading-relaxed mb-6 max-w-3xl text-slate-600 dark:text-gray-400">
                {exp.description}
              </p>

              {/* Tech Highlights as "Dependencies" */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                {exp.highlights.map(tech => (
                  <span key={tech} className="flex items-center gap-1.5 text-[10px] font-mono px-3 py-1 rounded-md transition-all
                    bg-slate-50 border border-slate-200 text-slate-500 group-hover:border-indigo-500/30
                    dark:bg-white/5 dark:border-white/5 dark:text-gray-400 dark:group-hover:border-purple-500/20"
                  >
                    <CheckCircle2 size={10} className="text-indigo-500/50 dark:text-purple-500/50" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Execution Footer */}
      <div className="mt-16 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono
          bg-slate-100 border border-slate-200 text-slate-500
          dark:bg-white/5 dark:border-white/5 dark:text-gray-600"
        >
          <Terminal size={12} />
          <span className="uppercase tracking-[0.2em]">End of experience log // system active</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;