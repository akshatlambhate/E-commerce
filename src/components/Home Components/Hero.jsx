import React from "react";
import Navbar from "../SharedComponents/Navbar";
import background04 from "../../assets/background04.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div

    >
      <Navbar />
      <div className="md:py-24 md:px-16 lg:py-12 lg:px-0 xs:py-12  w-full h-[70vh]"
       style={{ backgroundImage: `url(${background04})` }}
    >
      <div
        id="hero-text "
        className="flex flex-col py-2"
      >
      <div id="starting text">
        <h1 className="text-cream font-extrabold font-poppins lg:text-xl lg:ml-24 lg:mb-6 
        xs:text-base xs:ml-5 xs:mb-6">
          surrounded by technology
        </h1>
      </div>
      <div id="main text">
        <h1 className="text-cream font-semibold lg:text-6xl lg:ml-24 font-poppins 
        xs:text-4xl xs:ml-5" style={{textShadow: '1px 1px 1px #fdf0d5'}}>
          Get Awsome Deals on <br></br>All Electronic Products.
        </h1>
      </div>
      <div className="text-cream font-semibold lg:text-xl lg:ml-28  lg:my-9 font-poppins 
        xs:text-4xl xs:ml-5">
        <ul className="list-disc">
        <li>Fast Delivery</li>
        <li>Easy Return</li>
        <li>Customer Satifaction</li>
        <li>24/7 support</li>
        
        </ul>
        
      </div>
      <div id="hero-button ">
        <button className="bg-buttontext lg:ml-24 px-5 lg:mt-5 py-2 lg:Smt-5 rounded-lg  text-buttoncolor hover:bg-buttoncolorhover hover:text-cream
        xs:ml-5 xs:mt-3">
          SHOP NEW TECH <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
