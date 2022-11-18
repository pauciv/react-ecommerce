import React, { useContext } from 'react';
import Subtotal from '../Subtotal/Subtotal';
import Counter from '../Counter/Counter';

import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CartButton from '../CartButton/CartButton';
import { ReducerStateContext } from '../../context/ReducerStateContext';
import { useReducerState } from '../../context/ReducerStateProvider';
import { useCartContext } from '../../context/CartContext';

const Checkout = ({
  cart,
  addToCart,
  handleDelete,
  handleSubtractQty,
  handleIncrementQty,
}) => {

  const {cartItems, deleteFromCart, decreaseQuantity} = useCartContext()

  // CART CONTEXT
  // const cart = useContext(ReducerStateContext); // el useState está en el ItemQtyProvider
  // console.log(cart);

  const [{ wishlist }, dispatch] = useReducerState();
  console.log('wishlist = ', wishlist);

  const addToWishlist = (id, title, image, price, rating) => {
    const action = {
      type: 'add_to_wishlist',
      payload: {
        id,
        title,
        image,
        price,
        rating,
      },
    }
    dispatch(action);
  };


  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <p className="checkout__subtitle">Price</p>
        </div>

        <div className="checkout__items">
          {cartItems ? (
            cartItems.map(({id, title, image, price, quantity, rating}) => (
              <CheckoutItem key={id}>
                <div className="item__image">
                  <img
                    className="item__image"
                    src={image}
                    alt="product image"
                  />
                </div>

                <div className="item__info">
                  <p className="item__title">{title}</p>

                  <Counter
                    itemQuantity={quantity}
                    addToCart={() => addToCart(id)}
                    handleSubtractQty={() => handleSubtractQty(id)}
                    handleIncrementQty={() => handleIncrementQty(id)}
                  />

                  <button
                    type="button"
                    onClick={() => deleteFromCart(id)}
                    className="item__btn--delete"
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    onClick={() => addToWishlist(id, title, image, price, rating)}
                    className="item__btn--wishlist"
                  >
                    Save to Wishlist
                  </button>
                  
                </div>

                <div>
                  <p className="item__price">
                    <small>$</small>
                    {price * quantity}
                  </p>
                </div>
              </CheckoutItem>
            ))
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </div>

        <div className="checkout__footer">
          <Subtotal cart={cart} />
        </div>

      </div>
      <div className="checkout__right">
        <Subtotal cart={cart} />
        {/* <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small> */}
        <button className="subtotal__btn--checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
