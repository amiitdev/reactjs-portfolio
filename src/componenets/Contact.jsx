// import React from 'react';
// import { motion } from 'framer-motion';
// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="min-h-[80vh] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900
//         text-white
//         pt-28 pb-16"
//     >
//       {/* CONTAINER */}
//       <div className="max-w-4xl mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="
//             text-4xl md:text-5xl font-bold text-center mb-12
//             bg-gradient-to-r from-purple-400 to-pink-400
//             bg-clip-text text-transparent
//           "
//         >
//           {' '}
//           Contact Me
//         </motion.h2>
//         {/* FORM */}
//         <motion.form
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-br from-gray-800/70 to-gray-900/70
//             backdrop-blur-md
//             p-8 rounded-xl
//             border border-purple-500/20
//             shadow-lg
//             space-y-6"
//         >
//           {/* 🧑 NAME */}
//           <div>
//             <label className="block mb-2 text-sm text-gray-300">
//               Your Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="
//                 w-full px-4 py-3
//                 bg-gray-900/60
//                 border border-gray-700
//                 rounded-lg
//                 focus:outline-none
//                 focus:border-purple-500
//                 transition
//               "
//             />
//           </div>
//           {/* 📧 EMAIL */}
//           <div>
//             <label className="block mb-2 text-sm text-gray-300">
//               Your Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="
//                 w-full px-4 py-3
//                 bg-gray-900/60
//                 border border-gray-700
//                 rounded-lg
//                 focus:outline-none
//                 focus:border-purple-500
//                 transition
//               "
//             />
//           </div>

//           {/* 💬 MESSAGE */}
//           <div>
//             <label className="block mb-2 text-sm text-gray-300">Message</label>
//             <textarea
//               rows="5"
//               placeholder="Write your message..."
//               className="
//                 w-full px-4 py-3
//                 bg-gray-900/60
//                 border border-gray-700
//                 rounded-lg
//                 focus:outline-none
//                 focus:border-purple-500
//                 transition
//               "
//             />
//           </div>

//           {/* 🔘 BUTTON */}
//           <button
//             type="submit"
//             className="
//               w-full
//               bg-gradient-to-r from-purple-600 to-pink-600
//               py-3 rounded-lg font-semibold
//               hover:opacity-90
//               transition
//             "
//           >
//             Send Message
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

//////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'amitkumar.devnode@gmail.com',
      link: 'mailto:amitkumar.devnode@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 8340616588',
      link: 'tel:+918340616588',
    },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'India', link: null },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/amiitdev',
      label: 'GitHub',
      color: 'hover:bg-gray-700',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/amit1924',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/amit',
      label: 'Twitter',
      color: 'hover:bg-blue-500',
    },
  ];

  return (
    <section
      id="contact"
      className="
        min-h-screen
        bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900
        text-white
        px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24
        py-16 sm:py-20
        relative overflow-hidden
      "
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none"></div>
      <div
        className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold mb-3 sm:mb-4
            bg-gradient-to-r from-purple-400 to-pink-400
            bg-clip-text text-transparent
          "
          >
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        {/* CONTENT GRID - Form + Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* LEFT SIDE - CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="
                    flex items-center gap-4
                    bg-gradient-to-br from-gray-800/50 to-gray-900/50
                    backdrop-blur-sm
                    p-4 rounded-xl
                    border border-purple-500/20
                    hover:border-purple-500/40
                    transition-all duration-300
                  "
                >
                  <div
                    className="
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full 
                    bg-gradient-to-r from-purple-600/30 to-pink-600/30
                    flex items-center justify-center
                    text-purple-400 text-lg sm:text-xl
                  "
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm sm:text-base text-white hover:text-purple-400 transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-white">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-4">
                Connect with me
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-10 h-10 sm:w-11 sm:h-11
                      rounded-full 
                      bg-white/10 
                      ${social.color}
                      flex items-center justify-center 
                      transition-all duration-300
                      hover:shadow-lg hover:shadow-purple-500/30
                      text-base sm:text-lg
                    `}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-green-400">
                Available for freelance work
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              bg-gradient-to-br from-gray-800/70 to-gray-900/70
              backdrop-blur-md
              p-5 sm:p-6 md:p-8
              rounded-xl
              border border-purple-500/20
              shadow-lg
              space-y-4 sm:space-y-5
            "
          >
            {/* Name Input */}
            <div>
              <label className="block mb-2 text-xs sm:text-sm text-gray-300">
                Your Name <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="
                  w-full px-3 sm:px-4 py-2 sm:py-3
                  bg-gray-900/60
                  border border-gray-700
                  rounded-lg
                  focus:outline-none
                  focus:border-purple-500
                  focus:ring-1 focus:ring-purple-500
                  transition
                  text-sm sm:text-base
                  placeholder:text-gray-500
                "
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block mb-2 text-xs sm:text-sm text-gray-300">
                Your Email <span className="text-purple-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="
                  w-full px-3 sm:px-4 py-2 sm:py-3
                  bg-gray-900/60
                  border border-gray-700
                  rounded-lg
                  focus:outline-none
                  focus:border-purple-500
                  focus:ring-1 focus:ring-purple-500
                  transition
                  text-sm sm:text-base
                  placeholder:text-gray-500
                "
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block mb-2 text-xs sm:text-sm text-gray-300">
                Message <span className="text-purple-400">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                required
                className="
                  w-full px-3 sm:px-4 py-2 sm:py-3
                  bg-gray-900/60
                  border border-gray-700
                  rounded-lg
                  focus:outline-none
                  focus:border-purple-500
                  focus:ring-1 focus:ring-purple-500
                  transition
                  text-sm sm:text-base
                  placeholder:text-gray-500
                  resize-y
                "
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full
                bg-gradient-to-r from-purple-600 to-pink-600
                py-2.5 sm:py-3
                rounded-lg font-semibold
                text-sm sm:text-base
                hover:shadow-lg hover:shadow-purple-500/30
                transition-all duration-300
                relative overflow-hidden
                group
              "
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center text-green-400 text-sm py-2"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-xs sm:text-sm mt-8 sm:mt-12 pt-4 border-t border-purple-500/20"
        >
          © 2024 Amit.dev • Let's build something amazing together! 🚀
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
