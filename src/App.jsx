import React from 'react';
import Hero from './componenets/Hero';
import Navbar from './componenets/Navbar';
import About from './componenets/About';

import Project from './componenets/Project';
import Tech from './componenets/Tech';
import Contact from './componenets/Contact';

/*
  🧠 APP COMPONENT - Premium Dark Green Portfolio
  --------------------------------
  - Main application entry point
  - All sections with consistent premium dark green theme
  - Smooth scrolling and navigation between sections
  - Fully responsive layout
*/

const App = () => {
  return (
    <div className="relative bg-[#030c0a] overflow-x-hidden">
      {/* Premium background gradient that spans entire app */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#030c0a] via-[#0a2f24] to-[#030c0a] pointer-events-none z-0" />

      {/* Optional: Subtle noise texture for depth */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      {/* Main content with relative positioning to stay above background */}
      <div className="relative z-10 mb-5">
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Tech />
        <Contact />
      </div>
    </div>
  );
};

export default App;
