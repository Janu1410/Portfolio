import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Code2, Terminal, BadgeCheck } from 'lucide-react';

const quickStats = [
  { label: 'Projects', value: '4+' },
  { label: 'Internships', value: '2' },
  { label: 'Core Skills', value: '15+' },
  { label: 'Certifications', value: '4' },
];

const certifications = [
  {
    name: 'Software Development and SAP Technologies',
    provider: 'Code Unnati',
    focus: 'Program certificate',
    file: '/codeUnnati2.pdf',
    thumb: '/certificates/code-unnati.png',
  },
  {
    name: 'SAP Conversational AI Chatbot',
    provider: 'Edunet Foundation',
    focus: 'Conversational AI solution design',
    file: '/Edunet_Foundation_SAP.pdf',
    thumb: '/certificates/edunet-sap-chatbot.png',
  },
  {
    name: 'Generative AI Foundations',
    provider: 'Coursera',
    focus: 'Core concepts and tools',
    file: '/generativeAI-coursera.pdf',
    thumb: '/certificates/generative-ai-coursera.png',
  },
  {
    name: 'Git and GitHub',
    provider: 'Coursera',
    focus: 'Version control and collaboration',
    file: '/github-coursera.pdf',
    thumb: '/certificates/git-github-coursera.png',
  },
];

const About = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science',
      institution: 'The Maharaja Sayajirao University of Baroda',
      result: 'CGPA: 7.12',
      icon: <GraduationCap size={18} className="text-sky-600 dark:text-sky-500" />,
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
          About<span className="text-teal-600 dark:text-sky-500">_</span>
        </h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-teal-500/50 to-transparent dark:from-sky-500/50" />
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
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500/20 via-transparent to-blue-500/20 dark:from-sky-500/20 dark:to-blue-500/20">
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
                  <span className="text-teal-600 dark:text-sky-400 font-medium"> ReactJS, Node.js, Express.js, ASP.NET MVC, MongoDB, and SQL</span>,
                  while strengthening fundamentals in Data Structures, DBMS, and OOPS.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center gap-4">
                <Code2 className="text-teal-600 dark:text-sky-500" size={20} />
                <p className="text-sm italic text-slate-500 dark:text-gray-500">
                  "I focus on practical engineering that is simple, scalable, and easy to maintain."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-mono text-teal-600 dark:text-sky-500 uppercase tracking-[0.2em] mb-4">
            Profile.Insights()
          </h4>

          <div className="space-y-4 relative">
            <div className="absolute left-[21px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-teal-500/30 via-blue-500/20 to-transparent dark:from-sky-500/50" />

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
                  border-2 border-teal-500 dark:border-sky-500
                  z-10 group-hover:scale-125 transition-transform"
                />

                <div
                  className="p-4 rounded-xl transition-all duration-300
                  bg-white border border-slate-200 hover:border-teal-500/30 hover:shadow-md
                  dark:bg-white/5 dark:border-white/5 dark:hover:border-sky-500/30 dark:hover:shadow-none"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-sm text-slate-800 dark:text-gray-200">{edu.degree}</h5>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded border
                      bg-teal-50 text-teal-600 border-teal-200
                      dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20"
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

        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-2 mb-4">
          <BadgeCheck size={16} className="text-teal-600 dark:text-sky-500" />
          <p className="text-[10px] font-mono uppercase tracking-widest text-teal-600 dark:text-sky-400">Certifications</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="group w-full rounded-xl border border-slate-200 bg-white/80 p-4 transition-colors hover:border-teal-500/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/30"
            >
              <div className="rounded-md border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/5">
                <img
                  src={cert.thumb}
                  alt={`${cert.name} certificate preview`}
                  loading="lazy"
                  className="h-[146px] w-full rounded object-contain"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">{cert.name}</p>
                <p className="text-[11px] text-slate-600 dark:text-gray-400">
                  {cert.provider} | {cert.focus}
                </p>
                <span className="mt-2 inline-block text-[10px] font-mono uppercase tracking-widest text-teal-600 dark:text-sky-400 group-hover:underline">
                  View PDF
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
