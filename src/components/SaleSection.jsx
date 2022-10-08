import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft , faArrowAltCircleRight ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { SaleData } from './SaleSecData'
const SaleSection = () => {
  const [current, setCurrent] = useState(0);
  const length = SaleData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className=''>
  
      <div className='flex flex-row h-[100vh] justify-center items-center  relative p-4'>
      <FontAwesomeIcon icon={faArrowAltCircleLeft} className='left-arrow' onClick={prevSlide}/>
      <FontAwesomeIcon icon={faArrowAltCircleRight} className='right-arrow' onClick={nextSlide}/>
      {SaleData.map((dev,i)=>(
        <div className={i === current ? 'flex flex-col gap-4 h-[60%] w-[70%] justify-end items-left border-2 py-4 bg-AntiFlashWhite' : 'opacity-0	w-0'}  key={i}>
          <div className='border-2 border-AirBlue	w-[100%] '></div>
          <h5 className='w-[max-content] mx-4'>FEATURED COLLECTION / {i+1} </h5>
          <h1 className='w-[max-content] mx-4' key={i} > {dev.device} </h1>
          <button className='bg-AirBlue	 hover:text-AirBlue hover:bg-white	 text-white font-bold py-2 px-8 rounded w-[30%] mx-4'>Shop Collection <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
      ))}
      </div>
    </div>
    
  )
}

export default SaleSection
