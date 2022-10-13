import React from 'react'
import { dataCat } from '../utils/CategoriesData.jsx'
const Categories = () => {
  return (
    <>
    <div className='lg:flex lg:flex-row lg:p-8 lg:gap-8 border-2 border-midSkyBlue
    xs:grid xs:grid-cols-3 xs:grid-auto xs:gap-4 xs:p-4'>
    {dataCat.map((data,i)=>(
      <div className='flex flex-col justify-center items-center 
      '>
        <img src={data.img} alt="images" className='w-60 p-3 shadow-lg h-33 rounded-lg border-2	border-midSkyBlue 
        ' 
        />
        <p className='text-Charcoal text-[18px] text-darkBlue font-bold hover:underline hover:cursor-pointer mt-2
        xs:text-xs'>{data.tag}</p>
      </div>
    ))}
    </div>

    </>
  )
}

export default Categories
