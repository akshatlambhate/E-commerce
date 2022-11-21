import React from "react";
import { infoBarData } from "../../utils/InfoBarData";

const InfoBar = () => {
  return (
    <div>
      <div id="background" className="lg:flex lg:mb-8 lg:flex-wrap lg:gap-36 lg:justify-center lg:py-16 text-center bg-buttoncolor lg:mt-10 shadow-lg shadow-gray-500 
      xs:grid xs:grid-cols-2 xs:p-4
      md:grid md:grid-cols-4">
        {infoBarData.map((data)=>(
      <div id="free-shipping" className="flex flex-col items-center">
        <img src={data.icon} className="lg:w-28 lg:hover:w-24 cursor-pointer
        xs:w-14 xs:hover:w-12" />

          <h1 className="lg:text-2xl font-mono font-semibold text-buttontext cursor-pointer mt-5 text-center hover:text-stone-400
          xs:text-base">{data.name}</h1>
        </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBar;
