import React from 'react'
import {dataAbout} from '../utils/DataAbout.jsx'
const SubAbout = () => {
  return (
      <div className='lg:grid lg:grid-cols-3  lg:mt-8 lg:mb-8 lg:gap-0
      md:grid md:grid-cols-2 md:mt-4 md:mb-4 md:gap-2
      xs:grid xs:grid-cols-1 xs:mt-2 xs:mb-2 xs:text-left'>
        {dataAbout.map((data)=>(
        <>
        <div><img src={data.img} alt="" /></div>  
        <div className='
        lg:p-8 bg-midSkyBlue lg:flex lg:flex-col lg:justify-center lg:items-center
        md:p-4
        xs:p-2  xs:flex xs:flex-col xs:justify-center xs:items-center xs:text-left'>
          <h1 className='lg:text-base text-darkBlue
          xs:text-sm'>{data.heading}</h1>
          <p className='lg:text-sm text-darkBlue
          xs:text-xs'>{data.para}</p>
        </div>
        </>
        ))}
      </div>
      
  )
}

export default SubAbout
