import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import LandingComponent from '../Components/LandingComponent'
import BookAnAppointment from '../Components/Appointment/BookAnAppointment'
import Subscribe from '../Components/Subscribe/Subscribe'
import { aboutFounder } from '../constants'

const About = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={aboutFounder}/>
    <BookAnAppointment/>
    <Subscribe/>
    <FooterComponent/>
    </>
  )
}

export default About