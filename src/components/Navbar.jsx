import React from 'react';
import burgerMenu from '@img/burguerMenu.svg';

const Navbar = () => {
  return (
    <>
      <ul className='bg-blue-400 hidden text-[18px] sm:text-[16px] sm:w-[430] sm:flex sm:place-content-around sm:items-center'>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Projects</a>
        </li>
        <li>
            <a href="#">About me</a>
        </li>
        <li>
            <a href="#">Teamwok</a>
        </li>
        <li>
            <a href="#">Blog</a>
        </li>
      </ul>
      <img className='w-10 cursor-pointer sm:hidden' src={burgerMenu} alt='Burger Menu' />
    </>
  );
};

export default Navbar;
