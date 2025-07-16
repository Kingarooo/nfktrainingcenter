import { useParams } from 'react-router-dom';
import CoachDetails from '../components/CoachDetails';

// Import coach images
import FilipePfp from '../assets/coaches/Filipe/Filipe_pfp.jpg';
import FilipeThumbnail01 from '../assets/coaches/Filipe/Filipe_thumbnail_01.jpg';
import FilipeThumbnail02 from '../assets/coaches/Filipe/Filipe_thumbnail_02.jpg';
import FilipeThumbnail03 from '../assets/coaches/Filipe/Filipe_thumbnail_03.jpg';
import FilipeThumbnail04 from '../assets/coaches/Filipe/Filipe_thumbnail_04.jpg';
import FilipeThumbnail05 from '../assets/coaches/Filipe/Filipe_thumbnail_05.jpg';

import AndressaPfp from '../assets/coaches/Andressa/Andressa_pfp.jpg';
import AndressaThumbnail01 from '../assets/coaches/Andressa/Andressa_thumbnail_01.jpg';
import AndressaThumbnail02 from '../assets/coaches/Andressa/Andressa_thumbnail_02.jpg';
import AndressaThumbnail03 from '../assets/coaches/Andressa/Andressa_thumbnail_03.jpg';

import PedroPfp from '../assets/coaches/Pedro/Pedro_pfp.jpg';
import PedroThumbnail01 from '../assets/coaches/Pedro/Pedro_thumbnail_01.jpg';
import PedroThumbnail02 from '../assets/coaches/Pedro/Pedro_thumbnail_02.jpg';
import PedroThumbnail03 from '../assets/coaches/Pedro/Pedro_thumbnail_03.jpg';

import MarcaoPfp from '../assets/coaches/Marcao/Marcao_pfp.jpg';
import MarcaoThumbnail01 from '../assets/coaches/Marcao/Marcao_thumbnail_01.jpg';
import MarcaoThumbnail02 from '../assets/coaches/Marcao/Marcao_thumbnail_02.jpg';
import MarcaoThumbnail03 from '../assets/coaches/Marcao/Marcao_thumbnail_03.jpg';

import RafaelPfp from '../assets/coaches/Rafael/Rafael_pfp.jpg';
import RafaelThumbnail01 from '../assets/coaches/Rafael/Rafael_thumbnail_01.jpg';
import RafaelThumbnail02 from '../assets/coaches/Rafael/Rafael_thumbnail_02.jpg';
import RafaelThumbnail03 from '../assets/coaches/Rafael/Rafael_thumbnail_03.jpg';

import PlaceholderImage from '../assets/coaches/placeholder.jpg';

// Sample coach data - replace with your actual data source
const coachesData = {
  'filipe-albergaria': {
    id: 'filipe-albergaria',
    name: 'Filipe Miguel de Albergaria Pereira',
    modality: 'kickboxing',
    bio: '"Pratico ativamente Kickboxing há 15 anos, na qual me tornei profissional na categoria de K1. Sou treinador ativo do Kickboxing há 5 anos onde o foco passa por transmitir os valores da modalidade e ajudar na formação de futuros lutadores." Filipe traz uma abordagem única ao treino, combinando técnica refinada com paixão pelo ensino.',
    images: [
      FilipePfp,
      FilipeThumbnail01,
      FilipeThumbnail02,
      FilipeThumbnail03,
      FilipeThumbnail04,
      FilipeThumbnail05
    ],
    accomplishments: [
      '1° Dan de Kickboxing/Muaythai',
      'Curso de Nível 1 treinador de Kickboxing/Muaythai',
      'Curso Nível 1 de Boxe',
      '15 anos de prática ativa em Kickboxing',
      '5 anos como treinador ativo de Kickboxing'
    ],
    email: 'nfktrainingcenter@gmail.com',
    instagram: '@albergariamethod'
  },
  'andressa-baptista': {
    id: 'andressa-baptista',
    name: 'Andressa Baptista',
    modality: 'muaythai',
    bio: 'Instrutora especializada em Muay Thai com mais de 10 anos de experiência. Campeã e dedicada ao ensino da arte das oito armas, Andressa combina técnica tradicional tailandesa com métodos modernos de treino.',
    images: [
      AndressaPfp,
      AndressaThumbnail01,
      AndressaThumbnail02,
      AndressaThumbnail03
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
      PedroPfp,
      PedroThumbnail01,
      PedroThumbnail02,
      PedroThumbnail03
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
      MarcaoPfp,
      MarcaoThumbnail01,
      MarcaoThumbnail02,
      MarcaoThumbnail03
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
  },
  'rafael': {
    id: 'rafael',
    name: 'Rafael',
    modality: 'mma',
    bio: 'Lutador profissional com múltiplas conquistas em campeonatos nacionais e internacionais. Rafael é um atleta dedicado que combina técnica, força e estratégia para alcançar a excelência no combate.',
    images: [
      RafaelPfp,
      RafaelThumbnail01,
      RafaelThumbnail02,
      RafaelThumbnail03
    ],
    accomplishments: [
      'Lutador profissional de MMA',
      'Múltiplos campeonatos nacionais conquistados',
      'Participação em campeonatos internacionais',
      'Especialista em técnicas de striking e grappling',
      'Mais de 10 anos de experiência em competição',
      'Instrutor de técnicas de combate avançadas',
      'Mentor de novos talentos do MMA'
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

  return <CoachDetails coach={coach} />;
};

export default CoachProfile;