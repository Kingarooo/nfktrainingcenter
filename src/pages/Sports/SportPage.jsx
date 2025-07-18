import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SportsGallery from './SportsGallery';

// Import sport images
import BoxeThumbnail from '../../assets/sport/boxe/boxe_thumbnail_01.jpg';
import KickboxingThumbnail01 from '../../assets/sport/kickboxing/kickboxing_thumbnail_01.jpg';
import KickboxingThumbnail02 from '../../assets/sport/kickboxing/kickboxing_thumbnail_02.jpg';
import MuaythaiThumbnail01 from '../../assets/sport/muaythai/muaythai_thumbnail_01.jpg';
import MuaythaiThumbnail02 from '../../assets/sport/muaythai/muaythai_thumbnail_02.jpg';
import MuaythaiThumbnail03 from '../../assets/sport/muaythai/muaythai_thumbnail_03.jpg';
import MuaythaiThumbnail04 from '../../assets/sport/muaythai/muaythai_thumbnail_04.jpg';
import MuaythaiThumbnail05 from '../../assets/sport/muaythai/muaythai_thumbnail_05.jpg';
import JiujitsuThumbnail from '../../assets/sport/jiujitsu/jiujitsu_thumbnail_01.jpg';
import KarateThumbnail from '../../assets/sport/karate/karate_thumbnail_01.jpg';

const sportImages = {
  boxe: [BoxeThumbnail],
  kickboxing: [KickboxingThumbnail01, KickboxingThumbnail02],
  muaythai: [
    MuaythaiThumbnail01, MuaythaiThumbnail02, MuaythaiThumbnail03, MuaythaiThumbnail04, MuaythaiThumbnail05,
    MuaythaiThumbnail01, MuaythaiThumbnail02, MuaythaiThumbnail03, MuaythaiThumbnail04, MuaythaiThumbnail05,
    MuaythaiThumbnail01, MuaythaiThumbnail02, MuaythaiThumbnail03, MuaythaiThumbnail04, MuaythaiThumbnail05
  ],
  'jiu jitsu': [JiujitsuThumbnail],
  karaté: [KarateThumbnail]
};

const sportNames = {
  boxe: 'BOXE',
  kickboxing: 'KICKBOXING',
  muaythai: 'MUAY THAI',
  'jiu jitsu': 'JIU JITSU',
  karaté: 'KARATÉ'
};

const SportPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const images = sportImages[name] || [];
    setCurrentImages(images);
  }, [name]);

  if (!currentImages.length) {
    return (
      <div className="min-h-screen bg-nfk-black text-nfk-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-4xl text-nfk-red mb-4">MODALIDADE NÃO ENCONTRADA</h1>
          <p className="text-gray-400 mb-6">A modalidade que procura não existe ou não tem fotos disponíveis.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-block px-6 py-3 border-2 border-nfk-red bg-transparent hover:bg-nfk-red transition-colors duration-300 font-bebas text-lg tracking-wider"
          >
            VOLTAR À PÁGINA INICIAL
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nfk-black text-nfk-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-nfk-black/95 backdrop-blur-sm border-b border-nfk-gray">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-400 hover:text-nfk-red transition-colors duration-300 mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-bebas text-lg">VOLTAR</span>
          </button>
          <h1 className="font-bebas text-4xl md:text-6xl text-nfk-red">
            {sportNames[name] || name?.toUpperCase()}
          </h1>
          <p className="text-2xl text-gray-400 mt-2">Galeria de fotos</p>
        </div>
      </div>

      <SportsGallery 
        images={currentImages} 
        sportName={sportNames[name] || name?.toUpperCase()} 
      />
    </div>
  );
};

export default SportPage;