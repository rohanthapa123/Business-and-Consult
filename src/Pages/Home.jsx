import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

const Home = (props) => {
  return (
    <>
    <NavbarComponent active={props.active}/>
    <div>Home</div>
    </>
  )
}

export default Home