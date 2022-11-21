import React from 'react'
import logo2 from '../../assets/logo2.png'
import SubFooter from '../Footer Components/SubFooter'
import SocialMediaIcons from '../SharedComponents/SocialMediaIcons'
const Footer = () => {
  return (
    <div class="	m-0 p-4	items-center w-[100%] bg-cream border-t-2 border-stone-600">
      <div class="	lg:flex lg:gap-30	lg:flex-row m-4  
      xs:grid xs:grid-cols-2 xs:gap-4 xs:m-8
      sm:gap-6 
      md:gap-12 md:mx-8">
        <div class=" flex gap-8	flex-col w-[60%] 
        xs:gap-2 xs:p-2 
        lg:w-[20%] lg:mr-16">
          <div className='p-4'>
            <img src={logo2} alt="Electronic Nest" class="w-56"/>
          </div>
          <div class="flex gap-2	flex-row ">
            <SocialMediaIcons />
          </div>
        </div>
        <SubFooter />
      </div>
      <div class="flex flex-row justify-center mb-4">
      <h3 class="text-colortxt lg:text-base xs:text-xs">Copyright © 2022 Electronics Store</h3>
      </div>
    </div>
  )
}

export default Footer
