import React from "react";
import logo from "../../assets/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import {  faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faUserTie} from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex py-6 justify-between opacity-100 text-white border-b-gray-600 border-b-2 " id="nav">
      <div className="flex" id="navleft">
      <div className="w-24" id="logo">
        <Link to={"/"}><img src={logo} alt="logo"  className=""/></Link>
        <p className=""></p>
      </div>
      <div className="my-4 mr-8" id="left-menu">
        <ul className="flex list-none mx-2 ">
          <li className="px-2 mx-4 my-2"><Link to ="/store">Store</Link></li>
          <li className="px-2 mx-4 my-2"><Link to ="/store">Categories</Link></li>
          <li className="px-2 mx-4 my-2"><Link to ="/store">Sale</Link></li>
        </ul>
      </div>
      </div>
      <div id="navright" className="flex mx-9 my-4 mr-24">
      <div className="" id="right-menu">
        <ul className ="flex list-none mx-2">
          <li className="px-2 mx-4 my-2"><Link to ="/aboutus" >About</Link></li>
          <li className="px-2 mx-4 my-2"><Link to ="/contactus">Contact</Link></li>
        </ul>
      </div>
      <div className="px-2 py-2 my-0 bg-white text-black rounded ">
        <input type="text" placeholder="Search Products..." className="focus:outline-none "></input>
      </div>
      <div className="px-3 mx-1 rounded bg-button hover:bg-buttonhover ">
        <button className="text-center align-middle"> <FontAwesomeIcon icon={ faGreaterThan}/> </button>
      </div>
      <div className="px-2 text-2xl  mx-4 cursor-pointer hover:text-buttonhover "><Link to={"/cartpage"}><FontAwesomeIcon icon={faCartShopping}/></Link></div>
      <div className="px-2 text-2xl  mx-4 cursor-pointer hover:text-buttonhover "><FontAwesomeIcon icon={faUserTie}/></div>
      </div>
       
    </div>
  );
};

export default Navbar;
