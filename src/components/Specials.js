import React from "react";
import cardImage1 from "../img/greek salad.jpg"
import cardImage2 from "../img/bruchetta.jpg"
import cardImage3 from "../img/lemon dessert.jpg"
const Specials = () => {

  return (
    <>
        <div id="menu" className="specialsContainer">
        
                <section className="specials">
            <div className="specialsHeader">
                <h2 className="markazi">This week's specials!</h2>
                <button className="button specialsButton">Online Menu</button>
            </div>
            <div className="specialsCards">
                <div class="card one">
                    <img className="cardImage" src={cardImage1} alt="greek salad" style={{ width: '100%' }}/>
                    <div class="cardContainer">
                        <h4 className="markazi cardTitle"><b>Greek Salad</b><span>$12.99</span></h4>
                        <p className="karla">The famous greek salad of crisp lettuce, peppers,
                            olives and our Chicago style feta cheese, garnished with crunchy
                            garlic and roseary croutons.</p>
                        <a href="#menu"><b>Order a delivery &rsaquo;</b></a>
                    </div>
                </div>
                <div class="card one">
                    <img className="cardImage" src={cardImage2} alt="Avatar" style={{ width: '100%' }}/>
                    <div class="cardContainer">
                        <h4 className="markazi"><b>Bruchetta</b><span>$5.99</span></h4>
                        <p className="karla">Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</p>
                        <a href="#menu"><b>Order a delivery &rsaquo;</b></a>
                    </div>
                </div>
                <div class="card one">
                    <img className="cardImage" src={cardImage3} alt="Avatar" style={{ width: '100%' }}/>
                    <div class="cardContainer">
                        <h4 className="markazi"><b>Lemon Cake</b><span>$5.00</span></h4>
                        <p className="karla">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a href="#menu"><b>Order a delivery &rsaquo;</b></a>
                        </div>
                        
                    
                </div>
            </div>
        </section>
    </div>
    </>
    );
  };
export default Specials;