import React from 'react';
import { Button } from '../../atom';
import './navbar.css';
import navbarRoutes from './navbar.routes';
import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();

  const onNavClick = (link) => {
    navigate(link);
  }


  return (
    <div className='navbar'>
        {navbarRoutes.map((nav) => (
          <Button key={nav.name} type="navbarbtn" onClick={() => onNavClick(nav.link)}>{nav.name}</Button> 
        ))}
    </div>
  )
}

export default Navbar;