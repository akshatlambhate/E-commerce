import React from "react";
import { infoBarData } from "../../utils/InfoBarData";

const InfoBar = () => {
  return (
    <div>
      <div id="background" className="flex flex-wrap gap-36 justify-center py-16 text-center bg-buttoncolor mt-10 shadow-lg shadow-gray-500 ">
        {infoBarData.map((data)=>(
      <div id="free-shipping" className="flex flex-col items-center">
        <img src={data.icon} className="w-28 hover:w-24 cursor-pointer" />

          <h1 className="text-2xl font-mono font-semibold text-buttoncolorhover cursor-pointer mt-5 text-center hover:text-stone-400">{data.name}</h1>
        </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBar;
