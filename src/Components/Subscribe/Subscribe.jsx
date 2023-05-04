import React from 'react'

const Subscribe = () => {
  return (
    <>
        <div className='text-center space-y-8 py-20 '>
            <h1 className=' font-bold text-3xl text-[#000033] '>Subscribe to our newsletter</h1>
            <p className=' text-gray-600 '>We recommend you to subscribe to our newsletter ,drop<br/> your email below to get daily update about us.</p>
            <div className='space-x-4 py-4'>
                <input type="text" className='text-[#6B7280] outline-none bg-[#F2F1F1] px-5 py-3 md:w-[30%] rounded-3xl '/>
                <button className='bg-[#029837] text-white py-3 px-5 md:px-8 rounded-3xl'>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Subscribe