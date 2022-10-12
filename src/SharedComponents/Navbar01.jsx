import React from 'react'
import logo from "../assests/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import {  faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faUserTie} from '@fortawesome/free-solid-svg-icons';

const Navbar01 = () => {
  return (
    <div className="flex py-6 justify-between opacity-100 text-black border-b-gray-600 border-b-2 " id="nav">
    <div className="flex" id="navleft">
    <div className="w-24" id="logo">
      <img src={logo} alt="logo"  className=""/>
      <p className=""></p>
    </div>
    <div className="my-4 mr-8" id="left-menu">
      <ul className="flex list-none mx-2 ">
        <li className="px-2 mx-4 my-2">Store</li>
        <li className="px-2 mx-4 my-2">Categories</li>
        <li className="px-2 mx-4 my-2">Sale</li>
      </ul>
    </div>
    </div>
    <div id="navright" className="flex mx-9 my-4 mr-24">
    <div className="" id="right-menu">
      <ul className ="flex list-none mx-2">
        <li className="px-2 mx-4 my-2">About</li>
        <li className="px-2 mx-4 my-2">Contact</li>
      </ul>
    </div>
    <div className="px-2 py-2 my-0 bg-white text-black rounded shadow-sm shadow-slate-700 ">
      <input type="text" placeholder="Search Products..." className="focus:outline-none "></input>
    </div>
    <div className="px-3 mx-1 rounded bg-button hover:bg-buttonhover ">
      <button className="text-center align-middle"> <FontAwesomeIcon icon={ faGreaterThan}/> </button>
    </div>
    <div className="px-2 text-2xl  mx-4 cursor-pointer hover:text-buttonhover "><FontAwesomeIcon icon={faCartShopping}/></div>
    <div className="px-2 text-2xl  mx-4 cursor-pointer hover:text-buttonhover "><FontAwesomeIcon icon={faUserTie}/></div>
    </div>
     
  </div>
  )
}

export default Navbar01
