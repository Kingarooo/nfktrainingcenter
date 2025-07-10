import React from 'react';
import { Clock } from 'lucide-react';

const Timetable = ({ schedule, isSingleDay, selectedSport, selectedDay }) => {
  return (
    <section className="py-20 px-4 bg-nfk-black">
      <div className="max-w-7xl mx-auto">

        <div className={`grid gap-6 ${
          isSingleDay 
            ? 'grid-cols-1 max-w-md mx-auto' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {schedule && Object.entries(schedule).map(([day, classes], index) => (
            <div
              key={day}
              className="bg-nfk-gray border border-gray-700 hover:border-nfk-red transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-nfk-red p-4">
                <h3 className="font-bebas text-xl text-center text-white">
                  {day.toUpperCase()}
                </h3>
              </div>

              <div className="p-4 space-y-4">
                {classes.length > 0 ? (
                  classes.map((classInfo, index) => (
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
                    </div>
                  ))
                ) : (
                  <div className="text-center font-bold justify-center py-8">
                    <p className="bold text-m">
                      Não há aulas desta modalidade {day === 'Sábado' || day === 'Domingo' ? 'no' : 'na'} {day}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timetable;