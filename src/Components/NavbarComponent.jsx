import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavbarComponent = (props) => {
    const [active,setActive] = useState(false);
    let list = ["Home","About","Service","Pricing","Webinar"]
    const change = () =>{
        setActive(!active)
    }
  return (
    <>
    <nav className=' flex justify-between md:px-10  lg:px-20 lg:-mt-2  md:-mt-4 text-[14px] ease-in-out duration-300'>
        <div className='h-[10vh] lg:h-[15vh] md:h-[15vh] negative-margin '>
            <NavLink to={"/home"}>
                <img src={logo} alt="Logo" /></NavLink>
        </div>
        <div className='md:hidden p-5 items-center cursor-pointer z-10' onClick={change}>
            {active ? <FontAwesomeIcon icon={faXmark} size='2xl'/> : <FontAwesomeIcon icon={faBars}size='2xl'/>}
        </div>
            
                

        <div className={`hidden md:flex items-center`}>
            <ul className='flex text-[#000033] p-2 lg:pe-10 md:pe-6 '>
                {list.map((item ,index) =>(
                    <NavLink key={index} className={`lg:px-4 md:px-2  cursor-pointer hover:text-[#029837]  ${props.active == item.toLowerCase() ? "underline underline-offset-4 decoration-2" : ""} ` } to={`/${item.toLowerCase()}`} >{item}</NavLink>
                    ))}
                
            </ul>
            <NavLink className={`border rounded-xl md:px-2 lg:px-5 py-2 border-[#029837]  ${props.active == 'contact' ? " bg-[#029837] text-white " : "text-[#029837]  bg-white"}`} to={"/contact"}>Contact Us</NavLink>
        </div>
    </nav>

    {/* for mobile navlist */}
    {active ? <div className={` items-center absolute backdrop-blur-sm  bg-[#189a468b] w-full h-[90vh] text-center text-xl  `}>
    <ul className='flex flex-col text-white font-bold py-20 '>
    {list.map((item ,index) =>(
        <NavLink key={index} className={` cursor-pointer py-5 ${props.active == item.toLowerCase() ? "underline underline-offset-4 decoration-2" : ""} ` } to={`/${item.toLowerCase()}`} >{item}</NavLink>
        ))}
    
    </ul>
    <NavLink className={`border rounded-xl py-2 border-[#029837]  ${props.active == 'contact' ? " bg-[#029837] text-white " : "text-[#029837]  bg-["}`} to={"/contact"}>Contact Us</NavLink>
    </div> : ""}
    </>
  )
}

export default NavbarComponent