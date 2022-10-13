import React from 'react'
import { dataFoo } from '../utils/dataFooter'
const SubFooter = () => {
  return (
    <>
      {dataFoo.map((data)=>(
      <div className='text-left w-[70%]'>
            <h1 class="xl:text-2xl text-AirBlue font-medium mb-4 hover:text-Charcoal sm:text-base md:text-xl xs:text-lg">{data.name}</h1>
            <ul class=" text-AirBlue text-left text-base pb-2 hover:text-gray-600 xs:text-xs">
              <li>{data.item1}</li>
              <li>{data.item2}</li>
              <li>{data.item3}</li>
              <li>{data.item4}</li>
            </ul>
        </div>
       ) )}
    </>   
  )
}

export default SubFooter
