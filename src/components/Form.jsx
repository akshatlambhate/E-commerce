import React from 'react'
import Button from './Button'

const Form = () => {
    return (
        <div className='p-4 bg-[#a5a5a5] border-2 border-gray-300 shadow-xl'>
            <form action="" className='flex flex-col text-left'>
                <label htmlFor="" className='text-sm text-AirBlue font-semibold	'>Name</label>
                <input type="text" className='w-[70%] border-b-2 border-midSkyBlue focus:outline-none focus:border-AirBlue text-sm p-1 my-2 ' />
                <label htmlFor="" className='text-sm text-darkBlue font-semibold	'>Email</label>
                <input type="text" className='w-[70%] border-b-2 border-midSkyBlue focus:outline-none focus:border-AirBlue text-sm p-1 my-2 ' />
                <label htmlFor="" className='text-sm text-darkBlue font-semibold	'>Enquiry</label>
                <textarea name="enquiryText" id="" cols="30" rows="10" className='w-[70%] h-[100px] border-b-2 border-midSkyBlue focus:outline-none focus:border-AirBlue text-sm p-1 my-2'></textarea>
                <Button props={'Submit!'} />
            </form>
        </div>
    )
}

export default Form
