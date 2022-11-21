import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ItemCards from "../Home Components/ItemCards";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div
      className="lg:mb-5 lg:mt-6 flex flex-col bg-background 
    xs:mb-3 xs:mt-3"
    >
      <div className="lg:mx-0 lg:py-2 lg:flex lg:flex-col lg:justify-center lg:items-center md:mx-20 xs:mx-5 bg-cream">
        <div
          id="secondary-text"
          className="text-xl my-2 font-poppins  font-semibold text-buttoncolor "
        >
          <h1>Aquire the Advance LifeStyle</h1>
        </div>
        <div
          id="Primary-text"
          className="lg:text-5xl lg:flex lg:justify-center lg:items-center font-bold font-poppins text-buttoncolor 
       xs:text-4xl"
        >
          <h1 className="">Grab The Deal</h1>
        </div>
      </div>
      <div id="blankgap" className="h-12"></div>
      <div className="flex justify-center mt-5 ">
        <ItemCards />
      </div>

      <div id="button " className="flex items-center justify-center">
        <button className="bg-buttoncolor text-buttontext px-5 py-2 mt-10 rounded-md border-gray-800 border-2 hover:bg-buttoncolorhover hover:text-cream">
          View All Products{" "}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Main;
