import React from 'react'
import logoblack from '../assests/png/logo-img01.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div class="	m-0 p-4 max-w-screen-xl	items-center">
      <div class="	flex gap-60	flex-row m-12 ">
        <div class=" flex gap-12	flex-col">
          <div>
            {/* <h1 class="text-3xl bold underline font-mono">Electronics Nest</h1> */}
            <img src={logoblack} alt="Electronic Nest" class="w-40	"/>
          </div>
          <div class="flex gap-2	flex-row">
            <FontAwesomeIcon icon={faFacebookSquare} class="w-10 h-10 " />
            <FontAwesomeIcon icon={faTwitterSquare} class="w-10 h-10" />
            <FontAwesomeIcon icon={faInstagramSquare} class="w-10 h-10" />
            <FontAwesomeIcon icon={faYoutubeSquare} class="w-10 h-10" />
          </div>
        </div>
        <div>
            <h1 class="text-2xl font-medium	pb-4">Menu</h1>
            <ul class="text-xl> font-light> font-serif> pb-2">
              <li>About</li>
              <li>Store</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 class="text-2xl font-medium	pb-4">Categories</h1>
            <ul class="text-xl> font-light> font-serif> pb-2">
              <li>Phones</li>
              <li>Tablets</li>
              <li>Laptops</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h1 class="text-2xl font-medium	pb-4">Information</h1>
            <ul class="text-xl> font-light> font-serif> pb-2">
              <li>FAQs</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
      </div>
      <div class="flex flex-row justify-center m-12">
      <h3 class="">Copyright © 2022 Electronics Store</h3>
      </div>
    </div>
  )
}

export default Footer
