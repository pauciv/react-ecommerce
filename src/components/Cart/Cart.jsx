import React, { useContext } from 'react';
import ChildrenProd from '../Product/ChildrenProd';
import products from '../../assets/db/db';
import './Cart.css';

import { getTotalPrice } from '../Subtotal/Subtotal';
import CartItem from '../CartItem/CartItem';
import { ItemQtyContext } from '../context/ItemQtyContext';

const Cart = ({ cart }) => {
  const [itemQty, setItemQty] = useContext(ItemQtyContext) // el useState está en el ItemQtyProvider

  return (
    <>
      <div className="cart__subtotal">
        <span className="cart__subtotal--title">Subtotal</span>
        <span className="cart__subtotal--price">
          <small>$</small>
          {getTotalPrice(cart)}
        </span>
        {itemQty}
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
                  <p>{item.quantity}</p>
                </CartItem>
              </>
            );
          })) || <h3>Your Cart is empty</h3>}
      </div>
    </>
  );
};

export default Cart;
