import React from 'react'

const CardCompnent = ({image,name,country,description}) => {
  return (
    <>
        <div className='bg-white  rounded-3xl shadow-lg pt-6 px-6'>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                        <img src={image} alt="" />
                        <div className='ps-2'>
                            <h1 className='font-bold'>{name}</h1>
                            <h1 className=' font-light'>{country}</h1>
                        </div>
                        </div>
                        <h1 className=' font-extrabold text-[#029837] text-4xl font-mulish'>"</h1>
                    </div>
                    <p className='py-8'>
                        {description}
                    </p>
        </div>
    </>
  )
}

export default CardCompnent