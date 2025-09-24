import React from 'react';
import { Mail, Phone, X } from 'lucide-react';

const CallToActionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-nfk-black rounded-lg shadow-lg p-8 max-w-sm w-full relative border-2 border-nfk-red animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-nfk-red transition-colors"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="font-bebas text-2xl text-nfk-red mb-4 text-center">NÃO PERCA MAIS TEMPO!</h2>
        <p className="text-gray-300 text-center mb-6">Ligue já ou envie um email para agendar a sua aula experimental gratuita.</p>
        <div className="space-y-4">
          <a href="tel:+351916452684" className="flex items-center space-x-2 text-gray-200 hover:text-nfk-red transition-colors justify-center">
            <Phone className="w-5 h-5" />
            <span>(+351) 916 452 684</span>
          </a>
          <a href="mailto:fluvial.kickboxing@gmail.com" className="flex items-center space-x-2 text-gray-200 hover:text-nfk-red transition-colors justify-center">
            <Mail className="w-5 h-5" />
            <span>fluvial.kickboxing@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionModal;
