import React from 'react';
import '../App.css';
import './style/navbar.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
    <header>
       <div className="navbar">
          <NavLink to="/">Galvenā Lapa</NavLink>
          <NavLink to="/fideris">Fīderis</NavLink>
          <NavLink to="/spiningosana">Spiningošana</NavLink>
          <NavLink to="/gruntsmakskeresana">Gruntsmakšķerēšana</NavLink>
          <NavLink to="/pludinmakskeresana">Pludiņmakšķerēšana</NavLink>
       </div>
    </header>
    );
}
 
export default Navigation;