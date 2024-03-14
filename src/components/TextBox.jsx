import React from 'react';  

const TextboxContent = ({title, text}) => {
    return(
       <div className='bg-white rounded-2xl p-4 border-4 border-green-500 '>
            <h2 className='text-center font-bold text-[150%]'>{title}</h2>
            <p className='text-black' >{text}</p>
       </div> 
    )
}

export default TextboxContent;