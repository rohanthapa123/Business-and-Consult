import React from 'react'
import { NavLink } from 'react-router-dom'

const BookAnAppointment = ({isWebinar ,theme}) => {
  return (
    
    <>
    <div className={`${theme == "light" ? "bg-white ": "bg-[#F7FFF6]" } text-center text-[#000033] space-y-24 py-32`}>
    <h1 className='text-2xl md:text-4xl font-bold'>Are you ready to transform your Marriage and<br/> Relatioship Book a session with us</h1>
    <p>
    <NavLink to={"/thanks"} className={`${isWebinar ? "bg-white text-[#029837]" : " text-white  bg-[#029837]" } border-[#029837] border rounded-2xl p-2`}>Make an Appointment</NavLink>
    </p>
    
    </div>
    
    </>
  )
}

export default BookAnAppointment