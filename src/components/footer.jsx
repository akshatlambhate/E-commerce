import React from 'react'
import logoblack from '../assets/png/logo-img01.png'
import SubFooter from './SubFooter'
import SocialMediaIcons from './SocialMediaIcons'
const Footer = () => {
  return (
    <div class="	m-0 p-4	items-center w-[100%] bg-AntiFlashWhite">
      <div class="	lg:flex lg:gap-30	lg:flex-row m-8 xs:grid xs:grid-cols-2">
        <div class=" flex gap-12	flex-col w-[50%]">
          <div>
            <img src={logoblack} alt="Electronic Nest" class="w-40	"/>
          </div>
          <div class="flex gap-2	flex-row">
            <SocialMediaIcons />
          </div>
        </div>
        <SubFooter />
      </div>
      <div class="flex flex-row justify-center m-12">
      <h3 class="text-gray-600 text-base xs:text-sm">Copyright © 2022 Electronics Store</h3>
      </div>
    </div>
  )
}

export default Footer
