import React from 'react'
import product from '../../assets/product.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import Button from '../SharedComponents/Button'
const ProductView = () => {
  return (
    <div className='bg-midSkyBlue p-8'>
      <div className='lg:w-[90%] lg:h-[60vh] lg:flex lg:flex-row  lg:mx-16
      xs:w-[100%]  xs:flex xs:flex-col '>
        <div className='lg:w-[50%] lg:px-0 lg:p-0 md:w[100%] md:px-32 md:p-2 xs:w-[100%] xs:m-1 p-4'>
          <img src={product} alt="" className='lg:h-[60vh] xs:h-[30vh]'/>
        </div>
        <div className='flex flex-col lg:w-[40%] lg:h-[60vh] xs:h-[50vh] md:h-[30vh]'>
        <div className='w-full p-4 text-left overflow-auto relative'>
          <p className='text-base text-darkBlue font-semibold mb-2'>MacBook</p>
          <h1 className='text-4xl text-darkBlue font-semibold mb-2'>Apple MacBook Air Laptop</h1>
          <p className='text-base text-darkBlue font-semibold mb-2'><b className='text-3xl text-AirBlue'>$1824.17</b> & free shipping</p>
          <div className='border-b-2 border-lightSkyBlue mb-2'>
            <p className='text-base text-darkBlue font-base leading-8	'>
            Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
            </p>
          </div>
          <p className='text-base text-darkBlue font-semibold mb-4'>Category: Laptops</p>
          <div className='border-2 border-darkBlue relative -z-1 p-6 mb-2'>
            <h5 className='text-2xl text-darkBlue font-semibold absolute z-1 -top-5 bg-white px-2'>Guaranteed Safe Checkout</h5>
            <ul>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
            </ul>
          </div>
          
        </div>
        <div className='flex flex-col p-4 border-t-2 border-lightSkyBlue'>
            <div className='flex gap-4 mb-2'>
              <button className='border-2 border-lightSkyBlue p-2 px-4 rounded'>-</button>
              <span className='border-2 border-lightSkyBlue p-2 px-4 rounded'>1</span>
              <button className='border-2 border-lightSkyBlue p-2 px-4 rounded'>+</button>
            </div>
            <div className=''><Button props={'Add to cart'} /></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView