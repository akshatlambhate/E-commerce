import React from 'react'
import { useState } from 'react';
import cartImg from '../../assets/iphone.png'
const CartItem = () => {
    const [count, setCount] = useState(1);
    let price = 1234;
    let total = count * price;
  return (
    <div>
              <table className='lg:w-full border-2 border-colortxt xs:w-[60%]  '>
                  <thead className='border-b-2 border-colortxt mb-8'>
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
                          <td className='m-4'><img src={cartImg} alt="" className='w-[40px] h-[40px]' /></td>
                          <td className='p-4'>Phone</td>
                          <td className='p-4'>$1234</td>
                          <td className='p-4'>
                              <div>
                                  <div className='flex gap-4 mb-2 mt-2 '>
                                      <button className='border-2 border-gray-400 p-2 px-4 rounded'
                                          disabled={count <= 1}
                                          onClick={(e) => { e.preventDefault(); setCount(count - 1) }}>-</button>
                                      <span className='border-2 border-gray-400 p-2 px-4 rounded'>{count}</span>
                                      <button className='border-2 border-gray-400 p-2 px-4 rounded'
                                          onClick={(e) => { e.preventDefault(); setCount(count + 1) }}

                                      >+</button>
                                  </div>
                              </div>
                          </td>
                          <td className='p-4'>${total}</td>
                      </tr>
                  </tbody>
              </table>
    </div>
  )
}

export default CartItem
