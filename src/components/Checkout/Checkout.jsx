import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import Counter from '../Counter/Counter';

import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CartButton from '../CartButton/CartButton';

const Checkout = ({ cart, quantity, handleDelete }) => {
  // cart &&
  //   cart.map((item) => {
  //     console.log(item.title);
  //   });

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <p className="checkout__subtitle">Price</p>
        </div>

        <div className="checkout__items">
          {(cart &&
            cart.map((item) => {
              // console.log(item.title);
              return (
                <>
                  <CheckoutItem key={`c-${item.id}`} quantity={item.quantity}>
                    {/* {console.log(item.id)} */}
                    {/* habrá error de key hasta que en lugar de añadirse varias veces el mismo item, se modifique la cantidad del mismo. */}
                    <div className="item__image">
                      <img
                        className="item__image"
                        src={item.image}
                        alt="product image"
                      />
                    </div>

                    <div className="item__info">
                      <p className="item__title">{item.title}</p>
                      <Counter initialValue={quantity} />
                      <button
                        /* onClick={handleDelete} */
                        className="item__btn--delete"
                      >
                        Delete
                      </button>
                    </div>

                    <div>
                      <p className="item__price">
                        <small>$</small>
                        {item.price}
                      </p>
                    </div>
                  </CheckoutItem>
                </>
              );
            })) || <h3>Your Cart is empty</h3>}
        </div>

        {/* CartProduct */}
        {/* CartProduct */}

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
