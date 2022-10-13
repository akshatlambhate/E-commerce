import React from 'react'

const Button = ({props}) => {
  return (
    <>
      <button className=' lg:my-2 bg-darkBlue lg:text-base text-midSkyBlue hover:bg-midSkyBlue hover:text-darkBlue border-none rounded p-2 w-[20%] font-bold hover:text-AirBlue hover:bg-AntiFlashWhite
      xs:my-1 xs:text-sm'>{props}</button>
    </>
  )
}

export default Button
