import React from 'react'
import product from '../assests/product.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
const ProductView = () => {
  return (
    <div>
      <div className='w-[90%] h-[60vh] flex m-6 mx-4'>
        <div className='[w-60%]'>
          <img src={product} alt="" className='h-[60vh]'/>
        </div>
        <div className='w-[40%] p-4 text-left overflow-auto border-2 border-AntiFlashWhite'>
          <p className='text-base text-AirBlue font-semibold mb-2'>MacBook</p>
          <h1 className='text-4xl text-AirBlue font-semibold mb-2'>Apple MacBook Air Laptop</h1>
          <p className='text-base text-AirBlue font-semibold mb-2'><b className='text-3xl text-AirBlue'>$1824.17</b> & free shipping</p>
          <div className='border-b-2 border-AirBlue mb-2'>
            <p className='text-base text-AirBlue font-base leading-8	'>
            Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
            </p>
          </div>
          <p className='text-base text-AirBlue font-semibold mb-4'>Category: Laptops</p>
          <div className='border-2 border-AirBlue relative -z-1 p-6 mb-2'>
            <h5 className='text-2xl text-AirBlue font-semibold absolute z-1 -top-5 bg-white px-2'>Guaranteed Safe Checkout</h5>
            <ul>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
              <li><FontAwesomeIcon icon={faCcVisa} className='text-3xl' /></li>
            </ul>
          </div>
          <div className=''>
            <div className='flex gap-4 mb-2'>
              <button className='border-2 border-Charcoal p-2 px-4 rounded'>-</button>
              <span className='border-2 border-Charcoal p-2 px-4 rounded'>1</span>
              <button className='border-2 border-Charcoal p-2 px-4 rounded'>+</button>
            </div>
            <button className='bg-AirBlue text-white font-bold hover:bg-AntiFlashWhite hover:text-AirBlue rounded px-4 py-2'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView
