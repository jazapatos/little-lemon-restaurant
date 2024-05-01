import React from "react";
import heroImage from "../img/restauranfood.jpg"
const CallToAction = () => {
   
  
  return (
    <>
    <div className="heroCover"></div>
    <div className="heroContainer">
    <section className="hero">
      <div className="heroText">
        <h1 className="markazi">Little Lemon</h1>
        <h2 className="markazi">Chicago</h2>
        <p className="karla">
        We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className="button heroButton">Reserve a Table</button>
        </div>
        
        <img className="heroImage" src={heroImage} alt="Little Lemon food" />
    </section>
    </div>
    </>
    );
  };
export default CallToAction;