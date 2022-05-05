import React from 'react'
// Styles
import "../styles/page-styles/Home.css"
// Components
import { Navbar } from '../components'
import HomepageSection1 from '../components/HomepageSection1'


const Home = () => (
  <>
    <Navbar/>
    <HomepageSection1 />
  </>
)


export default Home