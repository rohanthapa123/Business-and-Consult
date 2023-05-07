import React from 'react'
import CardCompnent from '../CardsComponent/CardCompnent'
const Testimonial = ({title,data,isPrice}) => {
  return (
    <>
        <div className={`${isPrice ? "bg-white " : "bg-[#F7FFF6] " } pb-20`}>
            <h1 className='text-[#000033]  text-center text-2xl font-bold py-10 '>{title}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] m-auto'>
                {data.map((item ,index) =>(
                <CardCompnent key={index} image={item.image} name={item.name} country={item.country} description={item.description}/>
                ))}
                
                
            </div>
        </div>
    
    </>
  )
}

export default Testimonial