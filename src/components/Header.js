import React from "react";
import Nav from "./Nav";
import lemonLogo from "../img/Logo.svg";
const Header = () => {
   
  
    return (
        <div className="headerContainer">
        <div className="header">
            <img height="50px" className="logo" src={lemonLogo} alt="Litte lemon logo" />
            <Nav />
        </div>
        </div>
    );
  };
export default Header;