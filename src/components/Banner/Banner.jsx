import React from "react";
import "./Banner.css";
import BannerLogo from "../../assets/vibrating-headphone.png";
const Banner = () => {
  return (
    <div className="Banner">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={BannerLogo} width={212} alt="not available" />
      </div>
    </div>
  );
};

export default Banner;
