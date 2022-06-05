import React from "react"
import { HomepageInfo, Navbar } from "../../components"
import { HomepageHeader } from "../../components"
// Styles
import "./Home.css"

function Home() {
  return (
    <div className="landing-page-container">
      <Navbar />
      <HomepageHeader />
      <HomepageInfo />
    </div>
  )
}

export default Home;
