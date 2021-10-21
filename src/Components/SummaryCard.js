import React from "react";
import "./SummaryCard.css";
import illustrationHero from "../images/illustration-hero.svg";
import Plan from "./Plan";

const SummaryCard = () => {
  return (
    <div className='summary-card flex-col'>
      <img src={illustrationHero} alt='illustration-hero' />
      <div>
        <div>
          <div>Order Summary</div>
          <div>Order Description</div>
        </div>
        <Plan title='Annual Plan' price='$59.99/year' />
        <div className='buttons flex-col'>
          <button className='button primary'>Proceed to Payment</button>
          <button className='button'>Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
