import React, { useState } from 'react';
import Button from './Button';
import AboutMeContent from './AboutMeContent';

// Componentes de contenido


const ProjectsContent = () => <div>Contenido 3</div>;
const TeamworkVideosContent = () => <div>Contenido 4</div>;
const NewsBlogContent = () => <div>Contenido 5</div>;

const ButtonsBar = () => {
  const [selectedButton, setSelectedButton] = useState('About me');
  const [currentContent, setCurrentContent] = useState('AboutMeContent');

  const handleButtonClick = (newContent, buttonLabel) => {
    setSelectedButton(buttonLabel);
    setCurrentContent(newContent);
  };

  let contentComponent;
  switch (currentContent) {
    case 'AboutMeContent':
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
      <div className='inline-flex justify-center mb-[3%] ml-[12%]'>

        <div className="ml-[1%] ">
          <Button
            label="About me"
            onClick={() => handleButtonClick('AboutMeContent', 'About me')}
            isSelected={selectedButton === 'About me'}
          />
        </div>
        <div className="ml-[1%]">
          <Button
            label="My projects"
            onClick={() => handleButtonClick('Contenido 3', 'Projects')}
            isSelected={selectedButton === 'Projects'}
          />
        </div>
        <div className="ml-[1%]">
          <Button
            label="Teamwork videos"
            onClick={() => handleButtonClick('Contenido 4', 'Teamwork videos')}
            isSelected={selectedButton === 'Teamwork videos'}
          />
        </div>
        <div className="ml-[1%]">
          <Button
            label="News & blog"
            onClick={() => handleButtonClick('Contenido 5', 'News & blog')}
            isSelected={selectedButton === 'News & blog'}
          />
        </div>
          
      </div>
      {contentComponent}
    </div>
  );
};

export default ButtonsBar;
