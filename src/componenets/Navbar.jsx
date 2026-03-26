// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoClose } from 'react-icons/io5';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   // Handle scroll effect for navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       //   // If scroll position > 50px, set scrolled to true, else false
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Handle active section highlighting
//   useEffect(() => {
//     const handleActiveSection = () => {
//       const sections = ['home', 'about', 'projects', 'tech', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleActiveSection);
//     handleActiveSection(); // Call once to set initial active section

//     return () => window.removeEventListener('scroll', handleActiveSection);
//   }, []);

//   const navItems = ['Home', 'About', 'Projects', 'Tech', 'Contact'];

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
//         scrolled
//           ? 'backdrop-blur-xl bg-gradient-to-r from-black/90 via-purple-900/70 to-black/90 shadow-2xl'
//           : 'backdrop-blur-lg bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 shadow-lg'
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.h1
//             whileHover={{ scale: 1.05 }}
//             className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
//           >
//             Amit.dev
//           </motion.h1>

//           {/* Desktop Links */}
//           <ul className="hidden md:flex gap-8">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className={`relative text-gray-300 hover:text-white transition-colors duration-300 group ${
//                     activeSection === item.toLowerCase() ? 'text-white' : ''
//                   }`}
//                 >
//                   {item}
//                   {/* Animated underline */}
//                   <span
//                     className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
//                       activeSection === item.toLowerCase()
//                         ? 'w-full'
//                         : 'w-0 group-hover:w-full'
//                     }`}
//                   ></span>
//                 </a>
//               </motion.li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden text-white focus:outline-none text-2xl"
//           >
//             {mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{
//             opacity: mobileMenuOpen ? 1 : 0,
//             height: mobileMenuOpen ? 'auto' : 0,
//           }}
//           transition={{ duration: 0.3, ease: 'easeInOut' }}
//           className="md:hidden overflow-hidden bg-gradient-to-r from-black/95 via-purple-900/90 to-black/95 backdrop-blur-lg rounded-lg mt-2"
//         >
//           <ul className="flex flex-col items-center py-6 space-y-4">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{
//                   opacity: mobileMenuOpen ? 1 : 0,
//                   x: mobileMenuOpen ? 0 : -20,
//                 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//               >
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`block text-gray-300 hover:text-white hover:bg-purple-500/20 px-6 py-2 rounded-lg transition-all duration-300 ${
//                     activeSection === item.toLowerCase()
//                       ? 'text-white bg-purple-500/20'
//                       : ''
//                   }`}
//                 >
//                   {item}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

//////////////////////////////////////
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

/*
  🧠 NAVBAR COMPONENT
  --------------------------------
  - Fixed navbar
  - Active section highlight
  - Smooth scrolling (mobile + desktop FIXED)
  - Responsive mobile menu
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-gradient-to-r from-black/90 via-purple-900/70 to-black/90 shadow-2xl'
          : 'backdrop-blur-lg bg-gradient-to-r from-black/60 via-purple-900/30 to-black/60 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* 🔹 NAVBAR HEADER */}
        <div className="flex justify-between items-center">
          {/* 🧠 LOGO */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
          >
            Amit.dev
          </motion.h1>

          {/* 🖥️ DESKTOP MENU */}
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
                    className={`relative text-gray-300 hover:text-red-600 transform hover:scale-110 transition duration-300 cursor-pointer ${
                      activeSection === section ? 'text-yellow-500' : ''
                    }`}
                  >
                    {item}

                    {/* 🔥 UNDERLINE */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                        activeSection === section
                          ? 'w-full'
                          : 'w-0 group-hover:w-full '
                      }`}
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* 📱 MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-r from-black/95 via-purple-900/90 to-black/95 backdrop-blur-lg rounded-lg mt-2"
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
                    className={`block text-gray-300 hover:text-white hover:bg-pink-500/20 hover:underline px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeSection === section
                        ? 'text-yellow-500 bg-purple-500/20'
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
