import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Disciplines from '../components/Disciplines';
import Coaches from '../components/Coaches';
import Timetable from '../components/Timetable';
import Contact from '../components/Contact';

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Disciplines />
      <Coaches />
      <Contact />
    </>
  );
};

export default Landing;