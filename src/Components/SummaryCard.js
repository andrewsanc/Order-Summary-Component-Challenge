import React from "react";
import "./SummaryCard.css";
import illustrationHero from "../images/illustration-hero.svg";

const SummaryCard = () => {
  return (
    <div className='summary-card flex-col'>
      <img src={illustrationHero} alt='illustration-hero' />
      <div>
        <div>Order Summary</div>
        <div>Order Description</div>
      </div>
      <div>
        <div>Plan Selection Icon</div>
        <div>
          <div>Plan Selection Title</div>
          <div>Plan Selection Price</div>
        </div>
        <div>Change Plan Link</div>
      </div>
      <div className='buttons flex-col'>
        <button className='button primary'>Proceed to Payment</button>
        <button className='button'>Cancel Order</button>
      </div>
    </div>
  );
};

export default SummaryCard;
