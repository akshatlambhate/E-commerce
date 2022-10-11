import React from 'react'
import {HP} from '../utils/DataAbout.jsx'
import SubAbout from './SubAbout.jsx'

const AboutUs = () => {
  return (
    <div className='m-8'>
      <h1 className='text-5xl font-bold font-mono mb-20 text-AirBlue'>About us</h1>
      <div className='w-[100%] flex '>
        <div className='w-1/2'><img src={HP} alt="" /></div>
        <div className='w-1/2 p-8 bg-AntiFlashWhite flex flex-col justify-center items-center'>
          <h1 className='text-2xl text-AirBlue'>CATERING TO YOUR REQUIREMENTS,HANDLING YOUR NEEDS WITH CARE.</h1>
          <p className='text-base text-AirBlue'>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
        </div>
      </div>
      <SubAbout />
      <div className='p-24 bg-AntiFlashWhite flex flex-col justify-center items-center' >
        <p className='text-sm text-AirBlue'>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
      </div>
    </div>
  )
}

export default AboutUs
