import React from 'react'
import { NavLink } from 'react-router-dom'
const PricesCard = ({ data }) => {
    return (
        <>
            <div className=' py-16 w-[90%] m-auto text-[#000033] '>

                <h1 className=' text-2xl font-bold text-center'>So how much does our<br />services cost?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-20'>

                    {
                        data.map((item,index) => (
                            <>
                                <div key={index} className='w-fit shadow-md m-auto px-12 md:px-12 lg:px-16 py-10 text-center rounded-xl space-y-5'>
                                    <h3 className='font-bold py-8 text-lg'>{item.plan}</h3>
                                    <h1 className='font-extrabold  text-3xl py-5'>Rs {item.amount}</h1>
                                    <div className='text-start'>

                                    <ul className=' marker:text-[#209837] pt-3 pb-10'>
                                        {
                                            item.features.map((e, index) => (
                                                <li key={index} className='py-1 list-disc list-inside'>{e}</li>
                                            ))
                                        }
                                    </ul>
                                    </div>
                                    <NavLink to={"/thanks"} className='border border-solid border-[#209837] p-2 rounded-2xl text-[#209837]'>Choose Plan</NavLink>

                                </div>
                            </>
                        ))
                    }

                </div>



            </div>
        </>
    )
}

export default PricesCard