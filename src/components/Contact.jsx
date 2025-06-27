import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [mapRef, mapVisible] = useScrollAnimation(0.2);

  return (
    <section className="py-20 px-4 bg-nfk-dark">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="font-bebas text-5xl md:text-6xl mb-4 text-nfk-red">
            CONTACTO
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pronto para começar a sua jornada no mundo do combate?
            Entre em contacto connosco ou visite-nos pessoalmente.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="space-y-8">
            <h3 className="font-bebas text-3xl mb-6 text-white">
              INFORMAÇÕES DE CONTACTO
            </h3>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-nfk-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bebas text-lg mb-1 text-white">MORADA</h4>
                <p className="text-gray-400">
                  Rua de Aleixo da Mota S/N<br />
                  4150-044 Porto<br />
                  (Complexo das piscinas do fluvial)<br />
                  Portugal
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-nfk-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bebas text-lg mb-1 text-white">TELEFONE</h4>
                <a href="tel:+351916452684" className="text-gray-400 hover:text-nfk-red transition-colors duration-300">(+351) 916 452 684</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-nfk-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bebas text-lg mb-1 text-white">EMAIL</h4>
                <a href="mailto:fluvial.kickboxing@gmail.com" className="text-gray-400 hover:text-nfk-red transition-colors duration-300">fluvial.kickboxing@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-nfk-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bebas text-lg mb-1 text-white">HORÁRIO</h4>
                <div className="text-gray-400 space-y-1">
                  <p>Segunda - Sexta: 07:00 - 22:00</p>
                  <p>Sábado: 09:00 - 15:00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div
          ref={mapRef}
          className={`mt-16 transition-all duration-1000 delay-500 ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="bg-nfk-gray p-4 border border-gray-700">
            <div className="aspect-video bg-nfk-black flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-nfk-red mx-auto mb-4" />
                <p className="text-gray-400">Mapa integrado aqui</p>
                <p className="text-sm text-gray-500 mt-2">Lisboa, Rua da Luta, 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;