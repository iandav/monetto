import React from "react"
import { AiOutlineAreaChart } from "react-icons/ai"
import { GiWallet } from "react-icons/gi"
import { FaCode } from "react-icons/fa"
// Styles
import "./HomepageInfo.css"

function HomepageInfo() {
  return (
    <section className="landing-page-info-container">

      <hr className="divider" />

      <div className="landing-page-info-snapshot-container">
        <div className="landing-page-info-image">
          <div className="future-snapshot">...</div>
        </div>
      </div>

      <section className="landing-page-info-cards-container">

        <div className="landing-page-info-card">
          <AiOutlineAreaChart className="infoCardIcon" />
          <p className="infoCardTitle">Dynamic Charts</p>
          <p className="infoCardDescription">
            Add incomes & expenses to analyze them periodically in charts.
          </p>
        </div>

        <div className="landing-page-info-card">
          <GiWallet className="infoCardIcon" />
          <p className="infoCardTitle">Accounts with a specific currency</p>
          <p className="infoCardDescription">
            Create multiple accounts with a specific currency.
          </p>
        </div>

        <div className="landing-page-info-card">
          <FaCode className="infoCardIcon" />
          <p className="infoCardTitle">Investments</p>
          <p className="infoCardDescription">
            Predict investments with your JS scripts to view the results
            graphically.
          </p>
        </div>
      </section>

      <hr className="divider" />
    </section>
  )
}

export default HomepageInfo
