import React from 'react'
import Navbar from '../components/SharedComponents/Navbar'
import phone from '../assets/phone.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ItemCards = () => {
  return (
    <div>
     <div id="items" className=' group flex flex-col gap-1 shadow-lg shadow-slate-600 items-center cursor-pointer mt-3 mx-2'>
       <div><img src={phone} className="w-64"></img>
        <div id='quick-view' className='-translate-y-6 bg-stone-700 text-white opacity-0 group-hover:opacity-100'>
          <h1 className='hover:bg-black text-center'>Quick View</h1>
        </div></div>
        <div id="item-name" className='text-lg font-bold -mt-5 font-serif '>Mobile Phone</div>
        <div id="item-price" className='font-bold text-primary text-lg'>$ 399</div>
        <div id="item-rating" className='mb-3'>
      <FontAwesomeIcon icon={faStar} className="text-black  hover:text-yellow-500 focus-within:text-yellow-500" />
      <FontAwesomeIcon icon={faStar} className="text-black  hover:text-yellow-500  " />
      <FontAwesomeIcon icon={faStar}  className="text-black  hover:text-yellow-500  "/>
      <FontAwesomeIcon icon={faStar}  className="text-black  hover:text-yellow-500  "/>
        </div>
      </div>
    </div>
  )
}

export default ItemCards
