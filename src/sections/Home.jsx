import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

const Home = () => {
  const roles = [siteConfig.role, 'Full-Stack Developer'];
  const [index, setIndex] = useState(0);

  const roleCount = roles.length;
  const hasResume = Boolean(siteConfig.resumeUrl && siteConfig.resumeUrl.trim());

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roleCount);
    }, 2500);

    return () => clearInterval(timer);
  }, [roleCount]);

  const handleResumeClick = () => {
    if (!hasResume) return;
    window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[85vh] px-6 py-8 lg:py-0 relative z-10 flex items-center"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col-reverse lg:flex-row-reverse items-center gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-5/12 flex justify-center lg:justify-end"
        >
          <img
            src="/photo1.svg"
            alt="Portrait of Janu"
            className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] aspect-[4/5] rounded-2xl object-cover border-4 border-white/80 shadow-2xl
              dark:border-slate-900/70"
          />
        </motion.div>

        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <div className="mb-4 md:mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] mx-auto lg:mx-0
            bg-teal-50 text-teal-700 border border-teal-200/70
            dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20"
          >
            Final-year CSE student
          </div>

          <h1 className="text-[28px] sm:text-[36px] md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-4 text-slate-900 dark:text-white">
            Hi, I&apos;m{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
              from-teal-600 to-emerald-600
              dark:from-sky-400 dark:to-blue-500"
            >
              {siteConfig.fullName}.
            </span>
          </h1>

          <div className="text-[15px] sm:text-lg md:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-gray-400 mb-5 md:mb-6 flex flex-col md:flex-row items-center lg:items-baseline justify-center lg:justify-start gap-2">
            <span>I am a</span>
            <div className="h-[28px] sm:h-[32px] md:h-[36px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r
                    from-teal-600 to-emerald-600
                    dark:from-sky-400 dark:to-blue-500"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-[13px] sm:text-[15px] md:text-lg text-slate-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed mx-auto lg:mx-0"
          >
            I build modern web applications with focus on clean UI, reliable backend logic, and smooth user experience.
            My core strengths are in
            <span className="text-slate-900 dark:text-white font-semibold"> React, Node.js, PostgreSQL, and MongoDB</span>.
          </motion.p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
            <button
              type="button"
              onClick={handleResumeClick}
              disabled={!hasResume}
              title={hasResume ? 'Open CV' : 'Add resumeUrl in src/data/siteConfig.js'}
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                text-teal-700 border-2 border-teal-500/70 bg-transparent hover:bg-teal-500/10
                dark:text-sky-300 dark:border-sky-400/60 dark:hover:bg-sky-400/10"
            >
              {hasResume ? 'Download CV' : 'CV Link Pending'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;