import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
  <nav>
    <ul className="ul nav karla">
      <li><Link to="/little-lemon-restaurant">Home</Link></li>
      <li><a href="#about" onClick={() => handleNavigate('/little-lemon-restaurant#about')}>About</a></li>
      <li><a href="#menu" onClick={() => handleNavigate('/little-lemon-restaurant#menu')}>Menu</a></li>
      <li><Link to="/booking">Reservations</Link></li>
      <li><Link to="/little-lemon-restaurant">Order Online</Link></li>
      <li><Link to="/little-lemon-restaurant">Login</Link></li>
    </ul>
  </nav>
  );
  };
export default Nav;