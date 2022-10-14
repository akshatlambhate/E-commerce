import React from 'react'

const Button = (props) => {
  return (
    <>
      <button class="bg-darkBlue	my-2 hover:text-darkBlue hover:bg-lightSkyBlue	 text-lightSkyBlue font-bold lg:py-2 lg:px-8 rounded
      xs:py-1 xs:px-4">{props.name}</button>
    </>
  )
}

export default Button
