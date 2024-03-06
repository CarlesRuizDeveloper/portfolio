import React from 'react';
import LogosBar from './LogosBar';
import Navbar from './Navbar';

function Header() {
  return (
    <header className='bg-orange-200  items-center'>
        <LogosBar />
        <Navbar />
      
    </header>
  )
}

export default Header
