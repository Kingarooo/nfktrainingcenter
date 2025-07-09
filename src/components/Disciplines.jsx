import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const disciplines = [
  {
    name: 'KICKBOXING',
    image: 'https://images.pexels.com/photos/4761654/pexels-photo-4761654.jpeg',
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
    image: 'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg',
    description: 'A arte nobre da luta com punhos.',
    submodalities: [
      'Boxe'
    ]
  },
  {
    name: 'MUAYTHAI',
    image: 'https://images.pexels.com/photos/4761668/pexels-photo-4761668.jpeg',
    description: 'A arte das oito armas.',
    submodalities: [
      'Muaythai Adultos',
      'Muaythai Kids'
    ]
  },
  {
    name: 'JIU JITSU',
    image: 'https://images.pexels.com/photos/4761669/pexels-photo-4761669.jpeg',
    description: 'A arte suave brasileira.',
    submodalities: [
      'Jiu Jitsu Adultos',
      'Jiu Jitsu Kids (4 aos 6 anos)',
      'Jiu Jitsu Kids (7 aos 13 anos)'
    ]
  },
  {
    name: 'KARATÉ',
    image: 'https://images.pexels.com/photos/3601095/pexels-photo-3601095.jpeg',
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
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                <h3 className={`font-bebas text-2xl mb-2 text-white transition-all duration-300 group-hover:text-nfk-red group-hover:-translate-y-5`}>
                  {discipline.name}
                </h3>
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 text-sm mb-2">
                    {discipline.description}
                  </p>
                  <ul className="text-gray-200 text-xs space-y-1">
                    {discipline.submodalities && discipline.submodalities.map((sub, i) => (
                      <li key={i}>• {sub}</li>
                    ))}
                  </ul>
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