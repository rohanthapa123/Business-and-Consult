import React from 'react'
import ImageComponent from './ImageComponent/ImageComponent'



const LandingComponent = ({data}) => {
  return (
    <>
        
        <section className='grid grid-cols-1 md:grid-cols-12 gap-10 text-[#000033] text-sm lg:text-base py-10 '>
            
            <div className=' col-start-2 col-span-5 select-none  md:text-left flex flex-col  justify-center'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl lg:pb-10'>{data.title}</h1>
                {data.info.map((detail,index) => (
                    <p key={index}>{detail}</p>
                ))}
                {
                data.btn ? <button className='bg-[#029837] py-3 px-8 mt-5 rounded-3xl text-white w-fit'>{data.btn}</button> : ""
                }
            </div>
            <ImageComponent image={data.image} background={data.background}/>
            
        </section>
    
    </>
  )
}

export default LandingComponent