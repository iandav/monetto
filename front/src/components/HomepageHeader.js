import React from "react";
import snapshot from "../images/snapshot-example.png"
// Styles
import "../styles/HomepageSection1.css"
// Components


function HomepageSection1() {
    return (
        <header className="section1">
            
            <div className="section1-description">
                <h1>Monetto Personal Finance</h1>
                <p>An open-source application to manage better your money. <br/> Learn more at monetto.com</p>
                <button>Get Started</button>
            </div>

            <img src={snapshot} alt="Snapshot of the Monetto application" />

        </header>
    );
}

export default HomepageSection1;