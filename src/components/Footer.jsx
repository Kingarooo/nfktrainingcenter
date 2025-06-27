import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const [footerRef, footerVisible] = useScrollAnimation(0.1);

  return (
    <footer 
      ref={footerRef}
      className={`bg-nfk-black border-t border-nfk-gray transition-all duration-1000 ${
        footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="font-bebas text-4xl text-nfk-red mb-4">
              NFK TRAINING CENTER
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Onde guerreiros são forjados. Junte-se à nossa família de lutadores 
              e descubra o seu potencial no mundo do combate.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/nfktrainingcenter" 
                className="w-10 h-10 bg-nfk-gray hover:bg-nfk-red transition-colors duration-300 flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/nfktrainingcenter/" 
                className="w-10 h-10 bg-nfk-gray hover:bg-nfk-red transition-colors duration-300 flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          {/* <div>
            <h4 className="font-bebas text-xl mb-4 text-white">LINKS RÁPIDOS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-nfk-red transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#modalidades" className="text-gray-400 hover:text-nfk-red transition-colors duration-300">Modalidades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nfk-red transition-colors duration-300">Treinadores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nfk-red transition-colors duration-300">Horários</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nfk-red transition-colors duration-300">Contacto</a></li>
            </ul>
          </div> */}
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bebas text-xl mb-4 text-white">CONTACTO</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-nfk-red" />
                <a href="tel:+351916452684" className="text-gray-400 text-sm hover:text-nfk-red transition-colors duration-300">(+351) 916 452 684</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-nfk-red" />
                <a href="mailto:fluvial.kickboxing@gmail.com" className="text-gray-400 text-sm hover:text-nfk-red transition-colors duration-300">fluvial.kickboxing@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-nfk-gray mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 NFK Training Center. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Desenvolvido com 🥊 no Porto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;