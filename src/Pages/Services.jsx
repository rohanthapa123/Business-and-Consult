import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import BookAnAppointment from '../Components/Appointment/BookAnAppointment'
import Subscribe from '../Components/Subscribe/Subscribe'
import LandingComponent from '../Components/LandingComponent'
import { services, servicesTwo, serviceTestimonial } from '../constants'
import Testimonial from '../Components/Testimonial/Testimonial'

const Services = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={services}/>
    <LandingComponent data={servicesTwo} reverse={true}/>
    <BookAnAppointment theme={"light"}/>
    <Testimonial title={serviceTestimonial.title} data={serviceTestimonial.cardDetail}/>
    <Subscribe/>
    <FooterComponent/>
    </>
  )

}

export default Services
