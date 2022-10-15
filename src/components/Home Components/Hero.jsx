import React from "react";
import Navbar from "../SharedComponents/Navbar";
import background from "../../assets/background.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover h-screen"
    >
      <Navbar />
      <div
        id="hero-text "
        className="flex flex-col h-36"
      ></div>
      <div id="starting text">
        <h1 className="text-buttoncolor font-extrabold font-poppins text-xl ml-40 mb-12">
          surrounded by technology
        </h1>
      </div>
      <div id="main text">
        <h1 className="text-buttoncolor font-semibold text-6xl ml-40 font-poppins " style={{textShadow: '1px 1px 1px #fdf0d5'}}>
          Get Awsome Deals on All <br></br>Electronic Products.
        </h1>
      </div>
      <div id="hero-button">
        <button className="bg-buttoncolor ml-40 px-5 mt-5 py-2 Smt-5 rounded-lg border-buttoncolorhover text-buttontext border-2 hover:bg-buttoncolorhover hover:text-buttoncolor">
          SHOP NEW TECH <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
