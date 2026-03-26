// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutMe from '../assets/about_me.jpg';

// /*
//   🧠 COMPONENT: About Section
//   --------------------------------
//   - Shows introduction + skills + image
//   - Uses Framer Motion for scroll animation
//   - Fully responsive (mobile + desktop)
// */

// const About = () => {
//   /*
//     📦 SKILLS DATA
//     --------------------------------
//     - Array makes UI dynamic
//     - Easy to add/remove skills later
//   */
//   const skills = [
//     'React',
//     'Node.js',
//     'TypeScript',
//     'Tailwind CSS',
//     'MongoDB',
//     'Express',
//   ];

//   return (
//     <section
//       id="about" // 🔗 used for navbar scroll
//       className="
//         min-h-screen
//         bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900
//         text-white
//         flex items-center justify-center
//         px-6 pt-20
//         relative overflow-hidden
//       "
//     >
//       {/* 🎨 BACKGROUND GLOW EFFECTS */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

//       {/* 📦 MAIN CONTAINER */}
//       <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
//         {/* ================= LEFT SIDE ================= */}
//         {/* 📝 TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }} // start from left
//           whileInView={{ opacity: 1, x: 0 }} // move to center
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex-1"
//         >
//           {/* 🧾 TITLE */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="
//               text-4xl md:text-6xl font-bold mb-6
//               bg-gradient-to-r from-purple-400 to-pink-400
//               bg-clip-text text-transparent
//             "
//           >
//             About Me
//           </motion.h1>

//           {/* 📄 PARAGRAPH 1 */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-300 mb-4 text-lg leading-relaxed"
//           >
//             I'm a passionate full stack developer who loves building modern and
//             scalable web applications.
//           </motion.p>

//           {/* 📄 PARAGRAPH 2 */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-gray-400 mb-4 leading-relaxed"
//           >
//             I enjoy solving real-world problems and continuously learning new
//             technologies.
//           </motion.p>

//           {/* 📄 PARAGRAPH 3 */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="text-gray-400 mb-6 leading-relaxed"
//           >
//             Currently focusing on{' '}
//             <span className="text-purple-400 font-semibold">React</span>,
//             <span className="text-purple-400 font-semibold"> Node.js</span> and
//             <span className="text-purple-400 font-semibold"> DevOps</span>.
//           </motion.p>

//           {/* 🏷️ SKILLS SECTION */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex flex-wrap gap-3"
//           >
//             {skills.map((skill, index) => (
//               <motion.span
//                 key={skill}
//                 /*
//                   🎬 ENTRY ANIMATION
//                   scale + fade
//                 */
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 /*
//                   🔥 STAGGER EFFECT
//                 */
//                 transition={{ delay: 0.9 + index * 0.05 }}
//                 /*
//                   ✨ HOVER EFFECT
//                 */
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 className="
//                   px-4 py-2
//                   bg-gradient-to-r from-purple-600/30 to-blue-600/30
//                   backdrop-blur-sm
//                   rounded-full text-sm font-medium
//                   border border-purple-500/30
//                   hover:border-purple-500/60
//                   transition-all cursor-pointer
//                 "
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* ================= RIGHT SIDE ================= */}
//         {/* 🖼️ IMAGE SECTION */}
//         <motion.div
//           initial={{ opacity: 0, x: 100, scale: 0.9 }} // start right
//           whileInView={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           whileHover={{ scale: 1.02 }}
//           className="flex-1 flex justify-center"
//         >
//           <div className="relative group">
//             {/* ✨ GLOW EFFECT */}
//             <div
//               className="
//               absolute -inset-1
//               bg-gradient-to-r from-purple-600 to-pink-600
//               rounded-3xl blur-xl opacity-75
//               group-hover:opacity-100
//               transition duration-500 animate-pulse
//             "
//             ></div>

//             {/* 📦 IMAGE CONTAINER */}
//             <div className="relative bg-gradient-to-r from-purple-900 to-gray-900 rounded-3xl p-2">
//               <img
//                 src={aboutMe}
//                 alt="About me"
//                 className="
//                   w-full max-w-md
//                   rounded-2xl
//                   shadow-2xl
//                 "
//               />
//             </div>

//             {/* 🎨 DECORATIVE SHAPES */}
//             <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-purple-500/30 rounded-full"></div>
//             <div className="absolute -top-4 -left-4 w-16 h-16 border border-purple-500/30 rounded-full"></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

///////////////////////////////
import React from 'react';
import { motion, useInView } from 'framer-motion';
import aboutMe from '../assets/about.png';

/*
  🧠 COMPONENT: About Section - Premium Dark Green Edition
  --------------------------------
  - Matches Hero's Shopify-style dark green theme
  - Consistent animations and design language
  - Fresher perspective with genuine skill levels
  - Fully responsive with premium aesthetics
*/

const About = () => {
  /*
    📦 SKILLS DATA - Friendly
    --------------------------------
    - Core skills typically know
    - Honest about current learning stage
    - Focus on modern, in-demand technologies
  */
  const skills = [
    'React',
    'JavaScript',
    'HTML/CSS',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'REST APIs',
  ];

  /*
    📊 STATS DATA 
    --------------------------------
    - Shows genuine achievements
    - Focus on learning and projects
    - Avoids inflated numbers
  */
  const stats = [
    {
      number: '10+',
      label: 'Projects Built',
      icon: '🚀',
      description: 'Personal & academic',
    },
    {
      number: '500+',
      label: 'Hours of Coding',
      icon: '💻',
      description: 'Practice & learning',
    },
    {
      number: '5+',
      label: 'Technologies',
      icon: '⚡',
      description: 'Currently learning',
    },
    {
      number: '∞',
      label: 'Learning',
      icon: '🌱',
      description: 'Always growing',
    },
  ];

  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-gradient-to-br from-[#030c0a] via-[#0a2f24] to-[#030c0a]
        text-white
        flex items-center justify-center
        px-4 md:px-8 lg:px-16 xl:px-24
        py-20 pt-24 md:pt-28
        relative overflow-hidden
      "
    >
      {/* 🎨 BACKGROUND GLOW EFFECTS - Premium dark green theme */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>

      {/* ✨ Premium grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2410c20_1px,transparent_1px),linear-gradient(to_bottom,#c2410c20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>

      {/* Floating particles (matching Hero) */}
      {[...Array(15)].map((_, i) => (
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

      {/* 📦 MAIN CONTAINER */}
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-16 xl:gap-20 relative z-10">
        {/* ================= LEFT SIDE (Now on right in desktop) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          viewport={{ once: true }}
          className="flex-1"
        >
          {/* 🧾 TITLE with premium gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8
              bg-gradient-to-r from-white via-amber-200 to-emerald-200
              bg-clip-text text-transparent
            "
          >
            About Me
          </motion.h1>

          {/* 📄 PARAGRAPH 1 - Introduction with premium styling */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-300 mb-4 text-base md:text-lg lg:text-xl leading-relaxed"
          >
            I'm a passionate and motivated full stack developer who loves
            turning ideas into functional, user-friendly web applications. I
            recently completed my degree in Computer Science and I'm excited to
            start my professional journey!
          </motion.p>

          {/* 📄 PARAGRAPH 2 - Learning Journey */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 mb-4 leading-relaxed text-base md:text-lg"
          >
            My journey into web development began during my college years when I
            built my first website. Since then, I've been hooked! I've spent
            countless hours learning modern web technologies through online
            courses, personal projects, and collaborating with fellow
            developers. I believe in writing clean, maintainable code and
            constantly improving my skills.
          </motion.p>

          {/* 📄 PARAGRAPH 3 - Current Focus with gold accents */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-400 mb-8 leading-relaxed text-base md:text-lg"
          >
            Currently, I'm focusing on mastering{' '}
            <span className="text-amber-400 font-semibold">React</span> and
            <span className="text-amber-400 font-semibold"> Node.js</span> while
            exploring
            <span className="text-amber-400 font-semibold">
              {' '}
              TypeScript
            </span>{' '}
            and
            <span className="text-amber-400 font-semibold"> Next.js</span>. I'm
            actively building projects to strengthen my skills and contribute to
            open source. I'm eager to join a team where I can learn, grow, and
            make meaningful contributions.
          </motion.p>

          {/* 📊 STATS SECTION - Premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all group"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 🏷️ SKILLS SECTION - Premium badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="space-y-3"
          >
            <h3 className="text-sm uppercase tracking-wider text-amber-400 font-semibold">
              My Current Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="
                    px-3 md:px-4 py-1.5 md:py-2
                    bg-gradient-to-r from-amber-600/20 to-emerald-600/20
                    backdrop-blur-sm
                    rounded-full text-xs md:text-sm font-medium
                    border border-amber-500/30
                    hover:border-amber-500/60
                    transition-all cursor-pointer
                    hover:shadow-lg hover:shadow-amber-500/20
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Learning Note with premium styling */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-4 flex items-center gap-2 text-xs text-gray-500 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 inline-flex"
            >
              <span className="animate-pulse">🌱</span>
              <span>Currently learning: TypeScript, Next.js, and Docker</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE (Now on left in desktop) ================= */}
        {/* 🖼️ IMAGE SECTION with premium effects matching Hero */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          whileHover={{ scale: 1.02 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            {/* ✨ GLOW EFFECT - Premium gold/green */}
            <div
              className="
                absolute -inset-2 md:-inset-3
                bg-gradient-to-r from-amber-600 to-emerald-600
                rounded-3xl blur-2xl opacity-75
                group-hover:opacity-100
                transition duration-500 animate-pulse
              "
            ></div>

            {/* Rotating ring effect (matching Hero) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-3xl border-2 border-amber-500/30"
              style={{ width: '100%', height: '100%' }}
            />

            {/* 📦 IMAGE CONTAINER */}
            <div className="relative bg-gradient-to-r from-[#0a2f24] to-[#064e3b] rounded-3xl p-2 md:p-3">
              <img
                src={aboutMe}
                alt="About me"
                className="
                  w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg
                  rounded-2xl
                  shadow-2xl
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030c0a]/50 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            {/* 🎨 DECORATIVE SHAPES - Premium colors */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border-2 border-amber-500/30 rounded-full animate-pulse"></div>
            <div
              className="absolute -top-5 -left-5 w-20 h-20 border-2 border-emerald-500/30 rounded-full animate-pulse"
              style={{ animationDelay: '1s' }}
            ></div>

            {/* Additional decorative elements */}
            <div className="absolute bottom-1/2 -right-8 w-12 h-12 border border-amber-500/20 rounded-full hidden lg:block"></div>
            <div className="absolute top-1/3 -left-8 w-8 h-8 border border-emerald-500/20 rounded-full hidden lg:block"></div>

            {/* Motivation badge - Premium styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-600/80 to-emerald-600/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs whitespace-nowrap shadow-lg border border-amber-500/50"
            >
              🎓 Open to opportunities
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
