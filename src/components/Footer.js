import React from "react";
import lemonLogo2 from "../img/Asset 20@4x.png";
const Footer = () => {
   
  
  return ( 
    <>
    <div className="footerCover"></div>
  <div className="footer karla">
    <div className="footercolumn">
    <img height="100px" src={lemonLogo2} alt="Litte lemon logo" />
    </div>
    <div className="footerlinks">
    <div className="footercolumn">
    <h4>Navigation</h4>
    <ul className="ul">
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/order-online">Order Online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
    </div>
    <div className="footercolumn">
    <h4>Contacts</h4>
    <ul className="ul">
      <li>12112 S Front Ave<br />
          Chicago, Illinois(IL),<br /> 60628</li>
      <li>+(773) 264-2342</li>
      <li><a href="/menu">contact@littlelemon.com</a></li>
     </ul>
    </div>
    <div className="footercolumn">
    <h4>Social Media</h4>
    <ul className="ul">
      <li><a href="/home">Facebook</a></li>
      <li><a href="/about">Instagram</a></li>
      <li><a href="/menu">Medium</a></li>
    </ul>
    </div>
    </div>
  </div>
  </>
  );
  };
export default Footer;