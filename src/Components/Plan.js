import React from "react";
import "./Plan.css";
import planIcon from "../images/icon-music.svg";

const Plan = ({ title, price }) => {
  return (
    <div className='plan flex-row'>
      <img src={planIcon} alt='icon-music' />
      <div>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <a href='#'>Change</a>
    </div>
  );
};

export default Plan;
