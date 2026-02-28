import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Terminal } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Contact = () => {
  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', link: siteConfig.socialLinks.github },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', link: siteConfig.socialLinks.linkedin },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-32 px-6 text-center relative z-10"
    >
      {/* Subtle Identifier */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div
          className="w-12 h-[1px]
          bg-gradient-to-r from-transparent to-indigo-500/50
          dark:to-purple-500/50"
        />
        <span
          className="text-[10px] font-mono uppercase tracking-[0.5em]
          text-indigo-500/80 dark:text-purple-500/80"
        >
          Connection.Finalize
        </span>
        <div
          className="w-12 h-[1px]
          bg-gradient-to-l from-transparent to-indigo-500/50
          dark:to-purple-500/50"
        />
      </div>

      {/* Hero Text: Massive but Light */}
      <h3
        className="text-5xl md:text-8xl font-bold tracking-tighter mb-12
        text-slate-900 dark:text-white"
      >
        Let&apos;s{' '}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-b
          from-indigo-600 to-violet-600
          dark:from-purple-400 dark:to-purple-600"
        >
          Sync.
        </span>
      </h3>

      {/* Minimalist Social Row */}
      <div className="flex items-center justify-center gap-8">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${social.label} profile in a new tab`}
            className="flex items-center gap-2 transition-colors group
              text-slate-500 hover:text-indigo-600
              dark:text-gray-500 dark:hover:text-white"
          >
            <span className="group-hover:text-indigo-600 dark:group-hover:text-purple-500 transition-colors">
              {social.icon}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest">{social.label}</span>
          </a>
        ))}
      </div>

      {/* Footer System Status */}
      <div
        className="mt-24 pt-8 flex flex-col items-center gap-4 border-t
        border-slate-200 dark:border-white/5"
      >
        <div
          className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest
          text-slate-500 dark:text-gray-600"
        >
          <Terminal size={12} />
          <span>Session: Logged as Software_Engineer</span>
        </div>
        <p className="text-[10px] text-slate-400 dark:text-gray-700">(c) 2026 // Designed for Performance</p>
      </div>
    </motion.section>
  );
};

export default Contact;
