import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import Counter from '../Counter/Counter';

import './Checkout.css';

const Checkout = ({ cart }) => {
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
              return <p>{item.title}</p>
            })) || <h3>Your Cart is empty</h3>}
        </div>

        {/* <Counter /> */}
        {/* CartProduct */}
        {/* CartProduct */}

        <div className="checkout__footer">
          <div>
            <p>Subtotal (0 item): $0</p>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
