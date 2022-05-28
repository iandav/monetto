import React from 'react'
import "./Home.css"
import { Navbar } from '../../components/'
import { HomepageHeader } from '../../components/'
import { InfoCards } from '../../components/'

const Home = () => (
  <>
    <Navbar />
    <HomepageHeader />
    <InfoCards />
  </>
)

export default Home
