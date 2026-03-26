import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

/*
  🧠 NAVBAR COMPONENT - Premium Dark Green Edition
  --------------------------------
  - Fixed navbar with premium dark green theme
  - Active section highlight with gold accents
  - Smooth scrolling (mobile + desktop FIXED)
  - Responsive mobile menu with consistent styling
  - Matches Hero, About, Projects, Tech, Contact sections
*/

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /*
    🎯 HANDLE SCROLL (Navbar background)
  */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*
    🎯 ACTIVE SECTION DETECTION
  */
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ['home', 'about', 'projects', 'tech', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleActiveSection);
    handleActiveSection();

    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  /*
    🚀 PERFECT SCROLL FUNCTION (KEY FIX)
    --------------------------------
    1. Close mobile menu
    2. Wait for animation
    3. Scroll with offset
  */
  const handleNavClick = (section) => {
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        const offset = 100; // navbar height
        const top =
          element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    }, 300); // matches menu animation duration
  };

  const navItems = ['Home', 'About', 'Projects', 'Tech', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300${
        scrolled
          ? 'backdrop-blur-xl bg-gradient-to-r from-[#030c0a]/95 via-[#0a2f24]/90 to-[#030c0a]/95 shadow-2xl border-b border-amber-500/20'
          : 'backdrop-blur-lg bg-gradient-to-r from-[#030c0a]/80 via-[#0a2f24]/60 to-[#030c0a]/80 shadow-lg border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* 🔹 NAVBAR HEADER */}
        <div className="flex justify-between items-center">
          {/* 🧠 LOGO - Premium gold/green gradient */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
            className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent cursor-pointer"
          >
            Amit.dev
          </motion.h1>

          {/* 🖥️ DESKTOP MENU - Premium styling */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item, index) => {
              const section = item.toLowerCase();

              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    onClick={() => handleNavClick(section)}
                    className={`relative text-gray-300 hover:text-amber-400 transform hover:scale-110 transition duration-300 cursor-pointer font-medium ${
                      activeSection === section ? 'text-amber-400' : ''
                    }`}
                  >
                    {item}

                    {/* 🔥 UNDERLINE - Premium gold gradient */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300 ${
                        activeSection === section
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* 📱 MOBILE BUTTON - Premium styling */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl hover:text-amber-400 transition-colors"
          >
            {mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* 📱 MOBILE MENU - Premium dark green theme */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-r from-[#030c0a]/95 via-[#0a2f24]/90 to-[#030c0a]/95 backdrop-blur-lg rounded-lg mt-2 border border-amber-500/20"
        >
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navItems.map((item, index) => {
              const section = item.toLowerCase();

              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    x: mobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(section)}
                    className={`block text-gray-300 hover:text-amber-400 hover:bg-amber-500/20 px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeSection === section
                        ? 'text-amber-400 bg-amber-500/20 border-l-2 border-amber-500'
                        : ''
                    }`}
                  >
                    {item}
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
