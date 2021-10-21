import React from "react";
import "./OrderSummary.css";

const OrderSummary = ({ description }) => {
  return (
    <div className='order-summary flex-col'>
      <div>Order Summary</div>
      <div>{description}</div>
    </div>
  );
};

export default OrderSummary;
