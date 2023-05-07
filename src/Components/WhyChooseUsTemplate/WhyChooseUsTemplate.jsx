import React from 'react'

const WhyChooseUsTemplate = ({ data, theme }) => {
    return (
        <>
            <div className={`${theme == "light" ? "bg-white " : "bg-[#F7FFF6]"}`}>

                <div className={` text-center text-[#000033] py-5`}>
                    <h1 className='font-bold text-2xl py-3'>{data.title}
                    </h1>
                    <p className='w-[90%] md:w-[75%] lg:w-[50%] m-auto '>{data.description}</p>
                </div>
                <div className={`grid grid-cols-1  md:grid-cols-3 gap-5 w-[80%] md:w-[90%] lg:w-[80%] m-auto pb-20 `}>
                    {
                        data.types.map((item, index) => (
                            <>
                                <div key={index} className=' shadow-md rounded-xl px-10 py-16  bg-white '>

                                    <div className='space-y-4'>
                                        <img src={item.img} alt="" />
                                        <h3 className='font-bold text-sm'>{item.title}</h3>
                                        <p className='text-justify'>{item.description}</p>
                                        {
                                            item.btn ? <button className='border border-[#209837] p-2 rounded-2xl'>{item.btn}</button> : ""
                                        }

                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default WhyChooseUsTemplate