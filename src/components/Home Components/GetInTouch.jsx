import React from 'react'
import sideImg from '../../assets/gitImage.png'
const GetInTouch = () => {
  return (
    <div  className="p-4 lg:flex lg:flex-row
    md:flex md:flex-row lg:gap-18 bg-cream w-[100%]
    xs:flex xs:flex-col xs:gap-4 ">
    <div className="	lg:flex lg:flex-col lg:gap-8 items-center	lg:p-16 lg:w-[60%] md:w-[60%] bg-buttoncolor  rounded m-8
     
    xs:w-[80%] xs:p-4 xs:gap-6 shadow-lg shadow-stone-600 ">
      <div className="w-full items-center 
      xs:w-full ">
        <h1 className="lg:text-5xl lg:bold font-poppins text-cream
        lg:md-4
        md:bold 
        md:mb-2
        xs:mb-2
        xs:text-base	xs:bold">Get In Touch!</h1>
        <p class="text-cream
        lg:text-base lg:md-4
        md:mb-2    
        xs:mb-2
        xs:text-xs">We'll happy to answer your all questions.
        So,Subscribe to ElectonicsNest & get notified on the latest devices that impact your lifestyle.
        </p>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-12 w-full items-center
      xs:flex xs:flex-col xs:gap-4">
      <input type="text" 
      placeholder='Enter your mail' 
      className="w-2/3
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
      focus:text-cream focus:bg-white focus:border-parentdiv	focus:outline-none
      xs:w-full
      "/>
      <button className="bg-cream	 hover:text-cream hover:bg-buttoncolorhover	 text-buttoncolor font-bold lg:py-2 lg:px-8 rounded
      xs:py-1 xs:px-4">Subscribe</button>
      </div>
    </div>
    <div className='md:items-center md:p-6 lg:p-18 lg:w-[40%] xs:w-[100%] md:w-[60%] '>
      <img src={sideImg} alt="" class="lg:w-[100%]    lg:h-[50vh] md:w-[100%] md:h-[20vh]
       xs:px-16 "/>
    </div>
    </div>
  )
}

export default GetInTouch