import React from "react"
import { AiOutlineAreaChart } from "react-icons/ai"
import { GiWallet } from "react-icons/gi"
import { FaCode } from "react-icons/fa"
// Styles
import "./HomepageInfo.css"
// Icons
import chart from "../../images/chart.svg"
import wallet from "../../images/wallet.svg"
import coin from "../../images/coin.svg"
// Snapshot
import snapshot from "../../images/monetto-snapshot.png"


function HomepageInfo() {
  return (
    <section className="home-info-container">

      <div className="home-info-snapshot-container">
        <div className="home-info-snapshot-background">
          <img src={snapshot} alt="Monetto snapshot" className="home-info-snapshot" />
        </div>
      </div>

      <div className="home-info-cards-container">
        <div className="home-info-card">
          <img src={chart} alt="A chart" className="home-info-card-icon" />
          <p className="home-info-card-title">Dynamic Charts</p>
          <p className="home-info-card-description">
            Add incomes & expenses to analyze them periodically in charts.
          </p>
        </div>

        <div className="home-info-card">
          <img src={wallet} alt="A wallet" className="home-info-card-icon" />
          <p className="home-info-card-title">Multi-Wallets</p>
          <p className="home-info-card-description">
            Create multiple wallets separately with a specific currency.
          </p>
        </div>

        <div className="home-info-card">
          <img src={coin} alt="A coin" className="home-info-card-icon" />
          <p className="home-info-card-title">Investments</p>
          <p className="home-info-card-description">
            Predict investments with your JS scripts to view the results
            graphically.
          </p>
        </div>
      </div>

    </section>
  )
}

export default HomepageInfo
