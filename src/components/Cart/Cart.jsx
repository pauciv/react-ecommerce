import React from 'react';
import ChildrenProd from '../Product/ChildrenProd';
import products from '../../assets/db/db';
import './Cart.css';

import { getTotalPrice } from '../Subtotal/Subtotal';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart }) => {
  return (
    <>
      <div className="cart__subtotal">
        <span className="cart__subtotal--title">Subtotal</span>
        <span className="cart__subtotal--price">
          <small>$</small>
          {getTotalPrice(cart)}
        </span>
      </div>

      <div className="cart__items">
        {(cart &&
          cart.map((item) => {
            return (
              <>
                <CartItem key={item.id}>
                  {console.log(item.id)}
                  <img
                    className="cart__item--image"
                    src={item.image}
                    alt="product image"
                  />
                </CartItem>
              </>
            );
          })) || <h3>Your Cart is empty</h3>}
      </div>
    </>
  );
};

export default Cart;
