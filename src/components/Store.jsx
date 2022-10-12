import React from 'react'
import ItemCards from './ItemCards'

const Store = () => {
  return (
    <div>
      <div className='flex gap-5 justify-center mx-10 mt-5'>
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
         </div>
         <div className='flex gap-5 justify-center mx-10 mt-10'>
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
         </div>
         <div className='flex gap-5 justify-center mx-10 mt-5'>
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
         </div>
         <div className='flex gap-5 justify-center mx-10 mt-10'>
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
         </div>
    </div>
  )
}

export default Store
