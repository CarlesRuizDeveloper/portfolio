import React from "react";
import ProfileImage from '@img/carlesruizmontejo.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const PhoneContactInfoCard = () => {
    return (

<div className="bg-[url('../src/assets/img/phonebackgroundProfile.jpg')] bg-cover bg-center h-[15vh] flex items-center justify-center">
    <div className=" md:w-[15%]  z-10   rounded-full overflow-visible">
        <img
        className="rounded-full border-2 border-green-500 max-w-[80px] "
        src={ProfileImage}
        alt="Foto de Carles Ruiz Montejo"
        />
    </div>
    <div className="flex flex-row w-[68%] sm:w-[45%] p-[1%] z-1 ml-[-10%] sm:ml-[-5%] text-center border-2 border-green-500 bg-white rounded-xl bg-gradient-to-r from-purple-500 to-pink-300 shadow-md ">
        <div className="ml-[20%]">
            <h1 class="font-bold text-[80%] sm:text-[90%]">Carles Ruiz Montejo</h1>
            <h2 class="text-[75%]">Software developer</h2>  
            <h2 class="text-[75%]">carlesruizm@gmail.com</h2>
        </div>
        <div className="ml-[15%]">
        <br></br>
            <a className=" mt-[150%] bg-white text-blue-800 text-[150%] sm:text-[200%]" href="https://es.linkedin.com/in/carles-ruiz-montejo-developer?trk=profile-badge">
                <FaLinkedin />   
            </a>
        </div>
    </div>
</div>









    
    )
  }
  
  export default PhoneContactInfoCard