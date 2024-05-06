import React from "react";
import brothers1 from "../img/Mario and Adrian b.jpg";
import restaurant from "../img/restaurant.jpg";
const About = () => {

  return (
  <>
    <section id="about" className="aboutContainer">
        <div className="about">
            <div className="aboutText">
                <h2 className="markazi">Little Lemon</h2>
                <h2 className="markazi">Chicago</h2>
                <p className="karla">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                <p className="karla">To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <div className="aboutImage">
                <img className="aboutImage1" src={restaurant} alt="brothers 1" />
                <img className="aboutImage2" src={brothers1} alt="brothers 2" />
            </div>
        </div>
    </section>
  </>
  );
  };
export default About;