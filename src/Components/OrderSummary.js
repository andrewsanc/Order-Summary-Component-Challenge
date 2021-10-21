import React from "react";
import "./OrderSummary.css";

const OrderSummary = ({ description }) => {
  return (
    <div className='order-summary flex-col'>
      <h4>Order Summary</h4>
      <p>{description}</p>
    </div>
  );
};

export default OrderSummary;
