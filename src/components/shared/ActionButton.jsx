import React from 'react';

const ActionButton = ({ onClick, children, active }) => {
  return (
    <div
      className={`inline-block px-8 py-3 border-2 border-nfk-red bg-transparent transition-all duration-300 cursor-pointer font-bebas text-lg tracking-wider 
        ${active 
          ? 'bg-nfk-red/20 text-nfk-red border-nfk-red shadow-lg shadow-nfk-red/30 animate-glow' 
          : 'hover:bg-nfk-red hover:text-white hover:shadow-lg hover:shadow-nfk-red/30 hover:animate-glow'
        }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ActionButton;
