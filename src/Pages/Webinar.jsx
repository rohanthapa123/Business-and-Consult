import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import LandingComponent from '../Components/LandingComponent'
import { webinar } from '../constants'

const Webinar = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={webinar} />
    <FooterComponent/>
    </>
  )
}

export default Webinar