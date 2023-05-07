import React from 'react'
import ImageComponent from './ImageComponent/ImageComponent'
import { NavLink } from 'react-router-dom'



const LandingComponent = ({data,reverse}) => {
  return (
    <>
        <div className={`${reverse ? "bg-[#F9FFF8]" : "bg-white"} -z-12`}>

        <section className={` grid grid-cols-1 md:grid-cols-2 gap-10 text-[#000033] text-sm lg:text-base py-10 w-[80%] m-auto `}>
            
            <div className={`${reverse ? "order-last" : ""} select-none  md:text-left flex flex-col  justify-center`}>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl lg:pb-10'>{data.title}</h1>
                {data.info.map((detail,index) => (
                    <p className=' text-justify ' key={index}>{detail}</p>
                    ))}
                <ul className='marker:text-[#029837] marker:p-2'>
                    {
                        data.list ? <>
                        {
                            data.list.map((item,index)=>(
                                <li className='list-disc list-inside' key={index}>{item}</li>
                                ))
                            }
                        </> : <></>
                    }
                </ul>
                
                {
                    data.btn ? <NavLink to={"/thanks"}> <button className={`${reverse ? "bg-[#F9FFF8] border-solid border-2 text-[#029837] outline-[#029837] border-[#029738]" : "bg-[#029837] text-white"} py-3 px-8 mt-5 rounded-3xl  w-fit`}>{data.btn}</button> </NavLink>: ""
                }
            </div>
            <div className={`${reverse ? "justify-start" : "justify-end"} flex `}>
            <ImageComponent image={data.image} background={data.background} />
            </div>
            
        </section>
        </div>
    
    </>
  )
}

export default LandingComponent