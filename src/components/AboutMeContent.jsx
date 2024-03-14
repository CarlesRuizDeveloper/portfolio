import React from 'react';
import TextboxContent from './TextBox';

const AboutMeContent = () => {
  return (
<div className='mb-[15%] ml-[4%] mr-[4%]'>
  <TextboxContent 
    title={"¡Hola! Soy Carles"}
    text={
      <>
        <p className='mt-[3%]'>Apasionado desarrollador con experiencia en front-end y back-end. Un historial probado en el desarrollo de aplicaciones y sitios web efectivos.</p>
        <p className='mt-[1%]'>Mi enfoque se centra en la usabilidad, la eficiencia y la escalabilidad. Creo en la importancia de comprender las necesidades del usuario y superar las expectativas del cliente.</p>
        <p className='mt-[1%]'>Además de mi experiencia técnica, valoro la colaboración y la comunicación efectiva. Estoy ansioso por seguir creciendo y evolucionando como desarrollador.</p>
        <p className='mt-[3%] text-center font-bold'>¡Gracias por visitar mi portafolio!</p>
      </>
    }
  />
</div>




  
  )
}

export default AboutMeContent