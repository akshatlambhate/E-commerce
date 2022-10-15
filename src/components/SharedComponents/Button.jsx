import React from 'react'

const Button = ({name}) => {
  return (
    <>
      <button className=' lg:my-2 bg-buttoncolor lg:text-base text-buttontext hover:bg-buttoncolorhover hover:text-buttontexthover border-none rounded p-2 w-[40%] font-bold hover:text-AirBlue hover:bg-AntiFlashWhite
      xs:my-1 xs:text-sm'>{name}</button>
    </>
  )
}

export default Button