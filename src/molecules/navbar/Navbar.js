import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atom';
import './navbar.css';
import navbarRoutes from './navbar.routes';


function Navbar() {
  const navigate = useNavigate();

  const onNavClick = (link) => {
    navigate(link);
  }
  return (
    <div className='navbar'>
        {navbarRoutes.map((nav) => (
          <Button key={nav.name} type="navbarbtn" onClick={() => navigate(nav.link)}>{nav.name}</Button> 
        ))}
    </div>
  )
}

export default Navbar;