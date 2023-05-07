import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const changeHandle = (e) =>{
    setEmail(e.target.value);

  }
  const handleSubmit = (e) =>{
    email != ""  ? 
    navigate("/subscribed") : alert("Enter Email");
  }
  return (
    <>
        <div className='text-center space-y-8 py-20 '>
            <h1 className=' font-bold text-3xl text-[#000033] '>Subscribe to our newsletter</h1>
            <p className=' text-gray-600 '>We recommend you to subscribe to our newsletter ,drop<br/> your email below to get daily update about us.</p>
            <div className='space-x-4 py-4'>
                <input type="email" className='text-[#6B7280] outline-none bg-[#F2F1F1] px-5 py-3 md:w-[30%] rounded-3xl ' onChange={changeHandle}/>      
                <button  onClick={handleSubmit} type='submit' className='bg-[#029837] text-white py-3 px-5 md:px-8 rounded-3xl'>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Subscribe