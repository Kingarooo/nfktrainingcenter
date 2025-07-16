import React from 'react';
import { useParams } from 'react-router-dom';
import CoachDetail from '../components/CoachDetail';

// Sample coach data - replace with your actual data source
const coachesData = {
  'filipe-albergaria': {
    id: 'filipe-albergaria',
    name: 'Filipe Albergaria',
    modality: 'kickboxing',
    bio: 'Head Coach do NFK Training Center com mais de 15 anos de experiência em desportos de combate. Especialista em kickboxing, boxe e preparação física, Filipe tem dedicado a sua carreira a formar campeões e a inspirar atletas de todos os níveis.',
    images: [
      'https://images.pexels.com/photos/4761670/pexels-photo-4761670.jpeg',
      'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg',
      'https://images.pexels.com/photos/4761654/pexels-photo-4761654.jpeg',
      'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg'
    ],
    accomplishments: [
      'Head Coach certificado em Kickboxing e Boxe',
      'Mais de 15 anos de experiência em treino de combate',
      'Formou múltiplos campeões nacionais e internacionais',
      'Especialista em preparação física para atletas de combate',
      'Instrutor certificado em Bag Workout e condicionamento',
      'Mentor de mais de 500 atletas ao longo da carreira',
      'Desenvolveu programas de treino inovadores para todos os níveis'
    ]
  },
  'andressa': {
    id: 'andressa',
    name: 'Andressa',
    modality: 'muaythai',
    bio: 'Instrutora especializada em Muay Thai com mais de 10 anos de experiência. Campeã e dedicada ao ensino da arte das oito armas, Andressa combina técnica tradicional tailandesa com métodos modernos de treino.',
    images: [
      'https://images.pexels.com/photos/4761665/pexels-photo-4761665.jpeg',
      'https://images.pexels.com/photos/4761668/pexels-photo-4761668.jpeg',
      'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg',
      'https://images.pexels.com/photos/4761654/pexels-photo-4761654.jpeg'
    ],
    accomplishments: [
      'Campeã nacional de Muay Thai',
      'Mais de 10 anos de experiência em competição',
      'Instrutora certificada pela Federação de Muay Thai',
      'Especialista em técnicas tradicionais tailandesas',
      'Formou diversos atletas competitivos',
      'Experiência internacional em treinos na Tailândia',
      'Desenvolve programas específicos para mulheres'
    ]
  },
  'pedro-paiva': {
    id: 'pedro-paiva',
    name: 'Pedro Paiva',
    modality: 'karate',
    bio: 'Mestre de Karaté com mais de 20 anos de experiência na arte marcial tradicional. Pedro combina disciplina, técnica e filosofia oriental no ensino, formando não apenas lutadores, mas também pessoas de carácter.',
    images: [
      'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg',
      'https://images.pexels.com/photos/4761670/pexels-photo-4761670.jpeg',
      'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg',
      'https://images.pexels.com/photos/4761654/pexels-photo-4761654.jpeg'
    ],
    accomplishments: [
      'Faixa preta 5º Dan em Karaté Shotokan',
      'Mais de 20 anos de prática e ensino',
      'Campeão nacional em múltiplas categorias',
      'Instrutor certificado pela Federação Nacional',
      'Especialista em Karaté tradicional e desportivo',
      'Formou campeões nacionais e internacionais',
      'Desenvolve programas para crianças e adultos'
    ]
  },
  'marco-antonio': {
    id: 'marco-antonio',
    name: 'Marco Antonio Carneiro (Marcão)',
    modality: 'bjj',
    bio: 'Faixa preta de Jiu-Jitsu Brasileiro com mais de 15 anos de experiência. Marcão é conhecido pela sua técnica refinada e capacidade de ensino, tendo formado inúmeros atletas de sucesso na arte suave.',
    images: [
      'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      'https://images.pexels.com/photos/4761669/pexels-photo-4761669.jpeg',
      'https://images.pexels.com/photos/4761670/pexels-photo-4761670.jpeg',
      'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg'
    ],
    accomplishments: [
      'Faixa preta de Jiu-Jitsu Brasileiro',
      'Mais de 15 anos de experiência em BJJ',
      'Competidor ativo em torneios nacionais',
      'Especialista em técnicas de finalização',
      'Instrutor certificado pela IBJJF',
      'Formou múltiplos faixas coloridas e pretas',
      'Desenvolve programas para iniciantes e avançados'
    ]
  }
};

const CoachProfile = () => {
  const { id } = useParams();
  const coach = coachesData[id];

  if (!coach) {
    return (
      <div className="min-h-screen bg-nfk-black text-nfk-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-4xl text-nfk-red mb-4">TREINADOR NÃO ENCONTRADO</h1>
          <p className="text-gray-400 mb-6">O treinador que procura não existe ou foi removido.</p>
          <a
            href="/"
            className="inline-block px-6 py-3 border-2 border-nfk-red bg-transparent hover:bg-nfk-red transition-colors duration-300 font-bebas text-lg tracking-wider"
          >
            VOLTAR À PÁGINA INICIAL
          </a>
        </div>
      </div>
    );
  }

  return <CoachDetail coach={coach} />;
};

export default CoachProfile;