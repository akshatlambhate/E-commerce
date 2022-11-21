import React from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="lg:flex lg:py-3 lg:justify-between xs:flex xs:justify-between xs:h-50vh opacity-100 text-white border-b-gray-600 border-b-2 xs:p-2
      bg-[#fefae0]"
      id="nav"
    >
      <div className="flex xs:relative " id="navleft ">
        <div className="lg:w-44 absolute lg:-mt-14 xs:w-20 xs:-mt-7" id="logo">
          <Link to={"/"}>
            <img src={logo2} alt="logo" className="" />
          </Link>
          <p className=""></p>
        </div>
        <div className="lg:flex xs:hidden my-4  ml-44" id="left-menu">
          <ul className="lg:flex list-none ">
            <li className="px-2 mx-4 my-2 font-poppins text-buttoncolor font-bold hover:text-buttoncolorhover">
              <Link to="/store">Store</Link>
            </li>
            <li className="px-2 mx-4 my-2 font-poppins text-buttoncolor font-bold hover:text-buttoncolorhover">
              <Link to="/store">Categories</Link>
            </li>
            <li className="px-2 mx-4 my-2 font-poppins text-buttoncolor font-bold hover:text-buttoncolorhover">
              <Link to="/store">Sale</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="navright" className="lg:flex  my-4 mr-8 xs:hidden">
        <div className="" id="right-menu">
          <ul className="lg:flex list-none mx-2 xs:hidden">
            <li className="px-2 mx-4 my-2 font-poppins text-buttoncolor font-bold hover:text-buttoncolorhover">
              <Link to="/aboutus">About</Link>
            </li>
            <li className="px-2 mx-4 my-2 font-poppins text-buttoncolor font-bold hover:text-buttoncolorhover">
              <Link to="/contactus">Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" px-2 py-2 my-0 bg-white text-black rounded shadow-md shadow-stone-600">
          <input
            type="text"
            placeholder="Search Products..."
            className="focus:outline-none"
          ></input>
        </div>
        <div className="  px-3 mx-1 rounded bg-buttoncolor text-cream hover:bg-cream hover:text-buttoncolor">
          <button className="text-center flex justify-center flex-col items-center h-10">
            <FontAwesomeIcon icon={faSearch} />{" "}
          </button>
        </div>
        <div className="px-3 text-3xl text-buttoncolor  mx-2 cursor-pointer hover:text-buttoncolorhover ">
          <Link to={"/cartpage"}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
        <div className="px-3 text-3xl  text-buttoncolor mx-2 cursor-pointer hover:text-buttoncolorhover">
          <Link to={"/signuppage"}>
            <FontAwesomeIcon icon={faUserTie} />
          </Link>
        </div>
      </div>
      <div className="sm:contents lg:hidden px-2 text-2xl  text-buttoncolor mx-4 cursor-pointer hover:text-buttoncolorhover">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
