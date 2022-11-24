import React, { useContext } from 'react';
import Subtotal from '../Subtotal/Subtotal';

import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { useCartContext } from '../../context/CartProvider';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useCartContext();

  return (
    <Container className="checkout">
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

        {/* TODO: user ? ve al Buy con los datos rellenados : ve al Login */}
        <Link to="/buy">
          <Button className="subtotal__btn--checkout">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Checkout;
