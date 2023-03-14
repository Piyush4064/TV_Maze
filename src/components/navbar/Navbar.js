import React from 'react';
import { Button } from '../../atom';
import './navbar.css';
import navbarRoutes from './navbar.routes';


function Navbar() {

  return (
    <div className='navbar'>
        {navbarRoutes.map((nav) => (
          <Button key={nav.name} type="navbarbtn">{nav.name}</Button> 
        ))}
    </div>
  )
}

export default Navbar;