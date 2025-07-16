import React, { useState } from 'react';
import { ArrowLeft, Award, Star, Target, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Modal icon components based on modality
const ModalityIcon = ({ modality, className }) => {
  const iconMap = {
    boxing: '🥊',
    kickboxing: '🥊',
    muaythai: '🥊',
    bjj: '🥋',
    karate: '🥋',
    yoga: '🧘',
    fitness: '💪'
  };
  
  return (
    <span className={`text-6xl opacity-10 ${className}`}>
      {iconMap[modality] || '🥊'}
    </span>
  );
};

const CoachDetail = ({ coach }) => {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(coach?.images?.[0] || '');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Function to get custom positioning for specific images
  const getImagePosition = (imageSrc, isMainImage = false) => {
    const imageName = imageSrc.split('/').pop();
    
    // Images that need more upward positioning to show faces better
    const needsExtraPositioning = [
      'Filipe_pfp.jpg',
      'Filipe_thumbnail_03.jpg',
      'Rafael_pfp.jpg',
      'Andressa_pfp.jpg',
      'Rafael_thumbnail_01.jpg',
      'Rafael_thumbnail_03.jpg',
    ];
    
    const needsOpositePositioning = [
      'Filipe_thumbnail_01.jpg',
      'Filipe_thumbnail_02.jpg',
      'Filipe_thumbnail_05.jpg',
    ];
    if (needsExtraPositioning.includes(imageName)) {
      return isMainImage ? 'center -100px' : 'center -30px';
    }
    if (needsOpositePositioning.includes(imageName)) {
      return isMainImage ? 'center -200px' : 'center -40px';
    }
    // Default positioning
    return isMainImage ? 'center -150px' : 'center -40px';
  };

  // Default coach data for demonstration
  const defaultCoach = {
    id: 'filipe-albergaria',
    name: 'Filipe Albergaria',
    modality: 'kickboxing',
    bio: 'Head Coach do NFK Training Center com mais de 15 anos de experiência em desportos de combate. Especialista em kickboxing, boxe e preparação física, Filipe tem dedicado a sua carreira a formar campeões e a inspirar atletas de todos os níveis.',
    images: [
      'https://images.pexels.com/photos/4761670/pexels-photo-4761670.jpg',
      'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpg',
      'https://images.pexels.com/photos/4761654/pexels-photo-4761654.jpg',
      'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jgg'
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
  };

  const coachData = coach || defaultCoach;

  const handleImageChange = (image, index) => {
    setMainImage(image);
    setSelectedImageIndex(index);
  };

  const handleBackClick = () => {
    navigate('/#coaches');
  };

  return (
    <main className="min-h-screen bg-nfk-black text-nfk-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center space-x-2 text-gray-400 hover:text-nfk-red transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-bebas text-lg">VOLTAR AOS TREINADORES</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images Section */}
          <section className="space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden bg-nfk-gray border border-gray-700 hover:border-nfk-red transition-colors duration-300">
              <img
                src={mainImage}
                alt={`${coachData.name} - Foto principal`}
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: getImagePosition(mainImage, true) }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nfk-black via-transparent to-transparent opacity-30"></div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {coachData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(image, index)}
                  className={`relative overflow-hidden bg-nfk-gray border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImageIndex === index
                      ? 'border-nfk-red shadow-lg shadow-nfk-red/20'
                      : 'border-gray-700 hover:border-nfk-red/50'
                  }`}
                  aria-label={`Ver foto ${index + 1} de ${coachData.name}`}
                >
                  <img
                    src={image}
                    alt={`${coachData.name} - Foto ${index + 1}`}
                    className="w-full h-20 md:h-24 object-cover"
                    style={{ objectPosition: getImagePosition(image, false) }}
                  />
                  {selectedImageIndex === index && (
                    <div className="absolute inset-0 bg-nfk-red bg-opacity-20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-nfk-red rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Text Content Section */}
          <section className="space-y-8">
            {/* Name and Modality Icon */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 z-0">
                <ModalityIcon modality={coachData.modality} className="select-none" />
              </div>
              <h1 className="font-bebas text-4xl md:text-6xl text-nfk-red relative z-10 leading-tight">
                {coachData.name}
              </h1>
              <div className="flex items-center mt-2">
                <Target className="w-5 h-5 text-nfk-red mr-2" />
                <span className="font-bebas text-xl text-gray-300 uppercase tracking-wider">
                  {coachData.modality.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-nfk-gray p-6 border-l-4 border-nfk-red">
              <p className="text-gray-300 text-lg leading-relaxed">
                {coachData.bio}
              </p>
            </div>

            {/* Accomplishments */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-nfk-red mr-3" />
                <h2 className="font-bebas text-2xl md:text-3xl text-white">
                  CONQUISTAS E EXPERIÊNCIA
                </h2>
              </div>
              
              <ul className="space-y-3">
                {coachData.accomplishments.map((accomplishment, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 group hover:bg-nfk-gray hover:bg-opacity-30 p-3 rounded transition-colors duration-300"
                  >
                    <Star className="w-5 h-5 text-nfk-red mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 leading-relaxed">
                      {accomplishment}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instagram Button */}
            {coachData.instagram && (
              <div className="flex justify-center">
                <a
                  href={`https://instagram.com/${coachData.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-nfk-red to-red-600 hover:from-red-600 hover:to-nfk-red text-white px-6 py-3 rounded-lg font-bebas text-lg tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nfk-red/50"
                >
                  <Instagram className="w-6 h-6" />
                  <span>SEGUIR NO INSTAGRAM</span>
                </a>
              </div>
            )}

            {/* Contact CTA */}
            <div className="bg-nfk-dark p-6 border border-gray-700 hover:border-nfk-red transition-colors duration-300">
              <h3 className="font-bebas text-xl mb-3 text-white">
                TREINAR COM {coachData.name.split(' ')[0].toUpperCase()}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Interessado em treinar com este coach? Entre em contacto connosco para agendar a sua aula experimental gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+351916452684"
                  className="inline-block px-6 py-3 bg-nfk-red hover:bg-red-700 transition-colors duration-300 text-center font-bebas text-lg tracking-wider"
                >
                  LIGAR AGORA
                </a>
                <a
                  href="mailto:fluvial.kickboxing@gmail.com"
                  className="inline-block px-6 py-3 border-2 border-nfk-red bg-transparent hover:bg-nfk-red transition-colors duration-300 text-center font-bebas text-lg tracking-wider"
                >
                  ENVIAR EMAIL
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CoachDetail;