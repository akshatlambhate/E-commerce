import React from "react";
import Navbar from "../SharedComponents/Navbar";
import background from "../../assets/background.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover lg:h-screen md:h-[50vh]"
    >
      <Navbar />
      <div className="md:py-24 md:px-16 lg:py-24 lg:px-0 xs:py-12">
      <div
        id="hero-text "
        className="flex flex-col py-8"
      >
      <div id="starting text">
        <h1 className="text-buttoncolor font-extrabold font-poppins lg:text-xl lg:ml-40 lg:mb-12 
        xs:text-base xs:ml-5 xs:mb-6">
          surrounded by technology
        </h1>
      </div>
      <div id="main text">
        <h1 className="text-buttoncolor font-semibold lg:text-6xl lg:ml-40 font-poppins 
        xs:text-4xl xs:ml-5" style={{textShadow: '1px 1px 1px #fdf0d5'}}>
          Get Awsome Deals on All <br></br>Electronic Products.
        </h1>
      </div>
      <div id="hero-button ">
        <button className="bg-buttoncolor lg:ml-40 px-5 lg:mt-5 py-2 lg:Smt-5 rounded-lg border-buttoncolorhover text-buttontext border-2 hover:bg-buttoncolorhover hover:text-buttoncolor 
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
