import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Code2, Terminal, FolderKanban, BadgeCheck, ChartNoAxesCombined } from 'lucide-react';

const quickStats = [
  { label: 'Projects', value: '4+' },
  { label: 'Internships', value: '2' },
  { label: 'Core Skills', value: '15+' },
  { label: 'Certifications', value: '2' },
];

const projectInsights = [
  {
    title: 'CodeVizAi',
    note: 'Built AI-powered Python code tracing with interactive execution visualization.',
  },
  {
    title: 'AI Quizzer',
    note: 'Developed adaptive quiz generation flow with JWT auth and API integration.',
  },
  {
    title: 'Destiny Wander',
    note: 'Delivered responsive travel platform with authentication and booking workflows.',
  },
  {
    title: 'Urban Navigator',
    note: 'Designed city-guide chatbot concept for personalized recommendations and routing.',
  },
];

const certifications = [
  {
    name: 'Python & Data Analysis',
    provider: 'Edunet Foundation',
    focus: 'Data processing and analytical workflow fundamentals',
  },
  {
    name: 'AI & SAP Conversational AI Chatbot',
    provider: 'Edunet Foundation',
    focus: 'Conversational interface and chatbot solution design',
  },
  {
    name: 'Git and GitHub',
    provider: 'Coursera',
    focus: 'Version control, collaboration, and branch-based workflow',
  },
];

const About = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science',
      institution: 'The Maharaja Sayajirao University of Baroda',
      result: 'CGPA: 7.12',
      icon: <GraduationCap size={18} className="text-purple-600 dark:text-purple-500" />,
    },
    {
      degree: '12th Standard (Science)',
      institution: 'Ganesh Shala Timana Talaja, Bhavnagar',
      result: '90.16%',
      icon: <Award size={18} className="text-blue-600 dark:text-blue-500" />,
    },
    {
      degree: '10th Standard',
      institution: 'SMT N S Dankhara U B Vidhyalaya Bela, Bhavnagar',
      result: '84.5%',
      icon: <BookOpen size={18} className="text-pink-600 dark:text-pink-500" />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto py-20 px-6 relative z-10"
    >
      <div className="flex items-center gap-4 mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          About<span className="text-indigo-600 dark:text-purple-500">_</span>
        </h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-500/50 to-transparent dark:from-purple-500/50" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border p-4 bg-white/80 border-slate-200 dark:bg-white/5 dark:border-white/10"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-6">
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-blue-500/20 dark:from-purple-500/20 dark:to-blue-500/20">
            <div
              className="
              bg-white/80 dark:bg-[#0a0a0f]/80
              backdrop-blur-xl p-6 md:p-8 rounded-[14px]
              border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none
            "
            >
              <div className="flex items-center gap-2 mb-6 text-slate-500 dark:text-gray-500 font-mono text-xs">
                <Terminal size={14} /> <span>janu.profile --summary</span>
              </div>

              <div className="space-y-4 font-sans leading-relaxed text-slate-600 dark:text-gray-400">
                <p>
                  I am a <span className="text-slate-900 dark:text-white font-semibold">final-year Computer Science student</span> focused on
                  practical full-stack development and backend automation.
                </p>
                <p>
                  My work includes building <span className="text-slate-900 dark:text-white font-medium">RESTful APIs</span>, managing database
                  workflows, and creating user-focused web applications with modern frontend frameworks.
                </p>
                <p>
                  I primarily use
                  <span className="text-indigo-600 dark:text-purple-400 font-medium"> ReactJS, Node.js, Express.js, ASP.NET MVC, MongoDB, and SQL</span>,
                  while strengthening fundamentals in Data Structures, DBMS, and OOPS.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center gap-4">
                <Code2 className="text-indigo-600 dark:text-purple-500" size={20} />
                <p className="text-sm italic text-slate-500 dark:text-gray-500">
                  "I focus on practical engineering that is simple, scalable, and easy to maintain."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-mono text-indigo-600 dark:text-purple-500 uppercase tracking-[0.2em] mb-4">
            Profile.Insights()
          </h4>

          <div className="space-y-4 relative">
            <div className="absolute left-[21px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-indigo-500/30 via-blue-500/20 to-transparent dark:from-purple-500/50" />

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 group"
              >
                <div
                  className="absolute left-4 top-1 w-3 h-3 rounded-full
                  bg-white dark:bg-[#0a0a0f]
                  border-2 border-indigo-500 dark:border-purple-500
                  z-10 group-hover:scale-125 transition-transform"
                />

                <div
                  className="p-4 rounded-xl transition-all duration-300
                  bg-white border border-slate-200 hover:border-indigo-500/30 hover:shadow-md
                  dark:bg-white/5 dark:border-white/5 dark:hover:border-purple-500/30 dark:hover:shadow-none"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-sm text-slate-800 dark:text-gray-200">{edu.degree}</h5>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded border
                      bg-indigo-50 text-indigo-600 border-indigo-200
                      dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20"
                    >
                      {edu.result}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-gray-500 font-medium mb-2">{edu.institution}</p>
                  <div className="flex gap-2">{edu.icon}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border p-4 bg-white border-slate-200 dark:bg-white/5 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <ChartNoAxesCombined size={15} className="text-indigo-600 dark:text-purple-500" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-purple-400">Current Goal</p>
            </div>
            <p className="text-xs text-slate-600 dark:text-gray-400">
              Building production-ready web applications while improving backend depth, system design fundamentals, and deployment workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="rounded-xl border p-4 bg-white border-slate-200 dark:bg-white/5 dark:border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <FolderKanban size={15} className="text-indigo-600 dark:text-purple-500" />
            <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-purple-400">Project Insights</p>
          </div>
          <ul className="space-y-2">
            {projectInsights.map((project) => (
              <li key={project.title}>
                <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">{project.title}</p>
                <p className="text-xs text-slate-600 dark:text-gray-400">{project.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border p-4 bg-white border-slate-200 dark:bg-white/5 dark:border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <BadgeCheck size={15} className="text-indigo-600 dark:text-purple-500" />
            <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-purple-400">Certifications</p>
          </div>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">{cert.name}</p>
                <p className="text-xs text-slate-600 dark:text-gray-400">
                  {cert.provider} | {cert.focus}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
