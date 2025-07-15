import React from 'react';
import { ChevronDown } from 'lucide-react';
import CallToActionModal from './CallToActionModal';
import ActionButton from './ActionButton';

const Hero = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [shake, setShake] = React.useState(true);

  React.useEffect(() => {
      setShake(true);
  }, []);

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

  const playSound = () => {
    const audio = document.getElementById('bell-audio');
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <section className="relative min-h-screen pb-20 flex items-center justify-center overflow-hidden">
      <audio id="bell-audio" src="/assets/bell.mp3" preload="auto" />
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
        <h1
          className={`font-bebas text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 ${shake ? 'animate-shake' : ''}`}
          onAnimationEnd={() => setShake(false)}
        >
          <span className="block">NFK</span>
          <span className="block text-xs md:text-sm lg:text-base tracking-normal">New Fighting Knowledge</span>
          <span className="block text-nfk-red">TRAINING</span>
          <span className="block">CENTER</span>
        </h1>
        <p className="font-bebas text-xl md:text-2xl font-light mb-8 tracking-wide">
          Combate. Condição. Comunidade.
        </p>
        <ActionButton onClick={() => { playSound(); openModal(); }}>
          EXPERIMENTA GRÁTIS
        </ActionButton>
      </div>

      <CallToActionModal isOpen={modalOpen} onClose={closeModal} />

      <div 
        className="absolute bottom-10 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        onClick={scrollToModalidades}
      >
        <div className="flex flex-col pb-12 items-center">
          <span className="text-nfk-red font-bebas text-sm  opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            MODALIDADES
          </span>
          <ChevronDown className="w-8 h-8 text-nfk-red opacity-70 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;