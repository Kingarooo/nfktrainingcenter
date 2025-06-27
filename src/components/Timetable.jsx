import React from 'react';
import { Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const schedule = {
  'Segunda': [
    { time: '10:30', class: 'Bag Workout', coach: 'Filipe Albergaria' },
    { time: '07:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '18:30', class: 'Kickboxing', coach: 'Filipe Albergaria' }
  ],
  'Terça': [
    { time: '17:00', class: 'Bag Workout', coach: 'Filipe Albergaria' },
    { time: '18:00', class: 'Boxe', coach: 'Filipe Albergaria' },
    { time: '13:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '19:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '20:00', class: 'Muay Thai', coach: 'Andressa' }
  ],
  'Quarta': [
    { time: '10:30', class: 'Bag Workout', coach: 'Filipe Albergaria' },
    { time: '18:00', class: 'Boxe', coach: 'Filipe Albergaria' },
    { time: '07:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '18:30', class: 'Kickboxing', coach: 'Filipe Albergaria' }
  ],
  'Quinta': [
    { time: '17:00', class: 'Bag Workout', coach: 'Filipe Albergaria' },
    { time: '18:00', class: 'Boxe', coach: 'Filipe Albergaria' },
    { time: '13:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '19:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '20:00', class: 'Muay Thai', coach: 'Andressa' }
  ],
  'Sexta': [
    { time: '10:30', class: 'Bag Workout', coach: 'Filipe Albergaria' },
    { time: '18:00', class: 'Boxe', coach: 'Filipe Albergaria' },
    { time: '07:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '19:00', class: 'Kickboxing', coach: 'Filipe Albergaria' },
    { time: '20:00', class: 'Muay Thai', coach: 'Andressa' }
  ],
  'Sábado': [
    { time: '11:00', class: 'Kickboxing', coach: 'Filipe Albergaria' }
  ],
  'Domingo': [
    { time: 'Descanso', class: 'Até os guerreiros merecem descanso', coach: 'Filipe Albergaria' }
  ]
};

const Timetable = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2);

  return (
    <section className="py-20 px-4 bg-nfk-black">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="font-bebas text-5xl md:text-6xl mb-4 text-nfk-red">
            HORÁRIOS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Planeie os seus treinos com o nosso horário semanal.
            Aulas para todos os níveis, desde iniciantes até competidores.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {Object.entries(schedule).map(([day, classes], index) => (
            <div
              key={day}
              className={`bg-nfk-gray border border-gray-700 hover:border-nfk-red transition-colors duration-300 ${gridVisible ? 'animate-fade-in-up' : ''
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-nfk-red p-4">
                <h3 className="font-bebas text-xl text-center text-white">
                  {day.toUpperCase()}
                </h3>
              </div>

              <div className="p-4 space-y-4">
                {classes.map((classInfo, index) => (
                  <div key={index} className="border-l-2 border-nfk-red pl-4">
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 text-nfk-red mr-2" />
                      <span className="font-bebas text-lg text-nfk-red">
                        {classInfo.time}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold mb-1">
                      {classInfo.class}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Coach: {classInfo.coach}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div
          ref={ctaRef}
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-block px-8 py-3 border-2 border-nfk-red bg-transparent hover:bg-nfk-red transition-all duration-300 cursor-pointer">
            <span className="font-bebas text-lg tracking-wider">RESERVAR AULA</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Timetable;