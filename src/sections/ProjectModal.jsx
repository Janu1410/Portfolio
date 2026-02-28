import React from 'react';
import { motion } from 'framer-motion';
import { X, Server, Layout, Database, ExternalLink, Github, Terminal } from 'lucide-react';

const hasExternalLink = (url) => /^https?:\/\//.test(url || '');

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const hasLiveLink = hasExternalLink(project.liveUrl);
  const hasGithubLink = hasExternalLink(project.githubUrl);

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
        <div
          className="relative h-56 flex flex-col items-center justify-center border-b
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
            <span
              className="text-[10px] font-mono uppercase tracking-[0.4em]
              text-indigo-600/70 dark:text-purple-500/70"
            >
              Project.Manifest
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">{project.title}</h2>
          <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-gray-500">
            {project.role} | {project.timeline} | {project.status}
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-4 rounded-full bg-indigo-500 dark:bg-purple-500" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Problem</h3>
                </div>
                <p className="leading-relaxed text-slate-600 dark:text-gray-400">{project.problem}</p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-4 rounded-full bg-blue-500" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Solution</h3>
                </div>
                <p className="leading-relaxed text-slate-600 dark:text-gray-400">{project.solution}</p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-4 rounded-full bg-violet-500 dark:bg-purple-400" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Result</h3>
                </div>
                <p className="leading-relaxed text-slate-600 dark:text-gray-400">{project.result}</p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-4 rounded-full bg-indigo-500 dark:bg-purple-500" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Core Architecture</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10">
                    <Layout size={18} className="mb-2 text-indigo-600 dark:text-purple-500" />
                    <p className="text-[10px] font-mono uppercase text-slate-400 dark:text-gray-500 mb-1">Frontend</p>
                    <p className="text-sm text-slate-700 dark:text-gray-300">{project.stack.frontend}</p>
                  </div>

                  <div className="p-5 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10">
                    <Server size={18} className="mb-2 text-blue-600 dark:text-blue-500" />
                    <p className="text-[10px] font-mono uppercase text-slate-400 dark:text-gray-500 mb-1">Backend</p>
                    <p className="text-sm text-slate-700 dark:text-gray-300">{project.stack.backend}</p>
                  </div>

                  <div className="p-5 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10">
                    <Database size={18} className="mb-2 text-violet-600 dark:text-purple-400" />
                    <p className="text-[10px] font-mono uppercase text-slate-400 dark:text-gray-500 mb-1">Database</p>
                    <p className="text-sm text-slate-700 dark:text-gray-300">{project.stack.db}</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border bg-indigo-50/50 border-indigo-100 dark:bg-white/5 dark:border-white/10">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-900 dark:text-white">Module Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                disabled={!hasLiveLink}
                className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg text-white disabled:opacity-60 disabled:cursor-not-allowed
                  bg-gradient-to-r from-indigo-600 to-violet-600 shadow-indigo-500/20 dark:from-purple-600 dark:to-blue-600"
                onClick={() => {
                  if (!hasLiveLink) return;
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                {hasLiveLink ? 'Launch Live Demo' : 'Live Link Pending'} <ExternalLink size={18} />
              </button>

              <button
                disabled={!hasGithubLink}
                className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all border
                  bg-slate-100 border-slate-200 text-slate-700 disabled:opacity-60 disabled:cursor-not-allowed
                  dark:bg-white/5 dark:border-white/10 dark:text-white"
                onClick={() => {
                  if (!hasGithubLink) return;
                  window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                {hasGithubLink ? 'Open GitHub' : 'GitHub Link Pending'} <Github size={18} />
              </button>

              <div className="text-center text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-gray-600">
                Links are editable in project data
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
