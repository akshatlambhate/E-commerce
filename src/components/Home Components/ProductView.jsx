import React from 'react'
import product from '../../assets/product.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import Button from '../SharedComponents/Button'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../Cart Component/CartContext'
import { axiosInstance } from "../../utils/apiFetch";

const ProductView = () => {
  
  const [productDetails, setProductDetails] = useState({})
  const [productFetch, setProductFetch] = useState(true)
  const [productNAME,setProductName] = useState("")
  const [productAmount,setproductAmount] = useState(0)
  const addToCart = useCartContext();

  let { productId } = useParams()
  async function getProductDetails() {
    setProductFetch(true)
    // const url = "https://dp-backend-e-comm.herokuapp.com/api/products"
    const res = await axios.get(`https://dp-backend-e-comm.herokuapp.com/api/products/?productId=${productId}`)
    setProductDetails(res.data.data)
    setProductName(res.data.data.productName)
    setproductAmount(res.data.data.originalPrice)
    console.log(res.data.data)
    setProductFetch(false)
  }
  const ADDToCart = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post('/user/cart', productId);
    console.log(response);
    // localStorage.setItem("myObject", JSON.stringify(response.config.data));

  }

  let id = productId;
  useEffect(() => {
    getProductDetails()
    ADDToCart()
  }, [])
  return (
    <div className='bg-midSkyBlue p-8'>
      {productFetch ? <div>loading...</div> :
        <div className='lg:w-[90%] lg:h-[60vh] lg:flex lg:flex-row  lg:mx-16
      xs:w-[100%]  xs:flex xs:flex-col '>
          <div className='lg:w-[50%] lg:px-0 lg:p-0 md:w[100%] md:px-32 md:p-2 xs:w-[100%] xs:m-1 p-4'>
            <img src={productDetails.productImages[0].productImageUrl} alt="" className='lg:h-[60vh] xs:h-[30vh]' />
          </div>
          <div className='flex flex-col lg:w-[40%] lg:h-[60vh] xs:h-[50vh] md:h-[30vh]'>
            <div className='w-full p-4 text-left overflow-auto relative'>
              <p className='text-base text-darkBlue font-semibold mb-2'>Electronic Device</p>
              <h1 className='text-4xl text-darkBlue font-semibold mb-2'>{productDetails.productName}</h1>
              <p className='text-base text-darkBlue font-semibold mb-2'><b className='text-3xl text-AirBlue'>{productDetails.originalPrice}</b> & free shipping</p>
              <div className='border-b-2 border-lightSkyBlue mb-2'>
                <p className='text-base text-darkBlue font-base leading-8	'>
                  {productDetails.description}
                </p>
              </div>
              <p className='text-base text-darkBlue font-semibold mb-4'>Category:{productDetails.productName} </p>
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
              <div className=''><Link to='/cartpage'><Button props={'Add to cart'}  /></Link></div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductView