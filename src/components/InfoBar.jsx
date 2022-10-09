import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faGifts } from "@fortawesome/free-solid-svg-icons";

const InfoBar = () => {
  return (
    <div>
      <div id="background" className="flex gap-20 justify-center py-16 bg-background mt-10 shadow-xl shadow-gray-500 ">
        <div id="free-shipping" className="items-center">
          <FontAwesomeIcon icon={faTruck} className="text-3xl text-secondry" />
          <h1 className="text-xl font-mono font-semibold text-primary">Free Shipping</h1>
        </div>
        <div id="money-return" className="items-center">
          <FontAwesomeIcon icon={faMoneyBill} className="text-3xl text-secondry" />
          <h1 className="text-xl font-mono font-semibold text-primary"> Money Return</h1>
        </div>
        <div id="support-24/7" className="items-center">
          <FontAwesomeIcon icon={faClock} className="text-3xl text-secondry" />
          <h1 className="text-xl font-mono font-semibold text-primary" > Support 24/7</h1>
        </div>
        <div id="member-discount" className="items-center">
          <FontAwesomeIcon icon={faGifts} className="text-3xl text-secondry" />
          <h1 className="text-xl font-mono font-semibold text-primary">Free Membership Discount</h1>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
