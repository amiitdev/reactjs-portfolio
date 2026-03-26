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
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

/*
  🧠 COMPONENT: Hero Section
  --------------------------------
  - First screen of portfolio (most important)
  - Uses Framer Motion for entry animation
  - Animated gradient background
  - Responsive layout (mobile + desktop)
  - Added social media links
*/

const Hero = () => {
  /*
    🎨 BACKGROUND ANIMATION (Gradient Movement)
    --------------------------------
    - Moves gradient from top-left → bottom-right
    - Runs infinitely
  */
  const gradientVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      },
    },
  };

  // Social media links data
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/amiitdev',
      label: 'GitHub',
      color: 'hover:bg-gray-700',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/amit1924',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/amit',
      label: 'Twitter',
      color: 'hover:bg-blue-500',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:amit@example.com',
      label: 'Email',
      color: 'hover:bg-red-500',
    },
  ];

  return (
    <motion.section
      id="home"
      variants={gradientVariants}
      animate="animate"
      className="
        min-h-screen
        bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900
        text-white
        flex items-center justify-center
        px-4 sm:px-6 lg:px-8
        overflow-hidden
      "
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {/* 📦 MAIN CONTAINER - Responsive padding */}
      <div
        className="
        max-w-6xl w-full 
        flex flex-col-reverse md:flex-row 
        items-center justify-between 
        gap-8 md:gap-12 lg:gap-16
        py-8 md:py-0
      "
      >
        {/* ================= LEFT SIDE ================= */}
        {/* 📝 TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left w-full md:w-1/2"
        >
          {/* 👋 NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold mb-3 md:mb-4
              bg-gradient-to-r from-white to-purple-300
              bg-clip-text text-transparent
            "
          >
            Hi, I'm Amit 👋
          </motion.h1>

          {/* 💼 ROLE */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              text-lg sm:text-xl md:text-2xl 
              text-gray-300 mb-4 md:mb-6
            "
          >
            Full Stack Developer
          </motion.h2>

          {/* 📄 DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              text-gray-300 mb-6 md:mb-8 
              max-w-lg mx-auto md:mx-0 
              leading-relaxed text-sm sm:text-base
            "
          >
            A passionate developer who loves turning ideas into functional web
            applications. I specialize in building modern, responsive websites
            using React, Node.js, and modern web technologies.
          </motion.p>

          {/* 🔘 BUTTON */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block
              bg-gradient-to-r from-purple-600 to-blue-600
              px-6 sm:px-8 py-2.5 sm:py-3 
              rounded-lg font-semibold
              shadow-lg cursor-pointer
              transition-all text-sm sm:text-base
              mb-6 md:mb-0
            "
          >
            View My Projects
          </motion.a>

          {/* 🌐 SOCIAL MEDIA LINKS - New Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-3 sm:gap-4 justify-center md:justify-start mt-6 md:mt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11
                  rounded-full 
                  bg-white/10 
                  ${social.color}
                  flex items-center justify-center 
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-purple-500/30
                  text-base sm:text-lg md:text-xl
                `}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* 📊 AVAILABILITY BADGE - Optional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-green-400">
              Open to opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        {/* 🖼️ PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="relative mb-8 md:mb-0 w-full md:w-1/2 flex justify-center"
        >
          {/* ✨ GLOW EFFECT */}
          <div
            className="
              absolute -inset-1 sm:-inset-2
              bg-gradient-to-r from-purple-600 to-pink-600
              rounded-full blur-xl opacity-75 animate-pulse
            "
          ></div>

          <div
            className="
              absolute inset-0
              rounded-full bg-purple-500
              blur-xl opacity-50 animate-pulse
            "
          ></div>

          {/* 🖼️ IMAGE - Responsive sizing */}
          <img
            src="https://miro.medium.com/0*XH3rLskyOsCqVV-j.jpg"
            alt="Amit - Full Stack Developer"
            className="
              w-40 h-40 sm:w-48 sm:h-48 
              md:w-64 md:h-64 
              lg:w-72 lg:h-72
              rounded-full object-cover
              shadow-2xl relative z-10
              border-2 sm:border-4 border-purple-500/30
              transition-all duration-300
              hover:border-purple-500/60
            "
          />

          {/* Decorative rings - visible on larger screens */}
          <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 border border-purple-500/30 rounded-full hidden sm:block"></div>
          <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-10 h-10 sm:w-12 sm:h-12 border border-pink-500/30 rounded-full hidden sm:block"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
