import React from 'react'
import laptop01 from './assests/laptop-03.png'
import ha from './assests/HA01.png'
import headphns from './assests/headPhns01.png'
import ipad from './assests/ipad.png'
import mobile from './assests/mobile.png'
import smartW from './assests/smartW.png'

const Categories = () => {
  return (
    <>
    <div className='flex flex-row p-8 gap-8'>
      <div className='flex flex-col justify-center items-center '>
        <img src={laptop01} alt="images" className='w-60 p-3  h-33 rounded-lg border-2	border-AntiFlashWhite' />
        <p className='text-Charcoal text-[18px] font-bold hover:underline hover:cursor-pointer'>Laptop</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={ha} alt="images" className='w-60 p-3 h-30 rounded-lg bg-AntiFlashWhite' />
        <p className='text-Charcoal text-[18px] font-bold hover:underline hover:cursor-pointer'>Laptop</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={headphns} alt="images" className='w-60 p-3 h-30 rounded-lg border-2	border-AntiFlashWhite' />
        <p className='text-Charcoal text-[18px] font-bold hover:underline hover:cursor-pointer'>Laptop</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={ipad} alt="images" className='w-60 p-3 h-30 rounded-lg bg-AntiFlashWhite' />
        <p className='text-Charcoal text-[18px] font-bold hover:underline hover:cursor-pointer'>Laptop</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={mobile} alt="images" className='w-60 p-3 h-30 rounded-lg border-2	border-AntiFlashWhite' />
        <p className='text-Charcoal text-[18px] font-bold hover:underline hover:cursor-pointer'>Laptop</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={smartW} alt="images" className='w-60 p-3 h-30 rounded-lg bg-AntiFlashWhite' />
        <p className='text-Charcoal text-[18px] font-bold hover:underline hover:cursor-pointer'>Laptop</p>
      </div>
      
    </div>
    </>
  )
}

export default Categories
