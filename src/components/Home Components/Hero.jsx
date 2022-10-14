import React from "react";
import Navbar from "../SharedComponents/Navbar";
import background from "../../assets/hero.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowTurnDownRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover h-screen opacity-80"
    >
      <Navbar />
      <div
        id="hero-text "
        className="flex flex-col h-36"
      ></div>
      <div id="starting text">
        <h1 className="text-white text-lg  ml-40 mb-12">
          surrounded by technology
        </h1>
      </div>
      <div id="main text">
        <h1 className="text-white text-6xl ml-40 ">
          Get Awsome Deals on All <br></br>Electronic Products.
        </h1>
      </div>
      <div id="hero-button">
        <button className="bg-button ml-40 px-14 py-3 mt-5 rounded-lg border-gray-800 border-2 hover:bg-buttonhover ">
          SHOP NEW TECH <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-turn-down-right" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
