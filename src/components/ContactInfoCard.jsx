import React from 'react';
import ProfileImage from '@img/carlesruizmontejo.jpg';

const ContactInfoCard = () => {
  return (
<section>
  <div className="flex flex-col lg:flex-row">
    <div className="flex justify-center items-center bg-blue-800  lg:w-[40%]"> 
      <div className='mt-20  '>
          <div className='w-[30%] ml-[35%] mb-[-15%] overflow-visible ml-[15%]'>
          <img  src={ProfileImage} alt='Carles Ruiz Montejo photo' />
          </div>  

          <div class="w-[50%] ml-[25%] mt-0  mb-20 bg-white border border-gray-400 rounded-md">             
            <h1 className='text-center mt-[35%] '>Carles Ruiz Montejo</h1>
            <h2>efioern</h2>
            <h2>efioern</h2>
            <h2>efioern</h2>
            <h2>efioern</h2>
            <h2>efioern</h2>
            <h2>efioern</h2>
          </div>        
      </div>
    </div>

    <div className="bg-green-500 lg:w-[60%]">
      <h2>efioern</h2>
    </div>
  </div>
</section>

    
  );
};

export default ContactInfoCard;
