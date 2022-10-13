import React from 'react'
import {HP} from '../utils/DataAbout.jsx'
import SubAbout from './SubAbout.jsx'

const AboutUs = () => {
  return (
    <div className='p-8 bg-lightSkyBlue'>
      <h1 className='lg:text-5xl lg:font-bold font-mono lg:mb-20 text-darkBlue
      xs:text-3xl xs:font-bold xs:mb-10'>About us</h1>
      <div className='lg:w-[100%] lg:flex lg:flex-row
      sm:w-[100%] sm:flex sm:flex-col'>
        <div className='lg:w-1/2 xs:w-full'><img src={HP} alt="" /></div>
        <div className='lg:w-1/2 p-8 bg-midSkyBlue flex flex-col justify-center items-center
        xs:w-full text-left'>
          <h1 className='lg:text-2xl text-darkBlue
          xs:text-base'>CATERING TO YOUR REQUIREMENTS,HANDLING YOUR NEEDS WITH CARE.</h1>
          <p className='lg:text-base text-darkBlue
          xs:text-xs'>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
        </div>
      </div>
      <SubAbout />
      <div className='lg:p-24 bg-midSkyBlue lg:flex 
      xs:p-6 xs:flex xs:items-center' >
        <p className='lg:text-base md:text-sm xs:text-xs text-darkBlue'>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
      </div>
    </div>
  )
}

export default AboutUs
