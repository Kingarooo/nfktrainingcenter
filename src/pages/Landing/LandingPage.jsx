import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Sports from '../Sports/Sports';
import Coaches from '../Coaches/Coaches';
import Timetable from '../Schedules/Timetable';
import Contact from './Contact';

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
      <Sports />
      <Coaches />
      <Contact />
    </>
  );
};

export default Landing;