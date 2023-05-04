import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import Subscribe from '../Components/Subscribe/Subscribe'
import LandingComponent from '../Components/LandingComponent'
import { homeData } from '../constants'
const Home = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={homeData} />
    <Subscribe/>
    <FooterComponent/>
    </>
  )
}

export default Home