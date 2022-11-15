import React, { useContext } from 'react';
import Checkout from '../components/Checkout/Checkout';
import Wishlist from '../components/Wishlist/Wishlist';
import { CartContext } from '../context/ReducerStateContext';

const CheckoutView = ({
  cart,
  addToCart,
  handleDelete,
  handleSubtractQty,
}) => {
  return (
    <>
      <Checkout
        cart={cart}
        addToCart={addToCart}
        handleDelete={handleDelete}
        handleSubtractQty={handleSubtractQty}
      />
      <Wishlist addToCart={addToCart} />
    </>
  );
};

export default CheckoutView;
