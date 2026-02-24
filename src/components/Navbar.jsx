import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      {/* MAIN NAVBAR CONTAINER */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
        flex items-center justify-between
        w-[90%] md:w-auto max-w-4xl
        bg-white/70 dark:bg-[#0a0a0f]/80 
        backdrop-blur-xl 
        border border-slate-200 dark:border-white/10 
        p-2 md:p-1.5 rounded-full shadow-lg dark:shadow-2xl 
        transition-all duration-500"
      >
        
        {/* --- DESKTOP VIEW (Hidden on Mobile) --- */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
            >
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full 
                    bg-indigo-50 border border-indigo-100 
                    dark:bg-white/5 dark:border-white/5 dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${
                activeSection === item.toLowerCase() 
                  ? 'text-indigo-600 dark:text-purple-400 font-semibold' 
                  : 'text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}>
                {item}
              </span>
            </button>
          ))}
          
          {/* Desktop Divider & Theme Toggle */}
          <div className="w-[1px] h-4 bg-slate-200 dark:bg-white/10 mx-2" />
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-colors duration-300
              hover:bg-slate-100 dark:hover:bg-white/5 
              text-slate-500 dark:text-gray-400 
              hover:text-indigo-600 dark:hover:text-purple-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>


        {/* --- MOBILE VIEW (Visible on Mobile) --- */}
        <div className="flex md:hidden items-center justify-between w-full px-2">
          {/* Mobile Logo / Brand */}
          <div className="flex items-center gap-2 text-indigo-600 dark:text-purple-500">
            <Terminal size={16} />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-900 dark:text-white">
              JANU.SYS
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Theme Toggle (Always Visible) */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full transition-colors duration-300
                bg-slate-100/50 dark:bg-white/5
                text-slate-600 dark:text-gray-300 
                border border-slate-200 dark:border-white/5"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full transition-colors duration-300
                bg-indigo-600 dark:bg-purple-600
                text-white shadow-lg shadow-indigo-500/30 dark:shadow-purple-500/30"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU DROPDOWN (Floating Glass Card) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop to close menu when clicking outside */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-[2px] md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm
                bg-white/90 dark:bg-[#1a1a20]/90 
                backdrop-blur-xl border border-slate-200 dark:border-white/10 
                rounded-2xl shadow-2xl overflow-hidden md:hidden"
            >
              <div className="p-2 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full p-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between
                      ${activeSection === item.toLowerCase() 
                        ? 'bg-indigo-50 dark:bg-white/5 text-indigo-600 dark:text-purple-400' 
                        : 'text-slate-500 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5'
                      }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-purple-500 shadow-[0_0_8px_currentColor]" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Footer inside Menu */}
              <div className="p-3 text-center border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
                <p className="text-[10px] font-mono text-slate-400 dark:text-gray-600 uppercase tracking-widest">
                  System Navigation // v2.0
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;