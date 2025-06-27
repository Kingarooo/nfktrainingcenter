import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 px-4 bg-nfk-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-bebas text-3xl md:text-4xl mb-8 text-nfk-white">
              Nascido na luta
            </h3>
            <h2 className="font-bebas text-5xl md:text-6xl mb-6 text-nfk-red">
               Construído com respeito.
            </h2>
          </div>
          
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              O NFK Training Center é mais do que um ginásio – é uma comunidade onde 
              guerreiros são forjados. Desde 2015, temos sido o lar de atletas de todas 
              as idades e níveis, unidos pela paixão do combate e pela busca da excelência.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Aqui, cada gota de suor conta uma história. Cada treino é uma batalha 
              vencida. Cada lutador é parte da nossa família.
            </p>
          </div>
        </div>
        
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 gap-8 mt-12 transition-all duration-1000 delay-400 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-nfk-gray p-6 border-l-4 border-nfk-red hover:bg-nfk-black transition-colors duration-300">
            <Target className="w-12 h-12 text-nfk-red mb-4" />
            <h4 className="font-bebas text-xl mb-2">FOCO TOTAL</h4>
            <p className="text-gray-400">Treino intensivo e personalizado a cada um. Técnicas aperfeiçoadas por campeões mundiais.</p>
          </div>
          
          <div className="bg-nfk-gray p-6 border-l-4 border-nfk-red hover:bg-nfk-black transition-colors duration-300">
            <Users className="w-12 h-12 text-nfk-red mb-4" />
            <h4 className="font-bebas text-xl mb-2">COMUNIDADE</h4>
            <p className="text-gray-400">1000+ atletas já passaram pelo NFK. Uma família de lutadores que se apoiam mutuamente dentro e fora do ringue.</p>
          </div>
          
          <div className="bg-nfk-gray p-6 border-l-4 border-nfk-red hover:bg-nfk-black transition-colors duration-300">
            <Award className="w-12 h-12 text-nfk-red mb-4" />
            <h4 className="font-bebas text-xl mb-2">EXCELÊNCIA</h4>
            <p className="text-gray-400">Formamos campeões nacionais e internacionais em múltiplas modalidades.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;