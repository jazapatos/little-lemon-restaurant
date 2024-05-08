import React from "react";
import tPerson1 from "../img/tPerson1.jpg";
import tPerson2 from "../img/tPerson2.jpg";

const Testimonials = () => {

  return (
    <>
    <div className="testimonialsCover"></div>
        <div className="testimonialsContainer">
        <div className="testimonials">
            <div className="testimonialsHeader">
                <h2 className="markazi">Testimonials</h2>
            </div>
            <div className="testimonialsCards">
            <div className="tCard">
                    <div className="tContents">
                    <p>⭐⭐⭐⭐⭐</p>
                    <div className="imagename">
                    <img src={tPerson1} height="46pt" alt="avatar 1" />
                    <span className="karla"><b>George</b></span></div>
                    <p className="tReview karla">“The ambiance and exquisite flavors at this restaurant 
                        transported me to a culinary paradise I never wanted to leave!”
                        </p>
                    </div>
                </div>
                <div className="tCard">
                    <div className="tContents">
                    <p>⭐⭐⭐⭐</p>
                    <div className="imagename">
                    <img src="https://i.pravatar.cc/150?img=16" height="46pt" alt="avatar 1" />
                    <span className="karla"><b>Regina</b></span></div>
                    <p className="tReview karla">“Every dish is a masterpiece, blending innovation with tradition—it’s the highlight of my dining experiences!”
                        </p>
                    </div>
                </div>
                <div className="tCard">
                    <div className="tContents">
                    <p>⭐⭐⭐⭐</p>
                    <div className="imagename">
                    <img src="https://i.pravatar.cc/150?img=32" height="46pt" alt="avatar 1" />
                    <span className="karla"><b>Ingrid</b></span></div>
                    <p className="tReview karla">“From the warm welcome at the door to the last bite of dessert, dining here is an unforgettable journey of the senses.”
                        </p>
                    </div>
                </div>
                <div className="tCard">
                    <div className="tContents">
                    <p>⭐⭐⭐⭐⭐</p>
                    <div className="imagename">
                    <img src={tPerson2} height="46pt" alt="avatar 1" />
                    <span className="karla"><b>William</b></span></div>
                    <p className="tReview karla">“The attention to detail in every meal and the exceptional service make this restaurant a treasure in the heart of the city.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
  };
export default Testimonials;