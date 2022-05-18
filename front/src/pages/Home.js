import React from 'react'
import "../styles/page-styles/Home.css"
import Navbar from '../components/Navbar'
import HomepageHeader from '../components/HomepageHeader'
import InfoCards from '../components/InfoCards'

const Home = () => (
  <>
    <Navbar />
    <HomepageHeader />
    <InfoCards />
  </>
)

export default Home
