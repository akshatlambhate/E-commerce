import React from 'react'
import sideImg from '../assets/git-07.png'
const GetInTouch = () => {
  return (
    <div  class="p-4 lg:flex lg:flex-row
    md:flex md:flex-row gap-12 bg-lightSkyBlue w-[100%]
    xs:flex xs:flex-col xs:gap-4">
    <div class="	lg:flex lg:flex-col lg:gap-8 items-center	lg:p-16 lg:w-1/2 bg-midSkyBlue rounded m-8
     
    xs:w-[80%] xs:p-4 xs:gap-6  bg-childdiv">
      <div class="w-full items-center 
      xs:w-full ">
        <h1 class="lg:text-5xl lg:bold font-mono text-darkBlue
        lg:md-4
        md:bold 
        md:mb-2
        xs:mb-2
        xs:text-base	xs:bold">Get In Touch!</h1>
        <p class="text-colortxt
        lg:text-base lg:md-4
        md:mb-2    
        xs:mb-2
        xs:text-xs">We'll happy to answer your all questions.
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
      lg:font-semibold
      xs:px-1.5
      xs:py-1
      xs:text-sm
      xs:font-semibold
      text-darkBlue
      bg-gray-100 bg-clip-padding
      border 
      border-b-2 
      border-parentdiv
      rounded 
      focus:text-colortxt focus:bg-white focus:border-parentdiv	focus:outline-none
      xs:w-full
      "/>
      <button class="bg-blueShade	 hover:text-blueShade hover:bg-lightSkyBlue	 text-lightSkyBlue font-bold lg:py-2 lg:px-8 rounded-full
      xs:py-1 xs:px-4">Subscribe</button>
      </div>
    </div>
    <div className='md:items-center md:p-6 lg:p-18 w-[40%] '>
      <img src={sideImg} alt="" class="lg:w-[50vh]  md:w-[95%] h-[50vh] 
      sm:p-4"/>
    </div>
    </div>
  )
}

export default GetInTouch