import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cartImg from '../../assets/iphoneCartImg.png'
import Button from '../SharedComponents/Button';
import { Outlet, Link } from "react-router-dom";
const Cart = () => {
  return (
    <div>
      <div>
        <h1>Cart</h1>
        <div className='w-[100%] flex flex-row' >
            <form action="" className='w-[60%]'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className="product-remove">&nbsp;</th>
                            <th className="product-thumbnail">&nbsp;</th>
                            <th className="product-product">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='items-center'>
                            <td>x</td>
                            <td><img src={cartImg} alt="" className='w-[40px] h-[40px]'/></td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
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
              <p className='text-sm text-darkBlue my-1'>Have a coupon?</p>
            <div className='flex gap-6'>
                <input type="text" placeholder='Coupon code' className='text-sm p-1 mb-1 w-[60%] focus:outline-none focus:border-midSkyBlue border-2'/>
                <Button name={'Apply'} />
            </div>
            <Link to={'/checkoutpage'}><Button name={'Proceed to checkout'} /></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
