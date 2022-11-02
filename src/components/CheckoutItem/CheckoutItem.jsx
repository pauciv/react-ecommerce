import React from 'react';
import './CheckoutItem.css'

const CheckoutItem = ({ children }) => {
  return (
    <>
      <div className="checkout__item">{children}</div>
    </>
  );
};

export default CheckoutItem;
