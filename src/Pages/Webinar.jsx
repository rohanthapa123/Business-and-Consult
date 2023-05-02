import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

const Webinar = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <div>Webinar</div>
    </>
  )
}

export default Webinar