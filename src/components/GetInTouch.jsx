import React from 'react'
import sideImg from './assests/git-07.png'
const GetInTouch = () => {
  return (
    <div  class="m-0 p-4 max-w-screen-sl flex flex-row gap-12">
    <div class="	flex flex-col gap-14 items-center	p-16 w-1/2 bg-AntiFlashWhite rounded m-8 ">
      <div class="w-full items-center ">
        <h1 class="text-5xl bold font-mono text-AirBlue	">Get In Touch!</h1>
        <p class="text-AirBlue">We'll happy to answer your all questions.
        So,Subscribe to ElectonicsNest & get notified on the latest devices that impact your lifestyle.
        </p>
      </div>
      <div class="lg:flex lg:flex-row lg:gap-12 w-full items-center
      xs:flex xs:flex-col xs:gap-4">
      <input type="text" 
      placeholder='Enter your mail' 
      class="w-2/3
      lg:px-3
      lg:py-1.5
      lg:text-base
      lg:font-normal
      xs:px-1.5
      xs:py-1
      xs:text-sm
      xs:font-normal
      text-darkBlue
      bg-lightSkyBlue bg-clip-padding
      border 
      border-solid 
      border-lightSkyBlue
      rounded 
      focus:text-darkBlue focus:bg-white focus:border-AirBlue	focus:outline-none
      xs:w-full
      "/>
      <button class="bg-AirBlue	 hover:text-AirBlue hover:bg-white	 text-white font-bold py-2 px-8 rounded-full">Subscribe</button>
      </div>
    </div>
    <div className='md:items-center md:p-6 lg:p-4'>
      <img src={sideImg} alt="" class="lg:w-[95%] lg:h-[95%] md:w-[95%] md:h-[95%]  p-8 
      sm:p-4"/>
    </div>
    </div>
  )
}

export default GetInTouch
