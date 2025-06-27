import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const disciplines = [
  {
    name: 'BOXE',
    image: 'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg',
    description: 'A arte nobre da luta com punhos.'
  },
  {
    name: 'MUAY THAI',
    image: 'https://images.pexels.com/photos/4761668/pexels-photo-4761668.jpeg',
    description: 'A arte das oito armas.'
  },
  {
    name: 'MMA',
    image: 'https://images.pexels.com/photos/4761658/pexels-photo-4761658.jpeg',
    description: 'Artes marciais mistas.'
  },
  {
    name: 'JIU-JITSU',
    image: 'https://images.pexels.com/photos/4761669/pexels-photo-4761669.jpeg',
    description: 'A arte suave brasileira.'
  },
  {
    name: 'KICKBOXING',
    image: 'https://images.pexels.com/photos/4761654/pexels-photo-4761654.jpeg',
    description: 'Combinação perfeita de punhos e pernas.'
  },
  {
    name: 'WRESTLING',
    image: 'https://images.pexels.com/photos/4761673/pexels-photo-4761673.jpeg',
    description: 'Luta corpo a corpo ancestral.'
  },
  {
    name: 'CONDITIONING',
    image: 'https://images.pexels.com/photos/4761659/pexels-photo-4761659.jpeg',
    description: 'Preparação física de elite.'
  },
  {
    name: 'SELF DEFENSE',
    image: 'https://images.pexels.com/photos/4761656/pexels-photo-4761656.jpeg',
    description: 'Defesa pessoal eficaz.'
  }
];

const Disciplines = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <section id="modalidades" className="py-20 px-4 bg-nfk-black">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-bebas text-5xl md:text-6xl mb-4 text-nfk-red">
            MODALIDADES
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore as diferentes artes marciais e modalidades de combate que oferecemos. 
            Cada uma com sua técnica única e filosofia própria.
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {disciplines.map((discipline, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-nfk-gray border border-nfk-gray hover:border-nfk-red transition-all duration-300 transform hover:scale-105 ${
                gridVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative">
                <img 
                  src={discipline.image}
                  alt={discipline.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-nfk-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-bebas text-2xl mb-2 text-white group-hover:text-nfk-red transition-colors duration-300">
                  {discipline.name}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {discipline.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;