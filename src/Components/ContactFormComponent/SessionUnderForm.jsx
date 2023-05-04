import React from 'react'
import { faEnvelope ,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
const SessionUnderForm = () => {
  return (
    <>
        <div className='bg-[#F7FFF6] text-[#000033] flex justify-center flex-col md:flex-row'>
            <div className='bg-white  md:w-[35%] lg:w-[30%] xl:w-[20%] rounded-2xl  shadow-lg p-3 mx-20 md:mx-5 my-10 md:my-20'>
                <p className='font-bold text-2xl text-center'>Get in Touch</p>
                <div className='w-[75%] md:w-[80%] lg:w-[70%] m-auto'>
                <p className='text-sm  '><FontAwesomeIcon className='pe-2' icon={faEnvelope} style={{color: "#029837",}} />glorynwokocha99@gmail.com</p>
                <p className='text-sm  '><FontAwesomeIcon className='pe-2' icon={faPhone} style={{color: "#029837",}} />+234 806 774 735</p>
                </div>
            </div>
            <div className='bg-white md:w-[35%] lg:w-[30%] xl:w-[20%] rounded-2xl text-center shadow-lg p-3 mx-20 md:mx-5 my-10 md:my-20'>
                <p  className='font-bold text-2xl'>Location</p>
                <p className='text-sm'><FontAwesomeIcon className='pe-3' icon={faLocationDot} style={{color: "#029837",}} />88/89 Peter Odili Road, Port<br/>Harcourt, Rivers State.</p>
            </div>
        </div>
    
    </>
  )
}

export default SessionUnderForm