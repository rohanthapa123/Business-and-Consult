import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

const Contact = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <div>Contact</div>
    </>
  )
}

export default Contact