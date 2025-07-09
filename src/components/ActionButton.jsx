import React from 'react';

const ActionButton = ({ onClick, children, active }) => {
  return (
    <div
      className={`inline-block px-8 py-3 border-2 border-nfk-red bg-transparent transition-all duration-300 cursor-pointer font-bebas text-lg tracking-wider 
        ${active ? 'bg-nfk-red text-white animate-glow' : 'hover:bg-nfk-red hover:animate-glow'}
        hover:text-white`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ActionButton;
