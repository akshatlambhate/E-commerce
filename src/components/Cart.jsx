import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cartImg from '../assets/iphoneCartImg.png'
const Cart = () => {
  return (
    <div className='p-4'>
      <div>
        <h1>Cart</h1>
        <div className='w-[100%] flex flex-row' >
          <form action="" className='w-[60%] '>
            <table className='w-full border-2 border-gray-400'>
              <thead className='border-b-2 border-gray-400 mb-8'>
                <tr>
                  <th className="product-remove ">&nbsp;</th>
                  <th className="product-thumbnail ">&nbsp;</th>
                  <th className="product-product ">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-total">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className='items-center'>
                  <td>x</td>
                  <td><img src={cartImg} alt="" className='w-[40px] h-[40px]' /></td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>
                    <div>
                      <div className='flex gap-4 mb-2 justify-center items-start'>
                        <button className='border-2 border-gray-400 p-2 px-4 rounded'>-</button>
                        <span className='border-2 border-gray-400 p-2 px-4 rounded'>1</span>
                        <button className='border-2 border-gray-400 p-2 px-4 rounded'>+</button>
                      </div>
                    </div>
                  </td>
                  <td>Total</td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className='w-[40%]'>
            <div>Cart</div>
            <div>
              <h1>Subtotal</h1>
              <h1>$345</h1>
            </div>
            <div>
              <h1>Total</h1>
              <h1>$345</h1>
            </div>
            <p className='text-sm text-AirBlue my-1'>Have a coupon?</p>
            <div className='flex gap-6'>
              <input type="text" placeholder='Coupon code' className='text-sm p-1 mb-1 w-[60%] focus:outline-none focus:border-Charcoal border-2' />
              <button className='bg-darkBlue text-midSkyBlue text-base p-1 px-4 font-semibold hover:bg-midSkyBlue hover:text-darkBlue rounded'>Apply</button>
            </div>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
