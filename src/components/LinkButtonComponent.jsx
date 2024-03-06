// LinkButtonComponent.jsx

import React from 'react';

const LinkButton = ({ text, backgroundColor, textColor, link }) => {
  return (
    <a className='rounded-xl' href={link} style={{ backgroundColor, padding: '10px', color: textColor }}>
      {text}
    </a>
  );
};

export default LinkButton;
