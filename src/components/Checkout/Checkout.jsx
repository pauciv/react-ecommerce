import React, { useContext } from 'react';
import Subtotal from '../Subtotal/Subtotal';
import Counter from '../Counter/Counter';

import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CartButton from '../CartButton/CartButton';
import { CartContext } from '../../context/CartContext';
import { useStateValue } from '../../context/CartProvider';

const Checkout = ({
  /* cart, */
  addToCart,
  handleDelete,
  handleSubtractQty,
  handleIncrementQty,
}) => {

  // CART CONTEXT
  const cart = useContext(CartContext); // el useState está en el ItemQtyProvider
  console.log(cart);

  const [{ cartR }, dispatch] = useStateValue();
  console.log('cartR = ', cartR);

  const addToWishlist = (id, title, image, price, quantity, rating) => {
    dispatch({
      type: 'add_to_cart',
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const deleteFromCart = (id) => {
    dispatch({
      type: 'delete_from_cart',
      id: id,
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <p className="checkout__subtitle">Price</p>
        </div>

        <div className="checkout__items">
          {cart ? (
            cart.map(({id, title, image, price, quantity, rating}) => (
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
                    onClick={() => handleDelete(id)}
                    className="item__btn--delete"
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    onClick={() => addToWishlist(id, title, image, price, quantity, rating)}
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
