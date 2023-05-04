import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import ContactForm from '../Components/ContactFormComponent/ContactForm'
import SessionUnderForm from '../Components/ContactFormComponent/SessionUnderForm'

const Contact = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <ContactForm/>
    <SessionUnderForm/>
    <FooterComponent/>
    </>
  )
}

export default Contact