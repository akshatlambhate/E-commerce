import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import { SaleData } from './SaleSecData'
const SaleSection = () => {
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {SaleData.map((dev,i)=>(
          <SwiperSlide className='p-8'>
          <div className='h-[80vh] p-8 gap-2 flex flex-col justify-end items-baseline m-4 bg-sc02 bg-cover'>
          <div className='border-b-2 border-AntiFlashWhite	w-[100%] mb-2'></div>
          <h5 className='w-[max-content] text-white'>FEATURED COLLECTION / {i+1} </h5>
          <h1 className='w-[max-content] text-white'> {dev.device} </h1>
          <button className='bg-white	 hover:text-white hover:bg-AirBlue	 text-AirBlue font-bold py-2 px-8 rounded w-[30%] '>Shop Collection <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          </SwiperSlide>
        ))}
      
        
      </Swiper>
    </>
    
  )
}

export default SaleSection
