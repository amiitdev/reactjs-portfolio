// import React from 'react';
// import { BiLogoPostgresql } from 'react-icons/bi';
// import { FaDocker, FaJenkins, FaPython } from 'react-icons/fa';
// import { ImHtmlFive } from 'react-icons/im';
// import { RiNodejsLine } from 'react-icons/ri';
// import {
//   SiKubernetes,
//   SiMongodb,
//   SiNginx,
//   SiTailwindcss,
// } from 'react-icons/si';
// import { TbBrandReact } from 'react-icons/tb';
// import { VscAzureDevops } from 'react-icons/vsc';
// import { motion } from 'framer-motion';

// /*
//   🧠 COMPONENT: Tech Stack Section
//   --------------------------------
//   - Displays your technologies
//   - Uses animated particles background
//   - Uses Framer Motion for scroll + hover animation
// */

// const Tech = () => {
//   /*
//     📦 TECH DATA
//     --------------------------------
//     - Each object = one card
//     - Keeps UI dynamic (no repetition)
//   */
//   const icons = [
//     { name: 'React', icon: <TbBrandReact /> },
//     { name: 'Azure Devops', icon: <VscAzureDevops /> },
//     { name: 'Node.js', icon: <RiNodejsLine /> },
//     { name: 'Python', icon: <FaPython /> },
//     { name: 'HTML5', icon: <ImHtmlFive /> },
//     { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
//     { name: 'MongoDB', icon: <SiMongodb /> },
//     { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
//     { name: 'Docker', icon: <FaDocker /> },
//     { name: 'Kubernetes', icon: <SiKubernetes /> },
//     { name: 'Nginx', icon: <SiNginx /> },
//     { name: 'Jenkins', icon: <FaJenkins /> },
//   ];

//   return (
//     <section
//       id="tech"
//       className="
//         min-h-screen                     /* full screen height */
//         bg-gradient-to-br               /* diagonal gradient */
//         from-gray-900 via-purple-900 to-gray-900
//         text-white                      /* default text color */
//         px-6 py-20 pt-24                /* spacing */
//         relative overflow-hidden        /* needed for background effects */
//       "
//     >
//       {/* 🎬 FLOATING PARTICLES BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             /*
//               ⚠️ FIX:
//               - window may break in SSR
//               - fallback added
//             */
//             initial={{
//               x:
//                 Math.random() *
//                 (typeof window !== 'undefined' ? window.innerWidth : 1000),
//               y:
//                 Math.random() *
//                 (typeof window !== 'undefined' ? window.innerHeight : 800),
//               scale: Math.random() * 0.5 + 0.3,
//             }}
//             /*
//               🎬 FLOATING ANIMATION
//               - moves randomly in small area
//             */
//             animate={{
//               y: [null, -20, 20, -20],
//               x: [null, 10, -10, 10],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 3,
//               repeat: Infinity /* infinite floating */,
//               repeatType: 'reverse' /* smooth back-forth */,
//             }}
//             className="
//               absolute
//               w-1 h-1                    /* tiny dot */
//               bg-purple-500
//               rounded-full              /* circle */
//               opacity-20
//             "
//           />
//         ))}
//       </div>

//       {/* 🎨 GLOW BACKGROUND (visual only) */}
//       <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

//       {/* 📦 MAIN CONTAINER */}
//       <div className="max-w-6xl mx-auto">
//         {/* 🧾 TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: -100 }} /* start above */
//           whileInView={{ opacity: 1, y: 0 }} /* move into place */
//           transition={{ ease: 'easeOut', duration: 1.5 }}
//           viewport={{ once: true }} /* animate only once */
//           className="
//             text-4xl md:text-6xl font-bold mb-12 text-center
//             bg-gradient-to-r from-purple-400 to-pink-400
//             bg-clip-text text-transparent       /* gradient text effect */
//           "
//         >
//           Tech Stacks
//         </motion.h2>

//         {/* 📊 GRID LAYOUT */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {icons.map((i, id) => (
//             <motion.div
//               key={id}
//               /*
//                 🎬 SCROLL ANIMATION (card appears)
//               */
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               /*
//                 ✨ HOVER EFFECT
//                 - scale + lift
//               */
//               whileHover={{ scale: 1.1, y: -5 }}
//               className="
//                 relative
//                 flex flex-col justify-center items-center
//                 bg-gradient-to-br from-gray-800/70 to-gray-900/70
//                 backdrop-blur-md              /* glass effect */
//                 p-6
//                 group
//                 rounded-xl
//                 border border-purple-500/20
//                 hover:border-purple-500/60
//                 transition-all duration-300
//                 shadow-lg hover:shadow-purple-500/30
//                 cursor-pointer
//                 transform-gpu                 /* better performance */
//               "
//               /*
//                 🎯 3D effect support
//               */
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {/* 🌈 ANIMATED BORDER (on hover) */}
//               <div
//                 className="
//                 absolute inset-0
//                 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
//                 opacity-0 group-hover:opacity-100
//                 transition-opacity duration-500
//                 rounded-xl
//               "
//               ></div>

//               {/* 📦 INNER LAYER (card background) */}
//               <div
//                 className="
//                 absolute inset-[1px]
//                 bg-gradient-to-br from-gray-800/70 to-gray-900/70
//                 rounded-xl
//               "
//               ></div>

//               {/* 🧩 CONTENT */}
//               <div className="relative z-10">
//                 {/* 🔷 ICON */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   /*
//                     🔥 STAGGER EFFECT
//                   */
//                   transition={{
//                     delay: id * 0.1,
//                     duration: 2,
//                     repeat: Infinity,
//                     repeatType: 'reverse',
//                   }}
//                   /*
//                     ⚠️ FIX:
//                     - Correct array syntax
//                   */
//                   animate={{ y: [0, -5, 0] }}
//                   className="
//                     text-4xl mb-3
//                     text-purple-400
//                     group-hover:text-pink-400
//                     transition p-3
//                   "
//                 >
//                   {i.icon}
//                 </motion.div>

//                 {/* 🏷️ NAME */}
//                 <p
//                   className="
//                   text-sm font-medium
//                   text-gray-300
//                   group-hover:text-white
//                   transition
//                 "
//                 >
//                   {i.name}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tech;
//////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaDocker, FaPython, FaGitAlt } from 'react-icons/fa';
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import { RiNodejsLine, RiJavascriptFill } from 'react-icons/ri';
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
} from 'react-icons/si';
import { TbBrandReact } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';

/*
  🧠 COMPONENT: Tech Stack Section (Fresher Version)
  --------------------------------
  - Realistic skill levels for a fresher/junior developer
  - Shows learning progress and enthusiasm
  - Focus on fundamentals and modern tech
*/

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  /*
    📦 TECH DATA - Fresher Friendly
    --------------------------------
    - Realistic skill levels (60-85% range)
    - Shows ongoing learning journey
    - Focus on technologies freshers actually know
  */
  const technologies = [
    // Frontend Technologies (Core strengths)
    {
      name: 'React',
      icon: <TbBrandReact />,
      category: 'frontend',
      level: 75,
      color: '#61DAFB',
      experience: '1+ years',
      description: 'Building components, hooks, state management',
    },
    {
      name: 'JavaScript',
      icon: <RiJavascriptFill />,
      category: 'frontend',
      level: 80,
      color: '#F7DF1E',
      experience: '2 years',
      description: 'ES6+, async/await, DOM manipulation',
    },
    {
      name: 'HTML5',
      icon: <ImHtmlFive />,
      category: 'frontend',
      level: 85,
      color: '#E34F26',
      experience: '2 years',
      description: 'Semantic HTML, accessibility',
    },
    {
      name: 'CSS3',
      icon: <ImCss3 />,
      category: 'frontend',
      level: 80,
      color: '#1572B6',
      experience: '2 years',
      description: 'Flexbox, Grid, animations',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      category: 'frontend',
      level: 75,
      color: '#06B6D4',
      experience: '1 year',
      description: 'Utility-first CSS, responsive design',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      category: 'frontend',
      level: 65,
      color: '#000000',
      experience: '6 months',
      description: 'SSR, routing, API routes',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      category: 'frontend',
      level: 60,
      color: '#3178C6',
      experience: '6 months',
      description: 'Interfaces, types, type safety',
    },
    {
      name: 'Redux',
      icon: <SiRedux />,
      category: 'frontend',
      level: 65,
      color: '#764ABC',
      experience: '8 months',
      description: 'State management, Redux Toolkit',
    },

    // Backend Technologies (Learning & Growing)
    {
      name: 'Node.js',
      icon: <RiNodejsLine />,
      category: 'backend',
      level: 70,
      color: '#339933',
      experience: '1 year',
      description: 'Express.js, REST APIs, middleware',
    },
    {
      name: 'Python',
      icon: <FaPython />,
      category: 'backend',
      level: 65,
      color: '#3776AB',
      experience: '1 year',
      description: 'Flask, scripting, automation',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      category: 'database',
      level: 70,
      color: '#47A248',
      experience: '1 year',
      description: 'CRUD operations, aggregation',
    },
    {
      name: 'PostgreSQL',
      icon: <BiLogoPostgresql />,
      category: 'database',
      level: 65,
      color: '#4169E1',
      experience: '8 months',
      description: 'SQL queries, relationships',
    },

    // DevOps (Exploring & Learning)
    {
      name: 'Docker',
      icon: <FaDocker />,
      category: 'devops',
      level: 55,
      color: '#2496ED',
      experience: '4 months',
      description: 'Containers, Dockerfiles, basics',
    },
    {
      name: 'Git',
      icon: <FaGitAlt />,
      category: 'devops',
      level: 80,
      color: '#F05032',
      experience: '1.5 years',
      description: 'Version control, branching, collaboration',
    },
  ];

  // Category filter options
  const categories = [
    {
      id: 'all',
      label: 'All Technologies',
      icon: '🎯',
      count: technologies.length,
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: '🎨',
      count: technologies.filter((t) => t.category === 'frontend').length,
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: '⚙️',
      count: technologies.filter((t) => t.category === 'backend').length,
    },
    {
      id: 'database',
      label: 'Database',
      icon: '🗄️',
      count: technologies.filter((t) => t.category === 'database').length,
    },
    {
      id: 'devops',
      label: 'DevOps',
      icon: '☁️',
      count: technologies.filter((t) => t.category === 'devops').length,
    },
  ];

  // Filter technologies based on selected category
  const filteredTech =
    selectedCategory === 'all'
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  // Get level color based on proficiency (adjusted for freshers)
  const getLevelColor = (level) => {
    if (level >= 75) return 'from-green-500 to-emerald-500'; // Confident
    if (level >= 65) return 'from-blue-500 to-cyan-500'; // Building
    if (level >= 55) return 'from-yellow-500 to-orange-500'; // Learning
    return 'from-gray-500 to-gray-600'; // Exploring
  };

  // Get level text (fresher-friendly terms)
  const getLevelText = (level) => {
    if (level >= 75) return 'Confident';
    if (level >= 65) return 'Building';
    if (level >= 55) return 'Learning';
    return 'Exploring';
  };

  // Get experience badge color
  const getExperienceColor = (experience) => {
    if (experience.includes('+') || parseInt(experience) >= 2)
      return 'text-green-400';
    if (parseInt(experience) >= 1) return 'text-blue-400';
    return 'text-yellow-400';
  };

  return (
    <section
      id="tech"
      className="
        min-h-screen
        bg-gradient-to-br
        from-gray-900 via-purple-900 to-gray-900
        text-white
        px-4 md:px-8 lg:px-16 xl:px-24
        py-20 pt-24 md:pt-28
        relative overflow-hidden
      "
    >
      {/* 🎬 FLOATING PARTICLES BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x:
                Math.random() *
                (typeof window !== 'undefined' ? window.innerWidth : 2000),
              y:
                Math.random() *
                (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, -20, 20, -20],
              x: [null, 15, -15, 15],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
          />
        ))}
      </div>

      {/* 🎨 GLOW BACKGROUND EFFECTS */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* TITLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="
            text-4xl md:text-5xl lg:text-6xl font-bold mb-4
            bg-gradient-to-r from-purple-400 to-pink-400
            bg-clip-text text-transparent
          "
          >
            Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I'm currently working with and building expertise in
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium
                transition-all duration-300 flex items-center gap-2
                ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                }
              `}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.label}</span>
              <span className="text-xs opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* GRID LAYOUT */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="
                  relative
                  bg-gradient-to-br from-gray-800/70 to-gray-900/70
                  backdrop-blur-md
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  group
                "
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card content */}
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 m-[1px] rounded-xl p-5">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: hoveredTech === tech.name ? [0, -3, 0] : 0,
                      scale: hoveredTech === tech.name ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl md:text-5xl mb-3 flex justify-center"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Tech name */}
                  <h3 className="text-sm md:text-base font-semibold text-center mb-2 text-gray-200 group-hover:text-white transition">
                    {tech.name}
                  </h3>

                  {/* Experience badge */}
                  <div className="text-center mb-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full bg-purple-500/20 ${getExperienceColor(tech.experience)}`}
                    >
                      {tech.experience}
                    </span>
                  </div>

                  {/* Skill level bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Proficiency</span>
                      <span className="text-purple-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className={`h-full bg-gradient-to-r ${getLevelColor(tech.level)} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Level indicator */}
                  <div className="mt-2 text-center">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        tech.level >= 75
                          ? 'bg-green-500/20 text-green-300'
                          : tech.level >= 65
                            ? 'bg-blue-500/20 text-blue-300'
                            : tech.level >= 55
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : 'bg-gray-500/20 text-gray-300'
                      }`}
                    >
                      {getLevelText(tech.level)}
                    </span>
                  </div>

                  {/* Tooltip with description on hover */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-max max-w-[200px]">
                    <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg border border-purple-500/30 text-center">
                      {tech.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* STATISTICS SECTION - Fresher Friendly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-purple-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {technologies.length}+
              </div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                70%
              </div>
              <div className="text-sm text-gray-400">Avg. Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🚀
              </div>
              <div className="text-sm text-gray-400">Always Learning</div>
            </div>
          </div>
        </motion.div>

        {/* LEARNING JOURNEY NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          🌱 Currently learning: Advanced React patterns, GraphQL, and Cloud
          Architecture • Building projects to strengthen my skills daily
        </motion.p>
      </div>
    </section>
  );
};

export default Tech;
