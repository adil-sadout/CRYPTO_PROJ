import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';


function NavWrapper() {
  return (
    <div className='bg-black py-3 navbarheight'>
        <div className='container d-flex justify-content-center justify-content-md-between align-items-center'>
            <Logo/>
            <Navbar/>
        </div>
        
    </div>
  )
}

export default NavWrapper