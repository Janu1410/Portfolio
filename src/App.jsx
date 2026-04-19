import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';

// Section Imports
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return true;

  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme === 'light') return false;
  if (savedTheme === 'dark') return true;

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const userPrefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const [loading, setLoading] = useState(() => !userPrefersReducedMotion());
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const reduceMotion = useMemo(() => userPrefersReducedMotion(), []);
  const sectionIds = useMemo(
    () => ['home', 'about', 'skills', 'projects', 'experience', 'contact'],
    [],
  );

  // Safety fallback in case preloader animation does not complete.
  useEffect(() => {
    if (!loading) return undefined;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (loading) return undefined;
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const nextActive = visibleEntries[0].target.id;
        setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [loading, sectionIds]);

  useEffect(() => {
    if (loading) return;
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }, [loading, reduceMotion]);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'dark bg-[#0B0F14]' : 'bg-[#F6F2EC]'}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-slate-900"
      >
        Skip to main content
      </a>

      <CustomCursor />

      {/* Fixed Background Layer (Behind everything) */}
      <Background darkMode={darkMode} reduceMotion={reduceMotion} />

      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" onComplete={() => setLoading(false)} reduceMotion={reduceMotion} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-slate-900 dark:text-white selection:bg-teal-500/30 dark:selection:bg-sky-500/30"
          >
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            <main id="main-content" tabIndex={-1} className="pt-24 pb-20 md:pt-32 min-h-screen">
              <div className="container mx-auto">
                <section id="home" className="scroll-mt-28 md:scroll-mt-32">
                  <Home />
                </section>
                <section id="about" className="scroll-mt-28 md:scroll-mt-32">
                  <About />
                </section>
                <section id="skills" className="scroll-mt-28 md:scroll-mt-32">
                  <Skills />
                </section>
                <section id="projects" className="scroll-mt-28 md:scroll-mt-32">
                  <Projects />
                </section>
                <section id="experience" className="scroll-mt-28 md:scroll-mt-32">
                  <Experience />
                </section>
                <section id="contact" className="scroll-mt-28 md:scroll-mt-32">
                  <Contact />
                </section>
              </div>
            </main>

            <footer className="py-8 text-center border-t border-slate-200 dark:border-white/5 mx-6 md:mx-20 transition-colors duration-500">
              <p className="text-[10px] md:text-xs font-mono text-slate-400 dark:text-gray-500 tracking-widest uppercase">
                Developed by Janu | 2026
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
