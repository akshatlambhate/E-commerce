import React from 'react'

const Button = (props) => {
  return (
    <>
      <button class="bg-buttoncolor	my-2 hover:text-buttontexthover hover:bg-buttoncolorhover	 text-buttontext font-bold lg:py-2 lg:px-8 rounded
      xs:py-1 xs:px-4">{props.name}</button>
    </>
  )
}

export default Button