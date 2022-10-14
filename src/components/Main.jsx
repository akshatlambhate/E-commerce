import React from 'react'
import Navbar from '../components/SharedComponents/Navbar'
import ItemCards from './ItemCards'

const Main = () => {
  return (
    <div className='mb-10 flex flex-col '>
       <div className='mx-44'><div id='secondary-text' className='text-xl my-3 font-mono font-semibold'>
         <h1>Aquire the Advance LifStyle</h1>
       </div>
       <div id='Primary-text' className='text-5xl font-bold font-serif'>
         <h1>Grab The Deal</h1>
         </div>
         </div>
         <div id="blankgap" className='h-12'>
             
         </div>
         <div className='justify-center mt-5'>
            <ItemCards />

         </div>
        
         <div id="button " className='flex items-center justify-center'>
        <button className="bg-button px-14 py-3 mt-5 rounded-lg border-gray-800 border-2 hover:bg-buttonhover ">
                View All Products
            </button>
         </div>
    </div>
  )
}

export default Main
