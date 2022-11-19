import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {  useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ItemCards = () => {
  // try {
  //   getResult();
  //   } catch(e) {
  //   console.log(e)
  //   }
  const [result,setResult] = useState([])
  async function getResult(){
    //var url = 'https://dp-backend-e-comm.herokuapp.com/api/products';
    const res = await axios.get('https://dp-backend-e-comm.herokuapp.com/api/products');
    setResult(res.data.data);
    console.log(res.data.data);
  }
  useEffect(()=>{
    getResult();

  },[])
  // setTimeout(getResult,2000)
  // getResult();
  return (
    <div className=' lg:grid lg:grid-cols-4 gap-10
    xs:grid xs:grid-cols-2 p-4'>
     {result.map((response)=> (
     <div  className=' group flex flex-col gap-1 shadow-lg shadow-slate-600 items-center  cursor-pointer basis-1/4 w-64'>
        <div className='absolute text-right md:w-60 md:pr-2 xs:w-48 xs:pr-6'><FontAwesomeIcon icon={faHeart}  className='text-2xl mt-4 text-buttontexthover hover:text-red-600' /></div>
       <div ><img src={response.productImages[0].productImageUrl} className="w-40 h-52"/>
        <div id='quick-view' className='-translate-y-6 bg-stone-700 text-white opacity-0 group-hover:opacity-100'>
          <h1 className='hover:bg-black text-center'><Link to={`/productview/${response.productId}`}>Quick View</Link></h1>
        </div>
        </div>
        <div id="item-name" className='text-lg font-bold -mt-5 font-serif '>{response.productName}</div>
        <div id="item-price" className='font-bold text-primary text-lg'>{response.originalPrice}</div>
        <div id="item-rating" className='mb-3'>
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
        <FontAwesomeIcon icon={faStar} className="text-black hover:text-yellow-500 " />
      </div>
      </div>
      ))}
    </div>
  )
}

export default ItemCards
