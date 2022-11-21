import React from 'react'
import Lottie from 'lottie-react'
import { dataCat } from '../../utils/CategoriesData.jsx'
const Categories = () => {
  return (
    <>
    <div className='lg:flex lg:flex-row lg:px-12 py-6 lg:gap-12  w-[100%]
    xs:grid xs:grid-cols-3 xs:grid-auto xs:gap-4 xs:p-8
    lg:h-[35vh]
    xs:h-[50vh] '>
    {dataCat.map((data,i)=>(
      <div className='flex flex-col lg:w-[40%] text-3xl items-center xs:w-[80%]
      '>
        <Lottie animationData={data.img} className='lg:w-24  lg:hover:max-w-[60%] xs:max-w-[100%] xs:p-2 xs:hover:max-w-[60%] '></Lottie>
        <p className='text-Charcoal lg:text-lg text-buttoncolor font-semibold hover:underline hover:cursor-pointer mt-2
        xs:text-xs hover:text-buttoncolorhover'>{data.tag}</p>
      </div>
    ))}
    </div>

    </>
  )
}

export default Categories
