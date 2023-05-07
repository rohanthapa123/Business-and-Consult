import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactForm = () => {
  return (
    <>
    <div className='w-[70%] md:w-[50%] lg:w-[30%] m-auto text-center py-10'>

    <h1 className='text-[#000033] text-6xl font-bold select-none'>Contact Us</h1>
    <p className='text-[#000033]/95 pt-4 pb-14 select-none'>Our webinar is free, informative, and will provide you with the tools you need to take your relationship to the next level.</p>
    <form action="#" className="space-y-12">
          <div>
              
              <input type="email" id="email" className="shadow-sm bg-[#F2F1F1] border border-[#F2F1F1] text-[#6B7280] text-sm rounded-2xl focus:outline-[#F2F1F1] block w-full p-4 " placeholder="Your Full Name" required/>
          </div>
          <div>
              
              <input type="text" id="subject" className="block p-4 w-full text-sm text-[#6B7280] bg-[#F2F1F1] rounded-2xl border border-[#F2F1F1] focus:outline-[#F2F1F1] shadow-sm " placeholder="Your Email Address" required/>
          </div>
          <div className="sm:col-span-2">
              
              <textarea id="message" rows="6" className="block p-4 w-full text-sm text-[#6B7280] bg-[#F2F1F1] rounded-2xl shadow-sm border focus:outline-[#F2F1F1] border-[#F2F1F1] " placeholder="Write a note about your request"></textarea>
          </div>
          <NavLink to={"/thanks"} type="submit" className="py-3 w-full px-5 text-sm font-medium text-center bg-[#029837] text-white rounded-2xl bg-primary-700 hover:bg-primary-800 ">Send</NavLink>
      </form>
    </div>
    </>
  )
}

export default ContactForm