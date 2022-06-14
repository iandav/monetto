import React from "react";
// Styles
import "./HomepageTestimony.css"
// Testimony image
import testimony from "../../images/testimony.jpg"
import star from "../../images/star.svg"

function HomepageTestimony() {
    return(
        <section className="home-testimony-container">
            <div className="home-testimony-box">
                <p className="home-testimony-text">
                &quot;Monetto is a great application! All of my monthly income and expenses
                are there and I don&apos;t need to worry because it&apos;s all in one place! Thanks!&quot;
                </p>
                <div className="home-testimony-profile-container">
                    <img src={testimony} alt="Profile of the testimony" className="home-testimony-profile" />
                    <div className="home-testimony-profile-information">
                    <p className="home-testimony-profile-name">Chad Khalimov</p>
                    <img src={star} alt="Rating star" className="home-testimony-rating" />
                    <img src={star} alt="Rating star" className="home-testimony-rating" />
                    <img src={star} alt="Rating star" className="home-testimony-rating" />
                    <img src={star} alt="Rating star" className="home-testimony-rating" />
                    <img src={star} alt="Rating star" className="home-testimony-rating" />
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
}

export default HomepageTestimony;