import React, { useContext } from 'react';
import ChildrenProd from '../Product/ChildrenProd';
import './Cart.css';

import { getTotalPrice } from '../Subtotal/Subtotal';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../context/ReducerStateContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useCartContext } from '../../context/CartContext';

const Cart = ({ cart }) => {
  const { cartItems } = useCartContext()

  // const cart = useContext(ReducerStateContext);
  // console.log(cart);

  return (
    <>
      <div className="cart__subtotal">
        <span className="cart__subtotal--title">Subtotal</span>
        <span className="cart__subtotal--price">
          {/* <small>$</small> */}
          {formatCurrency(getTotalPrice(cart))}
        </span>
        {/* {itemQty} */}
      </div>

      <div className="cart__items">
        {cartItems ? (
          cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))
        ) : (
          <h3>Your Cart is empty</h3>
        )}
      </div>
    </>
  );
};

export default Cart;
