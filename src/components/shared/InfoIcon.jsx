import React from 'react';

const InfoIcon = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4ZM8 6C7.44772 6 7 6.44772 7 7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V7C9 6.44772 8.55228 6 8 6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InfoIcon;
