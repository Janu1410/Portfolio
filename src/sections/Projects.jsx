import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderCode, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'CodeVizAi',
    status: 'Completed',
    role: 'Full-Stack Developer',
    timeline: '2026',
    summary: 'AI-powered code visualization platform for real-time Python tracing and explanation.',
    problem: 'Developers find it hard to understand control flow and variable changes in unfamiliar code.',
    solution:
      'Built a platform that performs line-by-line backend tracing and visualizes execution with AI-generated explanations.',
    result: 'Delivered a working prototype with interactive trace visualization and explainability support.',
    tech: ['ReactJS', 'FastAPI', 'Framer Motion', 'Monaco Editor', 'Hugging Face API'],
    stack: {
      frontend: 'ReactJS + Monaco Editor',
      backend: 'FastAPI (Python)',
      db: 'Session-based runtime data',
    },
    features: ['Line-by-line tracing', 'Variable visualization', 'AI explanation output'],
    liveUrl: 'https://your-codevizai-live-link.com',
    githubUrl: 'https://github.com/Dhruvi1523/CodeVizAi2026',
  },
  {
    title: 'AI Quizzer',
    status: 'Completed',
    role: 'Full-Stack Developer',
    timeline: '2025',
    summary: 'AI-powered quiz generator with authentication and adaptive quiz generation.',
    problem: 'Static quizzes lack engagement and personalization.',
    solution:
      'Implemented React + Node.js app with JWT authentication and dynamic quiz generation using Groq AI API.',
    result: 'Built and containerized the platform using Docker with deployment-ready architecture.',
    tech: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Docker', 'Groq AI API'],
    stack: {
      frontend: 'ReactJS',
      backend: 'Node.js + Express.js',
      db: 'MongoDB',
    },
    features: ['Secure login', 'Adaptive quizzes', 'Containerized deployment'],
    liveUrl: 'https://your-ai-quizzer-live-link.com',
    githubUrl: 'https://github.com/your-username/ai-quizzer',
  },
  {
    title: 'Destiny Wander',
    status: 'Completed',
    role: 'Full-Stack Developer',
    timeline: '2025',
    summary: 'Responsive travel website with authentication, bookings, and dynamic content management.',
    problem: 'Travel planning and booking experience needed a single integrated web flow.',
    solution:
      'Developed full-stack application with ASP.NET MVC and MongoDB for booking workflow and content modules.',
    result: 'Delivered a responsive working travel platform with user authentication and booking management.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'ASP.NET MVC', 'MongoDB'],
    stack: {
      frontend: 'HTML + CSS + Bootstrap',
      backend: 'ASP.NET MVC',
      db: 'MongoDB',
    },
    features: ['User authentication', 'Dynamic content modules', 'Booking management'],
    liveUrl: 'https://your-destiny-wander-live-link.com',
    githubUrl: 'https://github.com/Janu1410/DestinyWander',
  },
  {
    title: 'Urban Navigator (CityBot)',
    status: 'Prototype',
    role: 'Chatbot Developer',
    timeline: '2024',
    summary: 'Virtual city guide chatbot for personalized suggestions and route guidance.',
    problem: 'Residents and tourists struggle to discover places and choose optimal routes quickly.',
    solution:
      'Designed a city-assistant chatbot concept that provides tailored recommendations and practical city navigation support.',
    result: 'Created a validated project concept with recommendation-focused conversational flow.',
    tech: ['Chatbot', 'Maps Integration', 'Recommendation Engine'],
    stack: {
      frontend: 'Web Chat UI',
      backend: 'Chatbot Engine',
      db: 'Place and preference dataset',
    },
    features: ['Personalized suggestions', 'Nearby place discovery', 'Route support'],
    liveUrl: 'https://your-chatbot-live-link.com',
    githubUrl: 'https://github.com/your-username/urban-navigator-citybot',
  },
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
        {projects.map((project, i) => (
          <motion.button
            type="button"
            key={i}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project)}
            className="group relative p-8 rounded-[2rem] transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm text-left
              bg-white border border-slate-200 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30
              dark:bg-white/5 dark:border-white/10 dark:hover:border-purple-500/30 dark:hover:shadow-none"
          >
            <div
              className="absolute left-0 top-1/4 bottom-1/4 w-[1px] transition-opacity duration-500 opacity-0 group-hover:opacity-100
              bg-gradient-to-b from-transparent via-indigo-500 to-transparent dark:via-purple-500"
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-5">
                <div
                  className="p-3 rounded-2xl
                  bg-indigo-50 text-indigo-600
                  dark:bg-purple-500/10 dark:text-purple-500"
                >
                  <FolderCode size={28} />
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-1 rounded border
                  bg-slate-100 border-slate-200 text-slate-600
                  dark:bg-white/5 dark:border-white/10 dark:text-gray-400"
                >
                  {project.status}
                </span>
              </div>

              <h4
                className="text-2xl font-bold mb-2 transition-colors
                text-slate-900 group-hover:text-indigo-600
                dark:text-white dark:group-hover:text-white"
              >
                {project.title}
              </h4>

              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-gray-500 mb-4">
                {project.role} | {project.timeline}
              </p>

              <p className="text-sm mb-5 leading-relaxed text-slate-600 dark:text-gray-400">{project.summary}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-1 rounded transition-all
                    bg-slate-100 border border-slate-200 text-slate-500
                    dark:bg-white/5 dark:border-white/5 dark:text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  <span
                    className="text-xs font-mono uppercase tracking-widest font-bold
                    text-indigo-600 dark:text-purple-500"
                  >
                    View Project Details
                  </span>
                  <ArrowUpRight size={16} className="text-indigo-600 dark:text-purple-500" />
                </div>
                <div className="flex items-center gap-2 text-slate-400 dark:text-gray-600">
                  <ExternalLink size={14} />
                  <Github size={14} />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
