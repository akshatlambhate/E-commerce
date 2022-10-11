import React from 'react'
import logoblack from '../assets/png/logo-img01.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import SubFooter from './SubFooter'
const Footer = () => {
  return (
    <div class="	m-0 p-4	items-center w-[100%] bg-AntiFlashWhite">
      <div class="	flex gap-30	flex-row m-12 ">
        <div class=" flex gap-12	flex-col w-[30%]">
          <div>
            <img src={logoblack} alt="Electronic Nest" class="w-40	"/>
          </div>
          <div class="flex gap-2	flex-row">
            <FontAwesomeIcon icon={faFacebookSquare} class="w-10 h-10 text-blue-900 hover:text-blue-700" />
            <FontAwesomeIcon icon={faTwitterSquare} class="w-10 h-10 text-blue-600 hover:text-blue-400" />
            <FontAwesomeIcon icon={faInstagramSquare} class="w-10 h-10 text-rose-600 hover:text-rose-400" />
            <FontAwesomeIcon icon={faYoutubeSquare} class="w-10 h-10 text-red-700 hover:text-red-500" />
          </div>
        </div>
        <div className='flex justify-between w-[70%]'>
        <SubFooter />
        </div>
      </div>
      <div class="flex flex-row justify-center m-12">
      <h3 class="text-gray-600 text-base">Copyright © 2022 Electronics Store</h3>
      </div>
    </div>
  )
}

export default Footer
