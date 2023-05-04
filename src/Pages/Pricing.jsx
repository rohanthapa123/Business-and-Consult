import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import LandingComponent from '../Components/LandingComponent'
import { price } from '../constants'

const Pricing = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={price.one} />
    <LandingComponent data={price.two} />
    
    <FooterComponent/>
    </>
  )
}

export default Pricing