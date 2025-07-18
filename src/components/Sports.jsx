import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import InfoIcon from './shared/InfoIcon';
import {
  KickboxingThumbnail,
  BoxeThumbnail,
  MuaythaiThumbnail,
  BjjThumbnail,
  KarateThumbnail
} from '../constants/sportImages';
import { useNavigate } from 'react-router-dom';

const sports = [
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
    image: BjjThumbnail,
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

const Sports = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [mobileToggles, setMobileToggles] = React.useState({});
  const navigate = useNavigate();

  const toggleMobileInfo = (sportName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileToggles(prev => ({
      ...prev,
      [sportName]: !prev[sportName]
    }));
  };

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
          {sports.map((sport, index) => (
            <div 
              key={index}
              onClick={() => navigate(`/sport/${sport.name.toLowerCase()}`)}
              className={`group relative overflow-hidden bg-nfk-gray border border-nfk-gray hover:border-nfk-red transition-all duration-300 transform hover:scale-105 ${
                gridVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative">
                <img 
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-nfk-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col pointer-events-none">
                {/* Title fixed at top */}
                <div className="p-6 pb-0">
                  <h3 className="font-bebas text-2xl text-white group-hover:text-nfk-red transition-colors duration-300">
                    {sport.name}
                  </h3>
                </div>
                
                {/* Content that appears on hover or mobile toggle */}
                <div className="flex-1 flex flex-col justify-end p-6 pt-0">
                  <div className={`transform transition-transform duration-300 ${
                    mobileToggles[sport.name] ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                  }`}>
                    <p className="text-gray-300 text-sm mb-2 pl-0">
                      {sport.description}
                    </p>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {sport.submodalities && sport.submodalities.map((sub, i) => (
                        <li key={i}>• {sub}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Mobile toggle button (visible only on mobile) */}
                <button
                  onClick={(e) => toggleMobileInfo(sport.name, e)}
                  className="absolute bottom-4 right-4 text-gray-100 group-hover:text-nfk-red transition-colors duration-300 pointer-events-auto z-10 sm:hidden"
                >
                  <div className="flex items-center space-x-1">
                    <span className="text-s font-bebas opacity-60 group-hover:opacity-100">
                      NÍVEIS
                    </span>
                    <InfoIcon className="opacity-70 group-hover:opacity-100" />
                  </div>
                </button>

                {/* Desktop hover indicator icon */}
                <div className="absolute bottom-4 right-4 text-gray-100 group-hover:text-nfk-red transition-colors duration-300 hidden sm:block">
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

export default Sports;