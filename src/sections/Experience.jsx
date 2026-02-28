import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Terminal, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'KCX',
    period: '2025 - Present',
    location: 'Vadodara (On-site)',
    description:
      'Contributing to FinOps-focused product modules, including dashboard implementation, API-integrated workflows, and performance-focused feature development.',
    highlights: ['React.js', 'Node.js', 'PostgreSQL', 'GitHub'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Edunet Foundation',
    period: 'Nov 2024 - Apr 2025',
    location: 'Remote',
    description:
      'Built backend modules for an Employee Leave Management System using ABAP RAP and SAP HANA schemas to manage requests, approvals, and leave balances.',
    highlights: ['ABAP RAP', 'SAP HANA', 'Eclipse ADT', 'REST Workflow Logic'],
  },
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 px-6 relative z-10"
    >
      <div className="flex items-center gap-4 mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Experience<span className="text-indigo-600 dark:text-purple-500">.log</span>
        </h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-500/30 to-transparent dark:from-purple-500/30" />
      </div>

      <div className="relative space-y-8">
        <div
          className="absolute left-[11px] md:left-6 top-2 bottom-2 w-[1px]
          bg-gradient-to-b from-indigo-500 via-blue-500/20 to-transparent
          dark:from-purple-500 dark:via-blue-500/20"
        />

        {experiences.map((experience, idx) => (
          <motion.div
            key={experience.company + experience.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="relative pl-10 md:pl-20 group"
          >
            <div className="absolute left-0 md:left-4 top-1 w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-ping bg-indigo-500/20 dark:bg-purple-500/20" />
              <div
                className="relative w-3 h-3 rounded-full z-10 border-2
                bg-white border-indigo-500 dark:bg-[#0a0a0f] dark:border-purple-500"
              />
            </div>

            <div
              className="p-6 md:p-8 rounded-[2rem] transition-all duration-500 backdrop-blur-sm
              bg-white/80 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-500/30
              dark:bg-white/5 dark:border-white/5 dark:hover:border-purple-500/20 dark:shadow-none dark:group-hover:bg-white/[0.07]"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                <div>
                  <h4
                    className="text-xl md:text-2xl font-bold transition-colors
                    text-slate-900 group-hover:text-indigo-600
                    dark:text-white dark:group-hover:text-purple-400"
                  >
                    {experience.role}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm font-mono text-slate-500 dark:text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-indigo-500 dark:text-purple-500" /> {experience.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {experience.location}
                    </span>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap
                  bg-indigo-50 border border-indigo-100 text-indigo-600
                  dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-purple-400"
                >
                  <Calendar size={14} /> {experience.period}
                </div>
              </div>

              <p className="leading-relaxed mb-6 max-w-3xl text-slate-600 dark:text-gray-400">{experience.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                {experience.highlights.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 text-[10px] font-mono px-3 py-1 rounded-md transition-all
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

      <div className="mt-16 flex justify-center">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono
          bg-slate-100 border border-slate-200 text-slate-500
          dark:bg-white/5 dark:border-white/5 dark:text-gray-600"
        >
          <Terminal size={12} />
          <span className="uppercase tracking-[0.2em]">Internship timeline synced with resume data</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
