import React, { useContext } from 'react';
import Checkout from '../components/Checkout/Checkout';
import Wishlist from '../components/Wishlist/Wishlist';
import { CartContext } from '../context/CartContext';

const CheckoutView = ({
  cart,
  addToCart,
  handleDelete,
  handleSubtractQty,
  handleIncrementQty,
}) => {
  return (
    <>
      <Checkout
        // cart={cart}
        addToCart={addToCart}
        handleDelete={handleDelete}
        handleSubtractQty={handleSubtractQty}
        handleIncrementQty={handleIncrementQty}
      />
      <Wishlist addToCart={addToCart} />
    </>
  );
};

export default CheckoutView;
