import React from 'react'
import Button from '../components/SharedComponents/Button'
import { Outlet, Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className='p-8 text-left bg-background '>
      <h1 className='text-5xl font-mono font-semibold text-colortxt mb-3 '>Checkout</h1>
      <div className='w-[100%] lg:flex lg:flex-row xs:flex xs:flex-col gap-4 bg-parentdiv'>
        <div className='lg:w-[60%] xs:w-[100%]  lg:p-8 xs:p-8'>
            <form action="" className='flex flex-col justify-start text-left'>
            <h1 className='text-2xl text-colortxt py-2'>Customer information</h1>
            <label htmlFor="" className='text-base text-colortxt'>Email address </label>
            <input type="text" placeholder='Email address' className='text-sm p-1 mb-1 focus:outline-none focus:border-midSkyBlue border-2'/>
            <h1 className='text-2xl text-colortxt py-2'>Billing details</h1>
            <div className='flex gap-4'>
                <div className='flex flex-col w-1/2'>
                <label htmlFor="" className='text-base text-colortxt '>First name </label>
                <input type="text"  className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2' />
                </div>
                <div className='flex flex-col w-1/2'>
                <label htmlFor="" className='text-base text-colortxt'>Last name </label>
                <input type="text" className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2' />
                </div>
            </div>
            <label htmlFor="" className='text-base text-colortxt'>Company name(optional) </label>
            <input type="text"  className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2'/>
            <label htmlFor="" className='text-base text-colortxt'>Country </label>
            <input type="text" placeholder='India' className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2' />
            <div className='flex gap-4'>
                <div className='flex flex-col  w-1/2'>
                <label htmlFor="" className='text-base text-colortxt'>Street address </label>
                <input type="text" placeholder='House number and street name' className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2'/>
                </div>
                <div className='flex flex-col w-1/2'>
                <label htmlFor="" className='text-base text-colortxt'>Apartment, suite, unit, etc. (optional) </label>
                <input type="text" placeholder='Apartment, suite, unit, etc. (optional)' className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2'/>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col w-1/3'>
                <label htmlFor="" className='text-base text-colortxt'>Town / City </label>
                <input type="text" className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2' />
                </div>
                <div className='flex flex-col w-1/3'>
                <label htmlFor="" className='text-base text-colortxt'>State </label>
                <input type="text" placeholder='Indore' className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2'/>
                </div>
                <div className='flex flex-col w-1/3'>
                <label htmlFor="" className='text-base text-colortxt'>Zip code </label>
                <input type="text" className='text-sm p-1 mb-1 focus:outline-none focus:border-colortxt border-2' />
                </div>
            </div>
            <label htmlFor="" className='text-base text-colortxt'>Phone </label>
            <input type="number" className='text-sm p-1 mb-1 border-2 focus:outline-none focus:border-colortxt' />

            <h1 className='text-2xl text-colortxt py-2'>Additional information</h1>
            <label htmlFor="" className='text-base text-colortxt'>Order notes (optional) </label>
            <textarea name="" id="" cols="30" rows="3" className='text-sm p-1 mb-1 border-2 text-colortxt focus:outline-none focus:border-colortxt'></textarea>
            <p className='text-sm text-colortxt my-1'>Have a coupon?</p>
            <div className='flex gap-6'>
                <input type="text" placeholder='Coupon code' className='text-sm p-1 mb-1 w-[60%] focus:outline-none focus:border-colortxt border-2'/>
                <Button name={'Apply'} />
            </div>
            <h1 className='text-2xl text-colortxt py-2'>Payment</h1>
            <div className='p-4 border-t-2 border-colortxt bg-childdiv'>
                <p className='text-sm text-colortxt'>
                Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
                </p>
            </div>
            <div className='w-[100%]'><Button name={'Proceed to checkout'} /></div>
            
            </form>            
        </div>
        <div className='lg:w-[40%] xs:w-[100%] p-8'>
            <h1 className='text-2xl font-mono font-semibold text-colortxt mb-3'>Your order</h1>
            <div className='flex flex-col border-2 border-colortxt rounded'>
                <div className='flex justify-between border-b-2 border-colortxt p-4 text-colortxt'>
                    <h1>Product</h1>
                    <h1>Subtotal</h1>
                </div>
                <div className='flex justify-between border-b-2 border-colortxt p-4 text-colortxt'>
                    <h1>Simple black in wood chair × 2</h1>
                    <h1>$197.98</h1>
                </div>
                <div className='flex justify-between border-b-2 border-colortxt p-4 text-colortxt'>
                    <h1>Subtotal</h1>
                    <h1>$197.98</h1>
                </div>
                <div className='flex justify-between border-b-2 border-colortxt p-4 text-colortxt font-bold text-2xl'>
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