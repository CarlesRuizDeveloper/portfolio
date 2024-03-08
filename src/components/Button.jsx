// Button.jsx
import React from 'react';

const Button = ({ label, onClick, isSelected }) => {
  return (
    <button
      className={`w-[15%]  ml-[4%] rounded-lg px-1 py-2  ${isSelected ? 'bg-orange-500 text-black' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
