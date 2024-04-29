import React from "react";
import Nav from "./Nav";
import lemonLogo from "../img/Logo.svg";
const Header = () => {
   
  
    return (
        <>
        <img src={lemonLogo} alt="Litte lemon logo" />
        <Nav />
        </>
    );
  };
export default Header;