import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [mapRef, mapVisible] = useScrollAnimation(0.2);

  return (
    <section id="contactos" className="py-20 px-4 bg-nfk-black">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="font-bebas text-5xl md:text-6xl mb-4 text-nfk-red">
              CONTACTOS
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pronto para começar a sua jornada no mundo do combate?
              Entre em contacto connosco ou visite-nos pessoalmente.
            </p>
          </div>

          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
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
          className={`transition-all duration-1000 delay-500 bg-nfk-dark h-[60vh] lg:h-[80vh] flex items-stretch ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-nfk-gray p-0 border border-gray-700 w-full h-full">
            <iframe
              title="Localização NFK"
              src="https://www.google.com/maps?q=41.151324637453136,-8.655065771745997&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', height: '100%', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;