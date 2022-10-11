import React from 'react'
import { dataCat } from '../utils/CategoriesData.jsx'
const Categories = () => {
  return (
    <>
    <div className='flex flex-row p-8 gap-8'>
    {dataCat.map((data,i)=>(
      <div className='flex flex-col justify-center items-center'>
        <img src={data.img} alt="images" className='w-60 p-3 shadow-md	  h-33 rounded-lg border-2	border-AntiFlashWhite' />
        <p className='text-Charcoal text-[18px] font-bold hover:underline hover:cursor-pointer mt-2'>{data.tag}</p>
      </div>
    ))}
    </div>

    </>
  )
}

export default Categories
