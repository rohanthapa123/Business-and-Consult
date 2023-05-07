import React from 'react'
import fetti from '../assets/fetti.png'
import { NavLink } from 'react-router-dom'
const Subscribed = () => {
  return (
    <div className='  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
      <div className='text-center space-y-6 px-10 py-4 flex flex-col items-center '>

        <div className='flex '>
            <img src={fetti} alt="fetti"  width="15%" />
            <h1 className=' text-2xl md:text-6xl px-2 pt-2 font-extrabold md:font-bold'>CONGRATULATIONS!!!</h1>
            <img src={fetti} width="15%" alt="fetti" />
        </div>
        <p>You have successfully subscribed for the newsletter “How to understand your spouse better towards a blissful<br/> union” by Jo-Jean Imoh-Ita</p>
        <p className='font-bold '>You will receive and email within 24 hours with the link to access the newsletter.</p>
        <p className='pb-3' >The newsletter will keep you updated daily. Looking forward to having you</p>
        <p>Thank You!</p>
        <NavLink to={"/home"} className=' border border-[#029837] bg-[#029837] rounded-xl text-white  px-3 py-2 w-fit'>Go Back Home</NavLink>
      </div>
    </div>
  )
}

export default Subscribed