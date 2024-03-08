import React, { useState } from 'react';
import Button from './Button';
import HomeContent from './HomeContent';

// Componentes de contenido

const AboutMeContent = () => <div>Contenido 2</div>;
const ProjectsContent = () => <div>Contenido 3</div>;
const TeamworkVideosContent = () => <div>Contenido 4</div>;
const NewsBlogContent = () => <div>Contenido 5</div>;

const ButtonsBar = () => {
  const [selectedButton, setSelectedButton] = useState('Home');
  const [currentContent, setCurrentContent] = useState('Contenido 1');

  const handleButtonClick = (newContent, buttonLabel) => {
    setSelectedButton(buttonLabel);
    setCurrentContent(newContent);
  };

  // Renderizar el contenido según el estado actual
  let contentComponent;
  switch (currentContent) {
    case 'Contenido 1':
      contentComponent = <HomeContent />;
      break;
    case 'Contenido 2':
      contentComponent = <AboutMeContent />;
      break;
    case 'Contenido 3':
      contentComponent = <ProjectsContent />;
      break;
    case 'Contenido 4':
      contentComponent = <TeamworkVideosContent />;
      break;
    case 'Contenido 5':
        contentComponent = <NewsBlogContent />;
        break;  
    
    default:
      contentComponent = null;
  }

  return (
    <div>
      <div className='mb-[3%]'>
        <Button
          label="Home"
          onClick={() => handleButtonClick('Contenido 1', 'Home')}
          isSelected={selectedButton === 'Home'}
        />
        <Button
          label="About me"
          onClick={() => handleButtonClick('Contenido 2', 'About me')}
          isSelected={selectedButton === 'About me'}
        />
                <Button
          label="Projects"
          onClick={() => handleButtonClick('Contenido 3', 'Projects')}
          isSelected={selectedButton === 'Projects'}
        />
                <Button
          label="Teamwork videos"
          onClick={() => handleButtonClick('Contenido 4', 'Teamwork videos')}
          isSelected={selectedButton === 'Teamwork videos'}
        />
                <Button
          label="News & blog"
          onClick={() => handleButtonClick('Contenido 5', 'News & blog')}
          isSelected={selectedButton === 'News & blog'}
        />

          
      </div>
      {contentComponent}
    </div>
  );
};

export default ButtonsBar;
