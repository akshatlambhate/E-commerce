import React from 'react'
import Navbar from '../components/SharedComponents/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CardData } from '../utils/ItemCardsData';
import { ItemRating } from '../utils/ItemCardsData';
import {camera,phone,laptop,accessories,iphone,mic,television,headphones} from '../utils/ItemCardsData'

import { Outlet, Link } from "react-router-dom";

const ItemCards = () => {
  return (
    <div className=' grid grid-cols-4 gap-7 '>
     {CardData.map((data)=>(
     <div id="items" className=' group flex flex-col gap-1 shadow-lg shadow-slate-600 items-center w-fit cursor-pointer basis-1/4'>
       <div ><img src={data.pic} className="w-64"/>
        <div id='quick-view' className='-translate-y-6 bg-stone-700 text-white opacity-0 group-hover:opacity-100'>
          <h1 className='hover:bg-black text-center'><Link to={"/productview"}>Quick View</Link></h1>
        </div>
        </div>
        <div id="item-name" className='text-lg font-bold -mt-5 font-serif '>{data.name}</div>
        <div id="item-price" className='font-bold text-primary text-lg'>{data.price}</div>
        <div id="item-rating" className='mb-3'>
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
      </div>
      </div>
      ))}
    </div>
  )
}

export default ItemCards
