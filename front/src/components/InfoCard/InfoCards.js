import React from "react"
// Styles
import "./InfoCards.css"
// Components
import { AiOutlineAreaChart } from "react-icons/ai"
import { GiWallet } from "react-icons/gi"
import { FaCode } from "react-icons/fa"

function InfoCards() {
  return (
    <>
      <hr className="divider" />

      <section className="infoCardsContainer">
        <div className="infoCard">
          <AiOutlineAreaChart className="infoCardIcon" />

          <p className="infoCardTitle">Customizable Charts</p>

          <p className="infoCardDescription">
            Add incomes & expenses to track them periodically in a simple chart.
          </p>
        </div>

        <div className="infoCard">
          <GiWallet className="infoCardIcon" />

          <p className="infoCardTitle">Accounts with a specific currency</p>

          <p className="infoCardDescription">
            Create multiple accounts with a specific currency.
          </p>
        </div>

        <div className="infoCard">
          <FaCode className="infoCardIcon" />

          <p className="infoCardTitle">Investments</p>

          <p className="infoCardDescription">
            Predict investments with your JS scripts to view the results
            graphically.
          </p>
        </div>
      </section>

      <hr className="divider" />
    </>
  )
}

export default InfoCards
