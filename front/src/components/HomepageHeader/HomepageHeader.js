import React from "react"
import "./HomepageHeader.css"
import Button from "../Button/Button"
import snapshot from "../../images/snapshot-example.png"

function HomepageHeader() {
  return (
    <header className="home-header-container">

      <div className="home-header-info-container">
        <h1>Monetto Personal Finance</h1>
        <p>A modern open-source solution to better manage and analyze your financial data.
        Learn more at monetto.com</p>
        <Button
          target="/login"
          text="Get Started"
          styles="home-header-btn"
        />
      </div>

      <div className="home-header-snapshot-container">
        <img src={snapshot} alt="Snapshot of Monetto application" className="home-header-snapshot" />
      </div>
      
    </header>
  )
}

export default HomepageHeader
