import React from 'react';
import { ChevronDown } from 'lucide-react';
import CallToActionModal from './CallToActionModal';

const Hero = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const scrollToModalidades = () => {
    const modalidadesSection = document.getElementById('modalidades');
    if (modalidadesSection) {
      modalidadesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg" 
          alt="Combat Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nfk-black bg-opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nfk-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4">
          <span className="block">NFK</span>
          <span className="block text-nfk-red">TRAINING</span>
          <span className="block">CENTER</span>
        </h1>
        <p className="font-inter text-xl md:text-2xl font-light mb-8 tracking-wide">
          Combate. Condição. Comunidade.
        </p>
        <div className="inline-block px-8 py-3 border-2 border-nfk-red bg-transparent hover:bg-nfk-red transition-all duration-300 hover:animate-glow cursor-pointer" onClick={openModal}>
          <span className="font-bebas text-lg tracking-wider">EXPERIMENTA GRÁTIS</span>
        </div>
      </div>
      {/* Modal */}
      <CallToActionModal isOpen={modalOpen} onClose={closeModal} />
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        onClick={scrollToModalidades}
      >
        <div className="flex flex-col items-center">
          <span className="text-nfk-red font-bebas text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            VER MODALIDADES
          </span>
          <ChevronDown className="w-8 h-8 text-nfk-red group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;