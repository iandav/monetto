import React from "react"
import "./HomepageHeader.css"
import Button from "../Button/Button"
import snapshot from "../../images/snapshot-example.png"

function HomepageHeader() {
  return (
    <header className="header-container">
      <div className="headerDescription">
        <h1>Monetto Personal Finance</h1>
        <p>A modern open-source solution to better manage your finances.</p>
        <p>Learn more at monetto.com</p>
        <Button
          target="/login"
          text="Get Started"
          color="primary"
          name="headerButton"
        />
      </div>

      <img
        src={snapshot}
        alt="Snapshot of the Monetto application"
        className="headerSnapshot"
      />
    </header>
  )
}

export default HomepageHeader
