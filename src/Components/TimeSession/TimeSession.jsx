import React from 'react'

const TimeSession = ({data}) => {
  return (
    <div className='py-20'>
        <div className='grid grid-cols-2 md:grid-cols-4 align-middle gap-2'>
            {
                data.map((item, index)=>(
                    <div key={index} className=' text-center '>
                        <img src={item.image} className='m-auto' alt="icons" />
                        <p>{item.title}</p>
                        <p>{item.detail}</p>
                    </div>
                ))
            }
        </div>
        <div className='m-auto w-fit '>

        <button className='p-2 border border-[#209837] rounded-xl '>Reserve Your Seat</button>
        </div>
    </div>
  )
}

export default TimeSession