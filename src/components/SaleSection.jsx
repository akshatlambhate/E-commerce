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
          <div className='lg:h-[80vh] p-8 gap-2 flex flex-col justify-end items-baseline m-4 bg-sc02 bg-cover
          xs:h-[40vh]'>
          <div className='border-b-4 border-parentdiv	w-[100%] mb-2'></div>
          <h5 className='w-[max-content] text-colortxt font-semibold'>FEATURED COLLECTION / {i+1} </h5>
          <h1 className='w-[max-content] text-colortxt font-semibold'> {dev.device} </h1>
          <button className='bg-buttoncolor	 hover:text-buttontexthover hover:bg-buttoncolorhover	 text-buttontext font-bold py-2 px-8 rounded lg:w-[30%] xs:w-[90%] md:w-[60%]'>Shop Collection <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          </SwiperSlide>
        ))}
      
        
      </Swiper>
    </>
    
  )
}

export default SaleSection
