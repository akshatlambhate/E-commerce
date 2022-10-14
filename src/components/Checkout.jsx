import React from 'react'
import Button from './Button'
import { Outlet, Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className='p-8 text-left bg-midSkyBlue'>
      <h1 className='text-5xl font-mono font-semibold text-darkBlue mb-3 pl-8'>Checkout</h1>
      <div className='w-[100%] flex gap-4'>
        <div className='w-[60%]   p-8'>
            <form action="" className='flex flex-col justify-start text-left'>
            <h1 className='text-2xl text-darkBlue py-2'>Customer information</h1>
            <label htmlFor="" className='text-base text-darkBlue'>Email address </label>
            <input type="text" placeholder='Email address' className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2'/>
            <h1 className='text-2xl text-darkBlue py-2'>Billing details</h1>
            <div className='flex gap-4'>
                <div className='flex flex-col w-1/2'>
                <label htmlFor="" className='text-base text-darkBlue '>First name </label>
                <input type="text"  className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2' />
                </div>
                <div className='flex flex-col w-1/2'>
                <label htmlFor="" className='text-base text-darkBlue'>Last name </label>
                <input type="text" className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2' />
                </div>
            </div>
            <label htmlFor="" className='text-base text-darkBlue'>Company name(optional) </label>
            <input type="text"  className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2'/>
            <label htmlFor="" className='text-base text-darkBlue'>Country </label>
            <input type="text" placeholder='India' className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2' />
            <div className='flex gap-4'>
                <div className='flex flex-col  w-1/2'>
                <label htmlFor="" className='text-base text-darkBlue'>Street address </label>
                <input type="text" placeholder='House number and street name' className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2'/>
                </div>
                <div className='flex flex-col w-1/2'>
                <label htmlFor="" className='text-base text-darkBlue'>Apartment, suite, unit, etc. (optional) </label>
                <input type="text" placeholder='Apartment, suite, unit, etc. (optional)' className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2'/>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col w-1/3'>
                <label htmlFor="" className='text-base text-darkBlue'>Town / City </label>
                <input type="text" className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2' />
                </div>
                <div className='flex flex-col w-1/3'>
                <label htmlFor="" className='text-base text-darkBlue'>State </label>
                <input type="text" placeholder='Indore' className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2'/>
                </div>
                <div className='flex flex-col w-1/3'>
                <label htmlFor="" className='text-base text-darkBlue'>Zip code </label>
                <input type="text" className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2' />
                </div>
            </div>
            <label htmlFor="" className='text-base text-darkBlue'>Phone </label>
            <input type="number" className='text-sm p-1 mb-1 border-2 focus:outline-none focus:border-midSkyBlue' />

            <h1 className='text-2xl text-AirBlue py-2'>Additional information</h1>
            <label htmlFor="" className='text-base text-darkBlue'>Order notes (optional) </label>
            <textarea name="" id="" cols="30" rows="3" className='text-sm p-1 mb-1 border-2 text-AirBlue focus:outline-none focus:border-midSkyBlue'></textarea>
            <p className='text-sm text-AirBlue my-1'>Have a coupon?</p>
            <div className='flex gap-6'>
                <input type="text" placeholder='Coupon code' className='text-sm p-1 mb-1 w-[60%] focus:outline-none focus:border-midSkyBlue border-2'/>
                <Button name={'Apply'} />
            </div>
            <h1 className='text-2xl text-AirBlue py-2'>Payment</h1>
            <div className='p-4 border-t-2 border-darkBlue bg-slate-300'>
                <p className='text-sm text-darkBlue'>
                Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
                </p>
            </div>
            <Link to={'/checkoutpage'}><Button name={'Proceed to checkout'} /></Link>
            </form>            
        </div>
        <div className='w-[40%] p-8'>
            <h1 className='text-2xl font-mono font-semibold text-darkBlue mb-3'>Your order</h1>
            <div className='flex flex-col border-2 border-lightSkyBlue rounded'>
                <div className='flex justify-between border-b-2 border-lightSkyBlue p-4 text-darkBlue'>
                    <h1>Product</h1>
                    <h1>Subtotal</h1>
                </div>
                <div className='flex justify-between border-b-2 border-lightSkyBlue p-4 text-darkBlue'>
                    <h1>Simple black in wood chair × 2</h1>
                    <h1>$197.98</h1>
                </div>
                <div className='flex justify-between border-b-2 border-lightSkyBlue p-4 text-darkBlue'>
                    <h1>Subtotal</h1>
                    <h1>$197.98</h1>
                </div>
                <div className='flex justify-between border-b-2 border-lightSkyBlue p-4 text-darkBlue font-bold text-2xl'>
                    <h1>Total</h1>
                    <h1>$197.98</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
