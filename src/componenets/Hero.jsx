// import React from 'react';
// import { motion } from 'framer-motion';

// /*
//   🧠 COMPONENT: Hero Section
//   --------------------------------
//   - First screen of portfolio (most important)
//   - Uses Framer Motion for entry animation
//   - Animated gradient background
//   - Responsive layout (mobile + desktop)
// */

// const Hero = () => {
//   /*
//     🎨 BACKGROUND ANIMATION (Gradient Movement)
//     --------------------------------
//     - Moves gradient from top-left → bottom-right
//     - Runs infinitely
//   */
//   const gradientVariants = {
//     animate: {
//       backgroundPosition: ['0% 0%', '100% 100%'],
//       transition: {
//         duration: 8, // speed of animation
//         repeat: Infinity, // infinite loop
//         repeatType: 'reverse',
//         ease: 'linear',
//       },
//     },
//   };

//   return (
//     <motion.section
//       id="home" // 🔗 used for navbar scroll
//       variants={gradientVariants}
//       animate="animate"
//       className="
//         min-h-screen
//         bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900
//         text-white
//         flex items-center justify-center
//         px-6 overflow-hidden
//       "
//       style={{
//         backgroundSize: '200% 200%', // required for gradient movement
//       }}
//     >
//       {/* 📦 MAIN CONTAINER */}
//       <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* ================= LEFT SIDE ================= */}
//         {/* 📝 TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }} // start below
//           animate={{ opacity: 1, y: 0 }} // move up
//           transition={{ duration: 0.6 }}
//           className="text-center md:text-left"
//         >
//           {/* 👋 NAME */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="
//               text-4xl md:text-6xl font-bold mb-4
//               bg-gradient-to-r from-white to-purple-300
//               bg-clip-text text-transparent
//             "
//           >
//             Hi, I'm Amit 👋
//           </motion.h1>

//           {/* 💼 ROLE */}
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl md:text-2xl text-gray-300 mb-6"
//           >
//             Full Stack Developer
//           </motion.h2>

//           {/* 📄 DESCRIPTION */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-gray-300 mb-6 max-w-lg leading-relaxed"
//           >
//             I build modern, scalable and user-friendly web applications using
//             React, Node.js and more.
//           </motion.p>

//           {/* 🔘 BUTTON */}
//           <motion.a
//             href="#projects" // 🔗 scroll to projects section
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//             whileHover={{
//               scale: 1.1,
//               boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="
//               inline-block
//               bg-gradient-to-r from-purple-600 to-blue-600
//               px-8 py-3 rounded-lg font-semibold
//               shadow-lg cursor-pointer
//               transition-all
//             "
//           >
//             View Projects
//           </motion.a>
//         </motion.div>

//         {/* ================= RIGHT SIDE ================= */}
//         {/* 🖼️ PROFILE IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 100, scale: 0.9 }} // start right
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           whileHover={{ scale: 1.05 }}
//           className="relative"
//         >
//           {/* ✨ GLOW EFFECT */}
//           <div
//             className="
//             absolute -inset-1
//             bg-gradient-to-r from-purple-600 to-pink-600
//             rounded-full blur-xl opacity-75 animate-pulse
//           "
//           ></div>

//           <div
//             className="
//             absolute inset-0
//             rounded-full bg-purple-500
//             blur-xl opacity-50 animate-pulse
//           "
//           ></div>

//           {/* 🖼️ IMAGE */}
//           <img
//             src="https://miro.medium.com/0*XH3rLskyOsCqVV-j.jpg"
//             alt="profile"
//             className="
//               w-60 h-60 md:w-80 md:h-80
//               rounded-full object-cover
//               shadow-2xl relative z-10
//             "
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;

/////////////////////////////////////////////////
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaPalette,
  FaRocket,
} from 'react-icons/fa';
import hero from '../assets/hero_section.png';

/*
  🧠 COMPONENT: Hero Section - Premium Dark Green Edition
  --------------------------------
  - Complete redesign with Shopify premium aesthetic
  - New staggered animations, parallax effects
  - Dark green luxury color palette with gold accents
  - Enhanced framer motion interactions
*/

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.1]);

  // Social media links data
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/amiitdev',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/amit1924',
      label: 'LinkedIn',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/amit',
      label: 'Twitter',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:amit@example.com',
      label: 'Email',
    },
  ];

  // Floating particles animation variants
  const floatingParticles = Array.from({ length: 20 }).map((_, i) => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#030c0a] via-[#0a2f24] to-[#030c0a] mt-9 "
      id="home"
    >
      {/* Premium decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 to-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      {floatingParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE - Enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-center lg:text-left"
          >
            {/* Premium badge with slide animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-amber-500/30 mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative flex h-2 w-2"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </motion.span>
              <span className="hidden md:flex text-xs sm:text-sm text-amber-400 tracking-wider font-medium uppercase">
                Premium Developer
              </span>
            </motion.div>

            {/* Main heading with typewriter effect */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-amber-200 to-emerald-200 bg-clip-text text-transparent">
                Hi, I'm Amit
              </span>
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-block ml-2"
              >
                👋
              </motion.span>
            </motion.h1>

            {/* Role with animated underline */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative inline-block mb-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-emerald-200">
                Full Stack Developer
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 origin-left"
              />
            </motion.div>

            {/* Description with fade up animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              A passionate developer who loves turning ideas into functional web
              applications. I specialize in building modern, responsive websites
              using React, Node.js, and modern web technologies.
            </motion.p>

            {/* CTA Buttons with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-amber-500/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Projects
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-amber-500/50 rounded-xl font-semibold text-amber-400 hover:text-white hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links with staggered animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1,
                  },
                },
              }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/20 hover:shadow-lg hover:shadow-amber-500/20 text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: '1', label: 'Year Experience', icon: <FaCode /> },
                { value: '15+', label: 'Projects', icon: <FaPalette /> },
                { value: '24/7', label: 'Support', icon: <FaRocket /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-amber-400 mb-1 flex items-center justify-center gap-1">
                    {stat.icon}
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Enhanced image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative flex justify-center"
          >
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-amber-500/20"
              style={{ width: '100%', height: '100%' }}
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-emerald-500/20"
              style={{ width: '90%', height: '90%', top: '5%', left: '5%' }}
            />

            {/* Main image container with 3D hover effect */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-emerald-500/30 to-amber-500/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image border with animated gradient */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <img
                src={hero}
                alt="Amit - Full Stack Developer"
                className="
                  w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                  rounded-full object-cover
                  shadow-2xl relative z-10
                  border-4 border-amber-500/30
                  group-hover:border-amber-500/70
                  transition-all duration-500
                  group-hover:scale-105
                "
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, type: 'spring' }}
              className="absolute -top-8 -right-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl px-4 py-2 shadow-xl"
            >
              <div className="text-center">
                <div className="text-white font-bold text-lg">🔥</div>
                <div className="text-white/90 text-xs">Available</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, type: 'spring' }}
              className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl px-4 py-2 shadow-xl backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="text-white font-bold text-lg">⚡</div>
                <div className="text-white/90 text-xs">Fast Delivery</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-amber-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
