import React, { useContext } from 'react';
import Subtotal from '../Subtotal/Subtotal';
import Counter from '../Counter/Counter';

import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CartButton from '../CartButton/CartButton';
import { CartContext } from '../../context/CartContext';
import { useStateValue } from '../../context/CartProvider';

const Checkout = ({
  cart,
  addToCart,
  handleDelete,
  handleSubtractQty,
  handleIncrementQty,
}) => {
  // cart &&
  //   cart.map((item) => {
  //     console.log(item.title);
  //   });

  // ITEM QUANTITY CONTEXT
  //const [itemQty, setItemQty] = useContext(CartContext); // el useState está en el ItemQtyProvider
  // console.log(itemQty);

  const [{ cartR }, dispatch] = useStateValue();

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
            cart.map((item) => (
              <CheckoutItem key={item.id}>
                <div className="item__image">
                  <img
                    className="item__image"
                    src={item.image}
                    alt="product image"
                  />
                </div>

                <div className="item__info">
                  <p className="item__title">{item.title}</p>

                  <Counter
                    itemQuantity={item.quantity}
                    addToCart={() => addToCart(item.id)}
                    handleSubtractQty={() => handleSubtractQty(item.id)}
                    handleIncrementQty={() => handleIncrementQty(item.id)}
                  />

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="item__btn--delete"
                  >
                    Delete
                  </button>
                </div>

                <div>
                  <p className="item__price">
                    <small>$</small>
                    {item.price * item.quantity}
                  </p>
                </div>
              </CheckoutItem>
            ))
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </div>

        <div className="checkout__items">
          {cartR ? (
            cartR.map((item) => (
              <CheckoutItem key={item.id}>
                <div className="item__image">
                  <img
                    className="item__image"
                    src={item.image}
                    alt="product image"
                  />
                </div>

                <div className="item__info">
                  <p className="item__title">{item.title}</p>

                  <Counter
                    itemQuantity={item.quantity}
                    addToCart={() => addToCart(item.id)}
                    handleSubtractQty={() => handleSubtractQty(item.id)}
                    handleIncrementQty={() => handleIncrementQty(item.id)}
                  />

                  <button onClick={() => deleteFromCart(item.id)}>D</button>

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="item__btn--delete"
                  >
                    Delete
                  </button>
                </div>

                <div>
                  <p className="item__price">
                    <small>$</small>
                    {item.price /* * item.quantity */}
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
