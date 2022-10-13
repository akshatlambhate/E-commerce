import React from 'react'
import sideImg from '../assets/getInTouch.png'
const GetInTouch = () => {
  return (
    <div  class="m-0 p-4 flex flex-row gap-12 bg-slate-500">
    <div class="	flex flex-col gap-14 items-center	p-16 w-1/2 bg-AntiFlashWhite rounded m-8 ">
      <div class="w-full items-center ">
        <h1 class="text-5xl bold font-mono text-AirBlue	">Get In Touch!</h1>
        <p class="text-AirBlue">We'll happy to answer your all questions.
        So,Subscribe to ElectonicsNest & get notified on the latest devices that impact your lifestyle.
        </p>
      </div>
      <div class="flex flex-row gap-12 w-full items-center">
      <input type="text" 
      placeholder='Enter your mail' 
      class="w-2/3
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border 
      border-solid 
      border-gray-300
      rounded 
      focus:text-gray-700 focus:bg-white focus:border-AirBlue	focus:outline-none
      "/>
      <button class="bg-AirBlue	 hover:text-AirBlue hover:bg-white hover:text-AirBlue font-bold py-2 px-8 rounded-full">Subscribe</button>
      </div>
    </div>
    <div>
      <img src={sideImg} alt="" class="w-25 h-25 p-8"/>
    </div>
    </div>
  )
}

export default GetInTouch
