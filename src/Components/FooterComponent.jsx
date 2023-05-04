import React from 'react'
import logo from '../assets/logo.png'
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import "./styles.css"
const FooterComponent = () => {
    return (
        <>
            <footer className='bg-[#000033] text-white '>
                <div className="  upper flex justify-between w-[90%] md:w-[80%] mx-auto items-center pt-5  md:py-12 ">
                    <div className='text-left -mt-12 -ms-10 lg:-ms-0'>
                        <img src={logo} alt="logo" />
                        <p className='-mt-20 ms-14 select-none'>10 Kelvin Street Uyo Akwa<br />Ibam State</p>
                    </div>
                    <div className=' space-y-10 hidden md:block'>
                        <NavLink to={"/home"}>
                            <p className='cursor-pointer'>Home</p>
                        </NavLink>
                        <NavLink to={"/about"}>
                            <p className='cursor-pointer'>About</p>
                        </NavLink>
                        <NavLink to={"/signup"}>
                            <p className='cursor-pointer'>Sigh Up</p>
                        </NavLink>
                    </div>
                    <div className='space-y-10 hidden md:block'>
                        <NavLink to={"/service"}>
                            <p className='cursor-pointer'>Service</p>
                        </NavLink>
                        <NavLink to={"/contact"}>
                            <p className='cursor-pointer'>Contact</p>
                        </NavLink>
                        <NavLink to={"/privacy-policy"}>
                            <p className='cursor-pointer'>Privacy Policy</p>
                        </NavLink>
                    </div>
                    <div>
                        <p>Connect With Us</p>
                        <div className="icons flex space-x-7 pt-3">
                            <a href="https://twitter.com">
                                <FiTwitter className='cursor-pointer' />
                            </a>
                            <a href="https://instagram.com">
                                <FiInstagram className='cursor-pointer' />
                            </a>
                            <a href="https://facebook.com">
                                <FiFacebook className='cursor-pointer' />
                            </a>
                            <a href="https://linkedin.com">
                                <AiOutlineLinkedin className='cursor-pointer' />

                            </a>
                        </div>
                    </div>
                </div>
                <div className="lower text-center pt-4 pb-10">
                    <p className='text-[14px] select-none'>@ jo-jean Imon-ita. All right reserved. Designed by AMANi Art</p>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent