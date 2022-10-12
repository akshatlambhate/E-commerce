import React from 'react'

const Button = ({props}) => {
  return (
    <>
      <button className=' my-2 bg-AirBlue text-base text-AntiFlashWhite border-none rounded p-2 w-[20%] font-bold hover:text-AirBlue hover:bg-AntiFlashWhite'>{props}</button>
    </>
  )
}

export default Button
