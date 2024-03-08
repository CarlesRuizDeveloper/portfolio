import React from 'react';
import ProfileImage from '@img/carlesruizmontejo.jpg';
import { FaLinkedin } from 'react-icons/fa';
import LinkButton from './LinkButtonComponent';
import { FaPhone } from 'react-icons/fa';


const ContactInfoCard = () => {
  return (
<section>
  
    <div className="flex justify-center items-center"> 
      <div className="bg-[url('../src/assets/img/backgroundProfile.jpg')] bg-cover bg-center ">
        <div className='mt-[5%] ml-[10%] '>
          <div className=' w-[20%] ml-[35%] mb-[-10%] md:ml-[35%] rounded-full overflow-visible'>
            <img className='rounded-full border-4 border-green-500 '  src={ProfileImage} alt='Carles Ruiz Montejo photo' />
          </div>  

          <div className="w-[50%] md:w-[50%] ml-[19.7%] mt-0 mb-20 p-[2%] border-4 border-green-500 bg-white rounded-xl bg-gradient-to-r from-purple-500 to-pink-300 shadow-md">             
            <h1 className='text-center mt-[15%] text-[125%] sm:text-[145%] md:text-[155%] font-bold'>Carles Ruiz Montejo</h1>
            <h2 className='text-[115%] sm:text-[120%] text-center'>Software developer</h2>
            <h2 className='mt-[10%]  text-center text-[90%] sm:text-[100%]'>carlesruizm@gmail.com</h2>

            <div className="flex justify-center items-center mt-[10%] mb-[15%]">
              <p className="text-green-500 text-[115%] sm:text-[158%]"><FaPhone /></p>
              <p className="ml-4 text-[100%] sm:text-[138%]">622 740 861</p>
            </div>

            <div className='flex justify-center items-center'>
              <span>
                <a className="bg-white text-blue-800 text-[150%] sm:text-[200%]" href="https://es.linkedin.com/in/carles-ruiz-montejo-developer?trk=profile-badge">
                  <FaLinkedin />   
                </a>
              </span>
            </div>

            <div className='mt-[15%] flex justify-center items-center '>
              <LinkButton
                text="View my CV"
                backgroundColor="green" 
                textColor="white" 
                link="https://www.example.com"
              />
            </div>
          </div>
        </div>        
      </div>
    </div>
</section>

    
  );
};

export default ContactInfoCard;
