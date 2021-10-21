import React from "react";
import "./SummaryCard.css";
import illustrationHero from "../images/illustration-hero.svg";
import Plan from "./Plan";
import OrderSummary from "./OrderSummary";

const SummaryCard = ({ orderDescription }) => {
  return (
    <div className='summary-card flex-col'>
      <img src={illustrationHero} alt='illustration-hero' />
      <div className='summary-card-content'>
        <OrderSummary description={orderDescription} />
        <Plan title='Annual Plan' price='$59.99/year' />
        <div className='buttons flex-col'>
          <button className='button primary'>Proceed to Payment</button>
          <button className='button'>Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

SummaryCard.defaultProps = {
  orderDescription:
    "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
};

export default SummaryCard;
