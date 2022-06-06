import React from "react";

// Styles
import "./HomepageFooter.css"
// Monetto logo
import logo from "../../images/monetto-logo.png"

function HomepageFooter() {
    return(
        <footer className="home-footer-container">

            <hr className="home-footer-separator" />

            <p className="home-footer-title">Monetto</p>

            <img src={logo} alt="Monetto logo" className="home-footer-logo" />

            <div className="home-footer-links">
                <p className="home-footer-link">&copy; Monetto 2022</p>
                <p className="home-footer-link">Privacy Policy</p>
                <p className="home-footer-link">Cookies Policy</p>
                <p className="home-footer-link">Terms of Use</p>
            </div>
        </footer>
    );
}

export default HomepageFooter;