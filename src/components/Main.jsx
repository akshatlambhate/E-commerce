import React from 'react'
import Navbar from './Navbar'
import ItemCards from './ItemCards'

const Main = () => {
  return (
    <div className='mb-10'>
       <div id='secondary-text' className='text-xl my-3 font-mono font-semibold'>
         <h1>Aquire the Advance LifStyle</h1>
       </div>
       <div id='Primary-text' className='text-3xl font-bold font-serif'>
         <h1>Grab The Deal</h1>
         </div>
         <div id="blankgap" className='h-12'>
             
         </div>
         <div className='flex gap-5 justify-around justify-center mx-10 mt-5'>
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
         </div>
         <div className='flex gap-5 justify-around justify-center mx-10 mt-10'>
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
            <ItemCards />
         </div>
         <div id="button">
        <button className="bg-button  px-14 py-3 mt-5 rounded-lg border-gray-800 border-2 hover:bg-buttonhover ">
                View All Products
            </button>
         </div>
    </div>
  )
}

export default Main
