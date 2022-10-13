import React from 'react'
import {dataAbout} from '../utils/DataAbout.jsx'
const SubAbout = () => {
  return (
      <div className='grid grid-cols-3 col-span-1 mt-8 mb-8'>
        {dataAbout.map((data)=>(
        <>
        <div><img src={data.img} alt="" /></div>
        <div className=' p-8 bg-AntiFlashWhite flex flex-col justify-center items-center'>
          <h1 className='text-base text-AirBlue'>{data.heading}</h1>
          <p className='text-sm text-AirBlue'>{data.para}</p>
        </div>
        </>
        ))}
      </div>
      
  )
}

export default SubAbout
