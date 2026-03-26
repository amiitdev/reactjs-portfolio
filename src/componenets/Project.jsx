// import React from 'react';
// import { motion } from 'framer-motion';

// /*
//   🧠 COMPONENT: Projects Section
//   --------------------------------
//   - Displays project cards
//   - Uses Framer Motion for animation
//   - Uses Tailwind for styling
//   - Fully responsive + interactive
// */

// const Project = () => {
//   /*
//     📦 DATA: Projects Array
//     --------------------------------
//     - Each object = one project
//     - This makes UI dynamic (no copy-paste)
//   */
//   const projects = [
//     {
//       title: 'Portfolio Website',
//       desc: 'Personal portfolio built with React and Tailwind',
//       img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=60',
//       tags: ['React', 'Tailwind', 'Framer Motion'],
//       live: '#', // replace with real link
//       code: '#', // replace with GitHub
//     },
//     {
//       title: 'E-commerce App',
//       desc: 'Full stack app with cart and payment',
//       img: 'https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=400&auto=format&fit=crop&q=60',
//       tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//       live: '#',
//       code: '#',
//     },
//     {
//       title: 'Chat App',
//       desc: 'Real-time chat using WebSocket',
//       img: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&auto=format&fit=crop&q=60',
//       tags: ['React', 'Socket.io', 'Express'],
//       live: '#',
//       code: '#',
//     },
//   ];

//   return (
//     <section
//       id="projects" // 🔗 Used for navbar scroll linking
//       className="
//         min-h-screen                     /* full screen height */
//         bg-gradient-to-br               /* background gradient */
//         from-gray-900 via-purple-900 to-gray-900
//         text-white
//         px-6 py-20 pt-24                /* spacing */
//         relative                        /* required for absolute elements */
//       "
//     >
//       {/* 🎨 BACKGROUND GLOW EFFECTS (visual only) */}
//       <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

//       <div className="max-w-6xl mx-auto">
//         {/* 🧾 SECTION TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }} // start above
//           whileInView={{ opacity: 1, y: 0 }} // animate into place
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="
//             text-4xl md:text-6xl font-bold mb-12 text-center
//             bg-gradient-to-r from-purple-400 to-pink-400
//             bg-clip-text text-transparent
//           "
//         >
//           My Projects
//         </motion.h2>

//         {/* 📊 GRID LAYOUT */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* 🔁 LOOP THROUGH PROJECTS */}
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               /*
//                 🎬 ENTRY ANIMATION (scroll based)
//               */
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               /*
//                 🔥 STAGGER EFFECT
//                 index * 0.2 → delay increases per card
//               */
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               /*
//                 ✨ HOVER ANIMATION
//               */
//               whileHover={{ scale: 1.05, y: -10 }}
//               className="
//                 group relative                       /* group = enable group-hover */
//                 bg-gradient-to-br from-gray-800/80 to-gray-900/80
//                 backdrop-blur-md
//                 rounded-xl overflow-hidden
//                 shadow-lg
//                 hover:shadow-2xl hover:shadow-purple-500/40
//                 transition-all duration-300
//               "
//             >
//               {/* 🖼️ IMAGE SECTION */}
//               <div className="overflow-hidden h-48 relative">
//                 <img
//                   src={project.img}
//                   alt={project.title}
//                   loading="lazy" /* improves performance */
//                   className="
//                     w-full h-full object-cover
//                     transition-all duration-500
//                     group-hover:scale-110 group-hover:rotate-1
//                   "
//                 />

//                 {/* 🌑 GRADIENT OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
//               </div>

//               {/* 📝 CONTENT SECTION */}
//               <div className="p-5">
//                 {/* 📌 TITLE */}
//                 <h3
//                   className="
//                   text-xl font-semibold mb-2
//                   bg-gradient-to-r from-purple-400 to-pink-400
//                   bg-clip-text text-transparent
//                 "
//                 >
//                   {project.title}
//                 </h3>

//                 {/* 📄 DESCRIPTION */}
//                 <p className="text-gray-400 text-sm mb-3">{project.desc}</p>

//                 {/* 🏷️ TAGS */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="
//                         text-xs px-2 py-1
//                         bg-purple-500/20
//                         rounded-full text-purple-300
//                       "
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* 🔘 BUTTONS */}
//                 <div className="flex gap-3">
//                   {/* 🌐 LIVE LINK */}
//                   {project.live && (
//                     <motion.a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="
//                         relative px-4 py-2 rounded-lg
//                         bg-gradient-to-r from-purple-600 to-blue-600
//                         text-white text-sm font-medium
//                       "
//                     >
//                       Live
//                     </motion.a>
//                   )}

//                   {/* 💻 CODE LINK */}
//                   {project.code && (
//                     <motion.a
//                       href={project.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="
//                         text-sm border px-4 py-2 rounded
//                         hover:bg-purple-500 transition
//                       "
//                     >
//                       Code
//                     </motion.a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 🔽 EXTRA BUTTON */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="
//               px-8 py-3
//               bg-gradient-to-r from-purple-600 to-pink-600
//               rounded-full font-semibold
//               shadow-lg hover:shadow-purple-500/50
//               transition-all
//             "
//           >
//             View All Projects →
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;
//////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

/*
  🧠 COMPONENT: Projects Section - Premium Dark Green Edition
  --------------------------------
  - Matches Hero & About's Shopify-style dark green theme
  - Consistent animations and design language
  - Shows genuine projects with honest achievements
  - Fully responsive with premium aesthetics
  - Enhanced modal with close button and better mobile responsiveness
*/

const Project = () => {
  /*
    📦 DATA: Projects Array
    --------------------------------
    - All original projects preserved exactly
    - Each object = one project
    - Includes tech stack, links, and images
  */
  const projects = [
    {
      title: 'Personal Portfolio Website',
      desc: 'Responsive developer portfolio showcasing full-stack and DevOps projects with clean UI and structured project presentation',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
      tags: ['HTML', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
      features: [
        'Responsive Layout',
        'Project Showcase Sections',
        'Resume Download',
        'Clean UI with Tailwind',
        'GitHub Pages Deployment',
      ],
      live: 'https://amiitdev.github.io/portfolio/',
      code: 'https://github.com/amiitdev/portfolio',
      category: 'frontend',
    },
    {
      title: 'Shopify DevOps - Docker + Kubernetes',
      desc: 'Production-grade e-commerce app deployed with Docker and Kubernetes featuring reverse proxy, CI/CD pipeline, health monitoring, and scalable architecture',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80',
      tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Docker',
        'Kubernetes',
        'Nginx',
        'CI/CD',
      ],
      features: [
        'Docker Containerization',
        'Kubernetes Deployment & Scaling',
        'Nginx Reverse Proxy Architecture',
        'CI/CD with GitHub Actions',
        'Health Checks (Liveness & Readiness)',
        'Rolling Updates (Zero Downtime)',
      ],
      live: 'https://shopifyclient.vercel.app/',
      code: 'https://github.com/amiitdev/shopify-docker',
      category: 'devops',
    },
    {
      title: 'Chatify - Real-Time Chat App',
      desc: 'Full-stack real-time chat application with WebSockets, live user presence, typing indicators, and image sharing',
      img: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&auto=format&fit=crop&q=80',
      tags: [
        'React',
        'Node.js',
        'Socket.io',
        'Zustand',
        'Express',
        'WebSockets',
      ],
      features: [
        'Real-time Messaging',
        'Typing Indicators',
        'Online User Presence',
        'Image Sharing',
        'Reply & Delete Messages',
        'Message Status Tracking',
      ],
      live: 'https://chatify-4vwv.vercel.app',
      code: 'https://github.com/amiitdev/chatify',
      category: 'fullstack',
    },
    {
      title: 'DevOps Auth App',
      desc: 'Production-ready authentication system with JWT, secure cookies, and full DevOps pipeline using Docker and Jenkins',
      img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Docker', 'Jenkins'],
      features: [
        'JWT Authentication',
        'httpOnly Cookies Security',
        'Protected Routes',
        'Docker Containerization',
        'Jenkins CI/CD Pipeline',
        'Environment-based Config',
      ],
      live: 'https://devops-auth-app.vercel.app',
      code: 'https://github.com/amiitdev/devops-auth-app',
      category: 'fullstack',
    },
    {
      title: 'Productify - PERN Product Manager',
      desc: 'Full-stack product management app using PostgreSQL with secure APIs, rate limiting, and production-ready architecture',
      img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&auto=format&fit=crop&q=80',
      tags: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Express',
        'Zustand',
        'Tailwind CSS',
      ],
      features: [
        'Full CRUD Operations',
        'PostgreSQL Database (Neon)',
        'API Rate Limiting',
        'Helmet Security & CSP',
        'REST API Architecture',
        'Production-ready Deployment',
      ],
      live: 'https://productify-sewc.onrender.com',
      code: 'https://github.com/amiitdev/productify',
      category: 'fullstack',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Filter projects based on category
  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section
      id="projects"
      className="
        min-h-screen
        bg-gradient-to-br from-[#030c0a] via-[#0a2f24] to-[#030c0a]
        text-white
        px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24
        py-20 pt-24 md:pt-28
        relative
        overflow-hidden
      "
    >
      {/* 🎨 BACKGROUND GLOW EFFECTS - Premium dark green theme */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-3xl"></div>

      {/* ✨ Premium grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2410c20_1px,transparent_1px),linear-gradient(to_bottom,#c2410c20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>

      {/* Floating particles (matching Hero) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100, 0],
            y: [0, (Math.random() - 0.5) * 100, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto relative z-10">
        {/* 🧾 SECTION TITLE - Premium gold gradient */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center
            bg-gradient-to-r from-white via-amber-200 to-emerald-200
            bg-clip-text text-transparent
          "
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-8 max-w-2xl mx-auto text-lg"
        >
          Here are some of my recent projects. Each one was built to solve real
          problems and showcase my skills.
        </motion.p>

        {/* 🔍 FILTER BUTTONS - Premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {[
            { id: 'all', label: 'All Projects', icon: '🎯' },
            { id: 'frontend', label: 'Frontend', icon: '🎨' },
            { id: 'fullstack', label: 'Full Stack', icon: '⚡' },
            { id: 'devops', label: 'DevOps', icon: '🚀' },
          ].map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`
                px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium
                transition-all duration-300
                ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-emerald-600 text-white shadow-lg shadow-amber-500/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10'
                }
              `}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* 📊 GRID LAYOUT - Responsive grid with premium cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                onClick={() => setSelectedProject(project)}
                className="
                  group relative
                  bg-gradient-to-br from-[#0a2f24]/80 to-[#064e3b]/80
                  backdrop-blur-md
                  rounded-xl overflow-hidden
                  shadow-lg hover:shadow-2xl hover:shadow-amber-500/30
                  transition-all duration-300
                  cursor-pointer
                  border border-white/5
                "
              >
                {/* 🖼️ IMAGE SECTION */}
                <div className="overflow-hidden h-48 sm:h-52 md:h-56 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      transition-all duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* 🌑 GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030c0a] via-transparent to-transparent opacity-70"></div>

                  {/* Category badge - Premium colors */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs border border-amber-500/30">
                      {project.category === 'frontend'
                        ? '🎨 Frontend'
                        : project.category === 'devops'
                          ? '🚀 DevOps'
                          : '⚡ Full Stack'}
                    </span>
                  </div>
                </div>

                {/* 📝 CONTENT SECTION */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* 📌 TITLE - Premium gradient */}
                  <h3
                    className="
                    text-base sm:text-lg md:text-xl font-semibold mb-2
                    bg-gradient-to-r from-amber-400 to-emerald-400
                    bg-clip-text text-transparent
                  "
                  >
                    {project.title}
                  </h3>

                  {/* 📄 DESCRIPTION */}
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* 🏷️ TAGS - Premium colors */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="
                          text-xs px-2 py-1
                          bg-amber-500/20
                          rounded-full text-amber-300
                          border border-amber-500/30
                        "
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* 🔘 BUTTONS - Premium styling */}
                  <div className="flex gap-2 sm:gap-3">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="
                        flex-1 text-center px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg
                        bg-gradient-to-r from-amber-600 to-emerald-600
                        text-white text-xs sm:text-sm font-medium
                        hover:shadow-lg hover:shadow-amber-500/30
                        transition-all
                      "
                    >
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="
                        flex-1 text-center px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded
                        text-xs sm:text-sm border border-amber-500 
                        hover:bg-amber-500 hover:text-white
                        transition-all
                      "
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🔽 VIEW ALL BUTTON - Premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4
              bg-gradient-to-r from-amber-600 to-emerald-600
              rounded-full font-semibold text-sm sm:text-base
              shadow-lg hover:shadow-amber-500/50
              transition-all duration-300
            "
          >
            View All Projects on GitHub →
          </motion.a>
        </motion.div>
      </div>

      {/* 🎨 PROJECT MODAL - Premium dark green theme with close button and responsive design */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full mx-auto bg-gradient-to-br from-[#0a2f24] to-[#030c0a] rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 my-8"
            >
              {/* Close Button - Top Right */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full 
                  bg-black/50 backdrop-blur-sm 
                  flex items-center justify-center
                  text-white hover:text-amber-400
                  border border-white/20 hover:border-amber-500/50
                  transition-all duration-300
                  cursor-pointer"
                aria-label="Close modal"
              >
                <IoClose className="text-lg sm:text-xl" />
              </motion.button>

              {/* Modal Content */}
              <div className="max-h-[90vh] overflow-y-auto">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">
                    {selectedProject.desc}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                      {selectedProject.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.03 }}
                          className="px-2 sm:px-3 py-1 bg-amber-500/20 rounded-full text-xs sm:text-sm border border-amber-500/30"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Container - Responsive */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="
                        w-full sm:flex-1 text-center px-4 py-2.5 sm:py-3 
                        bg-gradient-to-r from-amber-600 to-emerald-600 
                        rounded-lg font-semibold text-sm sm:text-base
                        hover:shadow-lg hover:shadow-amber-500/30
                        transition-all duration-300
                      "
                    >
                      🔗 Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="
                        w-full sm:flex-1 text-center px-4 py-2.5 sm:py-3 
                        border-2 border-amber-500 
                        rounded-lg font-semibold text-sm sm:text-base
                        hover:bg-amber-500 hover:text-white
                        transition-all duration-300
                      "
                    >
                      📂 View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
