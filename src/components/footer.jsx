import React from 'react'
import logoblack from '../assets/png/logo-img01.png'
import SubFooter from './SubFooter'
import SocialMediaIcons from './SocialMediaIcons'
const Footer = () => {
  return (
    <div class="	m-0 p-4	items-center w-[100%] bg-AntiFlashWhite">
      <div class="	lg:flex lg:gap-30	lg:flex-row m-8  
      xs:grid xs:grid-cols-2 xs:gap-4 xs:m-8
      sm:gap-6 
      md:gap-12 ">
        <div class=" flex gap-8	flex-col w-[60%] 
        xs:gap-2 xs:p-2 
        lg:w-[20%] lg:mr-16">
          <div>
            <img src={logoblack} alt="Electronic Nest" class="w-40	lg:30"/>
          </div>
          <div class="flex gap-2	flex-row ">
            <SocialMediaIcons />
          </div>
        </div>
        <SubFooter />
      </div>
      <div class="flex flex-row justify-center m-12">
      <h3 class="text-gray-600 lg:text-base xs:text-xs">Copyright © 2022 Electronics Store</h3>
      </div>
    </div>
  )
}

export default Footer
