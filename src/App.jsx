import React, { useState, useEffect } from 'react';
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

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  // 1. Safety Fallback for Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // 2. Theme Persistence & HTML Class Toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 3. NEW: Scroll to Top when switching sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'dark bg-[#0a0a0f]' : 'bg-[#F8FAFC]'}`}>
      
      {/* Pass darkMode to cursor so it can invert colors if needed */}
      <CustomCursor darkMode={darkMode} />
      
      {/* Fixed Background Layer (Behind everything) */}
      <Background darkMode={darkMode} />

      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-slate-900 dark:text-white font-sans selection:bg-indigo-500/30 dark:selection:bg-purple-500/30"
          >
            
            <Navbar 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
            />

            <main className="pt-24 pb-20 md:pt-32 min-h-screen flex flex-col justify-center">
              <div className="container mx-auto">
                <AnimatePresence mode="wait">
                  {/* We wrap components in motion.divs inside the sections themselves, 
                      but adding a key here ensures React treats them as new instances */}
                  {activeSection === 'home' && <Home key="home" />}
                  {activeSection === 'about' && <About key="about" />}
                  {activeSection === 'skills' && <Skills key="skills" />}
                  {activeSection === 'projects' && <Projects key="projects" />}
                  {activeSection === 'experience' && <Experience key="experience" />}
                  {activeSection === 'contact' && <Contact key="contact" />}
                </AnimatePresence>
              </div>
            </main>

            <footer className="py-8 text-center border-t border-slate-200 dark:border-white/5 mx-6 md:mx-20 transition-colors duration-500">
              <p className="text-[10px] md:text-xs font-mono text-slate-400 dark:text-gray-500 tracking-widest uppercase">
                System.Version(2.0) • Developed by Janu • 2026
              </p>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;