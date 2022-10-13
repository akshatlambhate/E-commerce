import React from 'react'
import sideImg from '../assets/git-07.png'
const GetInTouch = () => {
  return (
    <div  class="p-4 lg:flex lg:flex-row
    md:flex md:flex-row gap-12 bg-lightSkyBlue w-[100%]
    xs:flex xs:flex-col xs:gap-4">
    <div class="	lg:flex lg:flex-col lg:gap-8 items-center	lg:p-16 lg:w-1/2 bg-midSkyBlue rounded m-8
     
    xs:w-[80%] xs:p-4 xs:gap-6 ">
      <div class="w-full items-center 
      xs:w-full ">
        <h1 class="lg:text-5xl lg:bold font-mono text-darkBlue
        lg:md-4
        md:mb-2
        xs:mb-2
        xs:text-base	xs:bold">Get In Touch!</h1>
        <p class="text-darkBlue
        lg:text-base lg:md-4
        md:mb-2    
        xs:mb-2
        xs:text-xs">We'll happy to answer your all questions.
        So,Subscribe to ElectonicsNest & get notified on the latest devices that impact your lifestyle.
        </p>
      </div>
      <div class="lg:flex lg:flex-row lg:gap-12 w-full items-center
      xs:flex xs:flex-col xs:gap-6">
      <input type="text" 
      placeholder='Enter your mail' 
      class="w-2/3
      px-3
      py-1.5
      text-base
      font-normal
      text-darkBlue
      bg-lightSkyBlue bg-clip-padding
      border 
      border-solid 
      border-lightSkyBlue
      rounded 
      focus:text-darkBlue focus:bg-white focus:border-AirBlue	focus:outline-none
      xs:w-full
      "/>
      <button class="bg-blueShade	 hover:text-blueShade hover:bg-lightSkyBlue	 text-lightSkyBlue font-bold py-2 px-8 rounded-full">Subscribe</button>
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
