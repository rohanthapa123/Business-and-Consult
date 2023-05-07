import React from 'react'

const HeroSession3 = ({data,theme, col}) => {
  return (
    <>
        <div className={`${theme == "light" ? "bg-white" : "bg-[#F7FFF6]"} text-[#000033]`}>
            <h1 className='text-center text-2xl font-bold py-10'>{data.title}</h1>
            {data.description ? <p className='text-center'>{data.description}</p> : "" }
            <div className={`grid grid-cols-${col} lg:w-[60%] m-auto pt-12 space-y-5`}>
                {
                    data.detail.map((item,index)=>(
                        <div key={index} className={`${col == "2" ? "w-[70%] lg:w-[40%]" :"w-[70%]"  } m-auto`}>
                        <ul className='list-outside list-image-[url(./src/assets/Vector.png)]  marker:text-[#209837] '>
                            <li>

                            {item.heading ? <p className='font-bold '>{item.heading}</p> : ""}
                            {item.description}
                            </li>
                        </ul>
                </div>
                    ))
                }
                
            </div>
            <div className='w-fit m-auto'>

            <button className='mt-5 mb-16 border border-[#209837] rounded-xl text-[#209837] p-2'>{data.btn}</button>
            </div>
        </div>
    
    </>
  )
}

export default HeroSession3