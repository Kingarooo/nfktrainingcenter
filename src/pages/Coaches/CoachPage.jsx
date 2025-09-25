import { useParams, useNavigate } from 'react-router-dom';
import CoachDetails from './CoachDetails';
import {
  FilipePfp,
  FilipeThumbnail01,
  FilipeThumbnail02,
  FilipeThumbnail03,
  FilipeThumbnail04,
  AndressaPfp,
  AndressaThumbnail01,
  AndressaThumbnail02,
  AndressaThumbnail03,
  PedroPfp,
  PedroThumbnail01,
  PedroThumbnail02,
  PedroThumbnail03,
  MarcaoPfp,
  MarcaoThumbnail01,
  MarcaoThumbnail02,
  MarcaoThumbnail03,
  RafaelPfp,
  RafaelThumbnail01,
  RafaelThumbnail02,
  RafaelThumbnail03,
  NoImage
} from '../../constants/coachImages';

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
    bio: '"Mestre de Karaté com mais de 25 anos de prática, sendo 10 deles como Professor. Os treinos combinam técnicas de Defesa Pessoal, competição e formato tradicional da arte. Sempre baseado nos princípios do Bushido como a justiça, coragem e benevolência." Pedro é um formador de campeões nacionais e especialista em ensino desde crianças até adultos.',
    images: [
      PedroPfp,
      PedroThumbnail01,
      PedroThumbnail02,
      PedroThumbnail03
    ],
    accomplishments: [
      'Cinto preto 4° Dan em Karaté Shukokai',
      'Mais de 15 anos como Cinto Negro',
      'Instrutor certificado pelo IPDJ e FNKP (carteira renovada até Maio 2027, n° 88945)',
      'Treinador de Defesa Pessoal nível 1 certificado pela IPDJ e DGERT',
      'Formado em seminários pelo renomeado Mestre Vinicio Antony (Ex Head Coach de Lyoto Machida e Victor Belfort)',
      'Formador de campeões Nacionais de Shukokai',
      'Desenvolve programas para crianças a partir dos 3 anos até adultos',
      'Especialista em técnicas de Defesa Pessoal, competição e formato tradicional'
    ]
  },
  'marco-antonio': {
    id: 'marco-antonio',
    name: 'Marco Aurélio (Marcão)',
    modality: 'Jiu-Jitsu',
    bio: '"Com 25 anos como professor e faixa preta há 17 anos, sou parte da equipa percursora de Jiu-Jitsu no Norte de Portugal. O meu estilo de ensino é dinâmico e versátil, adaptando-me às necessidades de cada aluno." Marcão é uma referência no Jiu-Jitsu português, combinando vasta experiência com inovação no ensino.',
    images: [
      MarcaoPfp,
      MarcaoThumbnail01,
      MarcaoThumbnail02,
      MarcaoThumbnail03
    ],
    accomplishments: [
      'Faixa preta 4º grau (17 anos como faixa preta)',
      '25 anos como professor de Jiu-Jitsu',
      'Árbitro Internacional',
      '5 vezes campeão como faixa preta',
      '5 vezes vice-campeão como faixa preta',
      'Parte da equipa percursora de BJJ no Norte de Portugal',
      'Estilo de ensino dinâmico e versátil'
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
  },
  'fernando-teixeira': {
    id: 'fernando-teixeira',
    name: 'Fernando Teixeira (Nando/Nandinho)',
    modality: 'jiu-jitsu',
    bio: '"Com 7 anos como professor e faixa preta há 3 anos, o meu estilo de ensino é estratégico, focando na técnica e na mentalidade do Jiu-Jitsu. Sou também professor de boxe e fundador da equipa Art Suave Lapelas." Fernando é um competidor ativo com múltiplas conquistas nacionais e internacionais.',
    images: [
      NoImage,
      NoImage,
      NoImage,
      NoImage
    ],
    accomplishments: [
      'Faixa preta 1º grau (3 anos como faixa preta)',
      '7 anos como professor de Jiu-Jitsu',
      'Professor de boxe certificado',
      'Fundador da equipa Art Suave Lapelas',
      'Campeão português como faixa preta',
      'Campeão open nacional',
      'Tetra campeão Grand Slam Portugal',
      'Campeão Absoluto no Grand Slam Portugal',
      'Campeão AGP no-gi',
      'Pai de campeã nacional juvenil'
    ]
  }
};

const CoachPage = () => {
  const { id } = useParams();
  const coach = coachesData[id];
  const navigate = useNavigate();

  const NavigateButton = () => (
    <button
      onClick={() => navigate('/')}
      className="inline-block px-6 py-3 border-2 border-nfk-red bg-transparent hover:bg-nfk-red transition-colors duration-300 font-bebas text-lg tracking-wider"
    >
      VOLTAR À PÁGINA INICIAL
    </button>
  );

  if (!coach) {
    return (
      <div className="min-h-screen bg-nfk-black text-nfk-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-4xl text-nfk-red mb-4">TREINADOR NÃO ENCONTRADO</h1>
          <p className="text-gray-400 mb-6">O treinador que procura não existe ou foi removido.</p>
          {/* use react-router navigate to avoid full page reload */}
          <NavigateButton />
        </div>
      </div>
    );
  }

  return <CoachDetails coach={coach} />;
};

export default CoachPage;