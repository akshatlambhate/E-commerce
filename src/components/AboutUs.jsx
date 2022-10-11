import React from 'react'
import HP from '../assests/headphns.jpg'
import phn from '../assests/phones.jpg'
import smartW from '../assests/smartW.jpg'
import tablets from '../assests/tablets.jpg'

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
      <div className='grid grid-cols-3 col-span-1 mt-8 mb-8'>
        <div><img src={phn} alt="" /></div>
        <div className=' p-8 bg-AntiFlashWhite flex flex-col justify-center items-center'>
          <h1 className='text-base text-AirBlue'>FOR CONVENIECE OF CHOICE</h1>
          <p className='text-sm text-AirBlue'>We think about the convenience of your choice. Our products are supplied with star rating that should help hesitant buyers to take a decision. What’s more, you can search our site if you know exactly what you are looking for or use a bunch of different filters that will considerably save your time and efforts.</p>
        </div>
        <div><img src={smartW} alt="" /></div>
        <div className=' p-8 bg-AntiFlashWhite flex flex-col justify-center items-center'>
          <h1 className='text-base text-AirBlue'>THE HIGHEST QUALITY OF PRODUCTS</h1>
          <p className='text-sm text-AirBlue'>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
        </div>
        <div><img src={tablets} alt="" /></div>
        <div className='p-8 bg-AntiFlashWhite flex flex-col justify-center items-center'>
          <h1 className='text-base text-AirBlue'>DELIVERT TO ALL REGIONS</h1>
          <p className='text-sm text-AirBlue'>We deliver our goods worldwide. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.</p>
        </div>
        
      </div>
      <div className='p-24 bg-AntiFlashWhite flex flex-col justify-center items-center' >
        <p className='text-sm text-AirBlue'>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
      </div>
    </div>
  )
}

export default AboutUs
