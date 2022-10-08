import React from "react";
import Navbar from "./Navbar";
import background from "../assets/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        className="flex flex-col align-middle justify-center h-36"
      ></div>
      <div id="starting text">
        <h1 className="text-white text-lg align-middle ml-40 mb-12">
          {" "}
          surrounded by technology
        </h1>
      </div>
      <div id="main text">
        <h1 className="text-white text-6xl align-middle ml-40 max-w-xl">
          Get Awsome Deals on All Electronic Products.
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
