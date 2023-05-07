import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import LandingComponent from '../Components/LandingComponent'
import { webinar, webinarTestimonial, timeSession, reasonToJoinWebinar } from '../constants'
import Testimonial from '../Components/Testimonial/Testimonial'
import BookAnAppointment from '../Components/Appointment/BookAnAppointment'
import TimeSession from "../Components/TimeSession/TimeSession"
import HeroSession3 from '../Components/HeroSession3/HeroSession3'

const Webinar = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <LandingComponent data={webinar} />
    <HeroSession3 data={reasonToJoinWebinar} theme={"dark"} col={"2"} />
    <TimeSession data={timeSession} />
    <Testimonial title={webinarTestimonial.title} data={webinarTestimonial.cardDetail}/>
    <BookAnAppointment isWebinar={true} theme={"light"}/>
    <FooterComponent/>
    </>
  )
}

export default Webinar