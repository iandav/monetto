import React from "react"
import { HomepageInfo, Navbar, HomepageHeader, HomepageTestimony, HomepageFooter } from "../../components"
// Styles
import "./Home.css"

function Home() {
  return (
    <div className="landing-page-container">
      <Navbar />
      <HomepageHeader />
      <HomepageInfo />
      <HomepageTestimony />
      <HomepageFooter />
    </div>
  )
}

export default Home;
