import React from 'react'
import logoblack from '../../assets/png/logo-img01.png'
import SubFooter from '../SubFooter.jsx'
import SocialMediaIcons from '../SocialMediaIcons.jsx'
const Footer = () => {
  return (
    <div class="	m-0 p-4	items-center w-[100%] bg-background">
      <div class="	flex gap-30	flex-row m-12 ">
        <div class=" flex gap-12	flex-col w-[30%]">
          <div>
            <img src={logoblack} alt="Electronic Nest" class="w-40	"/>
          </div>
          <div class="flex gap-2	flex-row">
            <SocialMediaIcons />
          </div>
        </div>
        <div className='flex justify-between w-[70%]'>
        <SubFooter />
        </div>
      </div>
      <div class="flex flex-row justify-center m-12">
      <h3 class="text-textcolor text-base">Copyright © 2022 Electronics Store</h3>
      </div>
    </div>
  )
}

export default Footer
