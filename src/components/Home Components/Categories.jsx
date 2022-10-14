import React from 'react'
import { dataCat } from '../../utils/CategoriesData.jsx'
const Categories = () => {
  return (
    <>
    <div className='lg:flex lg:flex-row lg:p-12 lg:gap-12 border-b-2 border-parentdiv w-[100%]
    xs:grid xs:grid-cols-3 xs:grid-auto xs:gap-4 xs:p-8
    lg:h-[35vh]
    xs:h-[50vh] '>
    {dataCat.map((data,i)=>(
      <div className='flex flex-col lg:w-[20%] items-center xs:w-[80%]
      '>
        <img src={data.img} alt="images" className=' lg:max-w-[50%] lg:p-2 lg:hover:max-w-[60%] xs:max-w-[100%] xs:p-2 xs:hover:max-w-[60%] ' 
        />
        <p className='text-Charcoal lg:text-xl text-colortxt font-semibold hover:underline hover:cursor-pointer mt-2
        xs:text-xs'>{data.tag}</p>
      </div>
    ))}
    </div>

    </>
  )
}

export default Categories
