import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import InfoIcon from './shared/InfoIcon';

// Import sport thumbnail images
import KickboxingThumbnail from '../assets/sport/kickboxing/kickboxing_thumbnail_01.jpg';
import BoxeThumbnail from '../assets/sport/boxe/boxe_thumbnail_01.jpg';
import MuaythaiThumbnail from '../assets/sport/muaythai/muaythai_thumbnail_01.jpg';
import JiujitsuThumbnail from '../assets/sport/jiujitsu/jiujitsu_thumbnail_01.jpg';
import KarateThumbnail from '../assets/sport/karate/karate_thumbnail_01.jpg';

const disciplines = [
  {
    name: 'KICKBOXING',
    image: KickboxingThumbnail,
    description: 'Combinação perfeita de punhos e pernas.',
    submodalities: [
      'Kickboxing Adultos',
      'Kickboxing Kids',
      'Kickboxing/Muaythai Kids',
      'Bag Workout'
    ]
  },
  {
    name: 'BOXE',
    image: BoxeThumbnail,
    description: 'A arte nobre da luta com punhos.',
    submodalities: [
      'Boxe'
    ]
  },
  {
    name: 'MUAYTHAI',
    image: MuaythaiThumbnail,
    description: 'A arte das oito armas.',
    submodalities: [
      'Muaythai Adultos',
      'Muaythai Kids'
    ]
  },
  {
    name: 'JIU JITSU',
    image: JiujitsuThumbnail,
    description: 'A arte suave brasileira.',
    submodalities: [
      'Jiu Jitsu Adultos',
      'Jiu Jitsu Kids (4 aos 6 anos)',
      'Jiu Jitsu Kids (7 aos 13 anos)'
    ]
  },
  {
    name: 'KARATÉ',
    image: KarateThumbnail,
    description: 'Disciplina, respeito e tradição.',
    submodalities: [
      'Karaté Adultos',
      'Karaté Kids',
      'Karaté Mini Kids'
    ]
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
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
              
              <div className="absolute inset-0 flex flex-col pointer-events-none">
                {/* Title fixed at top */}
                <div className="p-6 pb-0">
                  <h3 className="font-bebas text-2xl text-white group-hover:text-nfk-red transition-colors duration-300">
                    {discipline.name}
                  </h3>
                </div>
                
                {/* Content that appears on hover */}
                <div className="flex-1 flex flex-col justify-end p-6 pt-0">
                  <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-gray-300 text-sm mb-2 pl-0">
                      {discipline.description}
                    </p>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {discipline.submodalities && discipline.submodalities.map((sub, i) => (
                        <li key={i}>• {sub}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Hover indicator icon */}
                <div className="absolute bottom-4 right-4 text-gray-100 group-hover:text-nfk-red transition-colors duration-300">
                  <div className="flex items-center space-x-1">
                    <span className="text-s font-bebas opacity-60 group-hover:opacity-100 animate-pulse group-hover:animate-none">
                      IDADES
                    </span>
                    <InfoIcon className="opacity-70 group-hover:opacity-100 animate-pulse group-hover:animate-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;