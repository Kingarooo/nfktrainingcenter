import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SportsProfile = ({ sport }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
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
          <span className="font-bebas text-lg">VOLTAR ÀS MODALIDADES</span>
        </button>

        <div className="text-center">
          <h1 className="font-bebas text-4xl md:text-6xl text-nfk-red mb-8">
            {sport?.toUpperCase() || 'MODALIDADE'}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Página em desenvolvimento. Em breve teremos informações detalhadas sobre esta modalidade.
          </p>
          <div className="bg-nfk-gray p-8 border border-gray-700 rounded-lg">
            <h2 className="font-bebas text-2xl text-white mb-4">
              INFORMAÇÕES EM BREVE
            </h2>
            <p className="text-gray-300">
              Esta página está sendo desenvolvida. Para mais informações sobre {sport}, 
              entre em contacto connosco através dos nossos canais de comunicação.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SportsProfile;
