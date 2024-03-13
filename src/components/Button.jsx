// Button.jsx
import React from 'react';

const Button = ({ label, onClick, isSelected }) => {
  return (
<div className="w-full sm:w-auto sm:ml-[10%]">
  <button
    style={{ width: '80%', height: '20%' }}
    className={`font-bold text-[75%] rounded-lg px-1 py-1 items-center justify-center ${isSelected ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none`}
    onClick={onClick}
  >
    <span className="flex-shrink-0">{label}</span>
  </button>
</div>






  );
};

export default Button;
