import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Disciplines from './components/Disciplines';
import Coaches from './components/Coaches';
import Timetable from './components/Timetable';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-nfk-black text-nfk-white font-inter">
      <Hero />
      <About />
      <Disciplines />
      <Coaches />
      <Timetable />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;