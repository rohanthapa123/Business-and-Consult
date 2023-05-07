import React from 'react'

const SalesResult = ({data}) => {
  return (
    <>
        <div className='bg-[#F7FFF6] py-16 text-center text-[#000033]'>
            <h1 className='text-3xl font-bold py-5'>My Result has been <br/>outstanding</h1>
            <ul className='marker:text-[#209837] space-y-3  list-image-[url(./src/assets/Vector.png)] w-[80%] md:w-[60%] text-left list-outside  m-auto'>
                {
                    data.map((item,index)=>(
                        <li key={index} className=' list-inside  '>{item}</li>
                    ))
                }
            </ul>
            <button className='my-10 py-2 px-8 bg-white border border-[#209837] rounded-xl text-[#209837] font-medium'>Get Started</button>
        </div>
    
    
    </>
  )
}

export default SalesResult