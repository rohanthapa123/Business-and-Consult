import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

const About = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <div>About</div>
    </>
  )
}

export default About