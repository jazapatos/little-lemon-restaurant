import React from "react";
import lemonLogo2 from "../img/Asset 20@4x.png";
const Footer = () => {
   
  
  return ( 
  <>
    <img src={lemonLogo2} alt="Litte lemon logo" />
    <ul>
      <h4>Doormat Navigation</h4>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/order-online">Order Online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
    <ul>
      <h4>Contacts</h4>
      <li><a href="/home">Address</a></li>
      <li><a href="/about">Phone Number</a></li>
      <li><a href="/menu">Email</a></li>
     </ul>
     <ul>
      <h4>Social Media Links</h4>
      <li><a href="/home">Facebook</a></li>
      <li><a href="/about">Instagram</a></li>
      <li><a href="/menu">Medium</a></li>
    </ul>
    
  </>
  );
  };
export default Footer;