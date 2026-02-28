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
      className="max-w-4xl mx-auto py-28 px-6 text-center relative z-10"
    >
      <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-slate-900 dark:text-white">
        Let&apos;s{' '}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-b
          from-indigo-600 to-violet-600
          dark:from-purple-400 dark:to-purple-600"
        >
          Connect.
        </span>
      </h3>

      <p className="max-w-2xl mx-auto mb-10 text-slate-600 dark:text-gray-400">
        Open to collaborating on web applications, backend systems, and product-focused full-stack development.
      </p>

      <div className="flex items-center justify-center gap-8">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${social.label} profile in a new tab`}
            className="flex items-center gap-2 transition-colors group
              text-slate-500 hover:text-indigo-600 dark:text-gray-500 dark:hover:text-white"
          >
            <span className="group-hover:text-indigo-600 dark:group-hover:text-purple-500 transition-colors">{social.icon}</span>
            <span className="text-[10px] font-mono uppercase tracking-widest">{social.label}</span>
          </a>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono
          bg-slate-100 border border-slate-200 text-slate-500
          dark:bg-white/5 dark:border-white/5 dark:text-gray-600"
        >
          <Terminal size={12} />
          <span className="uppercase tracking-[0.2em]">Contact endpoints active</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
