import React, { useContext } from 'react';
import Subtotal from '../Subtotal/Subtotal';

import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { useCartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';

const Checkout = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <p className="checkout__subtitle">Price</p>
        </div>

        <div className="checkout__items">
          {cartItems ? (
            cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} {...cartItem} />
            ))
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </div>

        <div className="checkout__footer">
          <Subtotal cart={cartItems} />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal cart={cartItems} />
        {/* <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small> */}
        <Button className="subtotal__btn--checkout">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Checkout;
