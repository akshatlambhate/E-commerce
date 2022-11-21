import React, { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cartImg from '../../assets/iphone.png'
// import Button from '../SharedComponents/Button';
import { Outlet, Link } from "react-router-dom";
import CartItem from './CartItem';
import axios from 'axios';
import Lottie from 'lottie-react'
import cart from '../../assets/cart.json'
const Cart = () => {
  const [count,setCount] = useState(1);
  let price = 1234;
  let total = count * price;
  async function getCartItems() {
      //var url = 'https://dp-backend-e-comm.herokuapp.com/api/products';
      const res = await axios.get('https://dp-backend-e-comm.herokuapp.com/api/user/cart');
      // localStorage.setItem('auth', res.data.authenticated);
      console.log(res);
    }
  useEffect(() => {
    getCartItems();

  }, [])
  return (
    <div className='p-4 text-left h-[80vh]'>
      <div className=''>
        <div className='flex justify-center'>
        <Lottie animationData={cart} className='w-32'></Lottie>
        <h1 className='text-5xl font-mono font-semibold text-darkBlue mb-3 flex items-center'>Cart</h1></div>
        <div className='w-[100%] lg:flex lg:flex-row gap-2 p-8
        xs:flex xs:flex-col bg-buttoncolor border-t-2 border-background text-cream' >
          <form action="" className='lg:w-[60%] xs:w-[100%] overflow-auto'>
          <CartItem />
          </form>
          <div className='lg:w-[40%] p-4 flex flex-col border-2 border-background text-cream
          xs:w-[100%]'>
            <div className='text-2xl font-mono font-semibold text-darkBlue mb-3 border-b-2 border-background text-cream'>Cart</div>
            <div className='flex justify-between text-xl'>
              <h1>Subtotal</h1>
              <h1 className='font-bold '>${total}</h1>
            </div>
            <div className='flex justify-between text-xl'>
              <h1>Total</h1>
              <h1 className='font-bold text-buttoncolorhover'>${total}</h1>
            </div>
            <p className='text-sm text-AirBlue my-1'>Have a coupon?</p>
            <div className='flex gap-6'>
              <input type="text" placeholder='Coupon code' className='text-base h-10 p-1 my-2 w-[60%] focus:outline-none focus:border-Charcoal border-2' />
              <button className=' lg:my-2 bg-cream lg:text-base text-buttoncolor hover:bg-buttoncolorhover hover:text-cream border-none rounded p-2 w-[40%] font-bold hover:text-AirBlue hover:bg-AntiFlashWhite
      xs:my-1 xs:text-sm ' >Apply</button>
            </div>
            <Link to={'/checkoutpage'}><button className='lg:my-2 bg-cream lg:text-base text-buttoncolor hover:bg-buttoncolorhover hover:text-cream border-none rounded p-2 w-[40%] font-bold hover:text-AirBlue hover:bg-AntiFlashWhite
      xs:my-1 xs:text-sm '>Proceed to checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart