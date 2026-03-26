import React from 'react';
import Hero from './componenets/Hero';
import Navbar from './componenets/Navbar';
import About from './componenets/About';
import Layout from './componenets/Layout';
import Project from './componenets/Project';
import Tech from './componenets/Tech';
import Contact from './componenets/Contact';

const App = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Tech />
        <Contact />
      </Layout>
    </div>
  );
};

export default App;
