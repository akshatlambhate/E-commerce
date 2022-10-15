import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cartImg from '../assets/iphoneCartImg.png'
import Button from './SharedComponents/Button';
const Cart = () => {
  const [count,setCount] = useState(1);
  let price = 1234;
  let total = count * price;
  return (
    <div className='p-4 text-left'>
      <div>
        <h1 className='text-5xl font-mono font-semibold text-darkBlue mb-3'>Cart</h1>
        <div className='w-[100%] lg:flex lg:flex-row gap-2 p-8
        xs:flex xs:flex-col bg-parentdiv border-t-2 border-colortxt' >
          <form action="" className='lg:w-[60%] xs:w-[100%] overflow-auto'>
            <table className='lg:w-full border-2 border-childdiv xs:w-[60%]  '>
              <thead className='border-b-2 border-childdiv mb-8'>
                <tr className=''>
                  <th className="product-remove p-4 ">&nbsp;</th>
                  <th className="product-thumbnail p-4">&nbsp;</th>
                  <th className="product-product p-4 ">Product</th>
                  <th className="product-price p-4 ">Price</th>
                  <th className="product-quantity p-4">Quantity</th>
                  <th className="product-total p-4">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className='items-center'>
                  <td className='p-4'>x</td>
                  <td className='m-4'><img src={cartImg} alt="" className='w-[40px] h-[40px]'/></td>
                  <td className='p-4'>Phone</td>
                  <td className='p-4'>$1234</td>
                  <td className='p-4'>
                    <div>
                      <div className='flex gap-4 mb-2 mt-2 '>
                        <button className='border-2 border-gray-400 p-2 px-4 rounded'
                        disabled={count<=1}
                        onClick={(e)=> {e.preventDefault(); setCount(count-1)}}>-</button>
                        <span className='border-2 border-gray-400 p-2 px-4 rounded'>{count}</span>
                        <button className='border-2 border-gray-400 p-2 px-4 rounded'
                         onClick={(e)=> {e.preventDefault(); setCount(count+1)}}
              
                        >+</button>
                      </div>
                    </div>
                  </td>
                  <td className='p-4'>${total}</td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className='lg:w-[40%] p-4 flex flex-col border-2 border-gray-400
          xs:w-[100%]'>
            <div className='text-2xl font-mono font-semibold text-darkBlue mb-3 border-b-2 border-gray-400'>Cart</div>
            <div className='flex justify-between text-xl'>
              <h1>Subtotal</h1>
              <h1 className='font-bold'>${total}</h1>
            </div>
            <div className='flex justify-between text-xl'>
              <h1>Total</h1>
              <h1 className='font-bold'>${total}</h1>
            </div>
            <p className='text-sm text-AirBlue my-1'>Have a coupon?</p>
            <div className='flex gap-6'>
              <input type="text" placeholder='Coupon code' className='text-base h-10 p-1 my-2 w-[60%] focus:outline-none focus:border-Charcoal border-2' />
              <Button name={'Apply'}  />
            </div>
            <Button name={'Proceed to checkout'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
