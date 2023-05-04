import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import BookAnAppointment from '../Components/Appointment/BookAnAppointment'
import Subscribe from '../Components/Subscribe/Subscribe'
import Testimonials from '../Components/Testimonials/Testimonials'
import LandingComponent from '../Components/LandingComponent'
import { services } from '../constants'

const Services = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={services}/>
    <div>Services</div>
    <BookAnAppointment/>
    <Testimonials/>
    <Subscribe/>
    <FooterComponent/>
    </>
  )

}

export default Services
