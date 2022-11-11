import React, { useContext } from 'react';
import Checkout from '../components/Checkout/Checkout';
import { CartContext } from '../context/ItemQtyContext';

const CheckoutView = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default CheckoutView;
