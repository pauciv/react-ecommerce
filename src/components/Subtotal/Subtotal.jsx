import React from 'react';
import './Subtotal.css';

export const getTotalPrice = (cart) =>
  cart.reduce((acc, cur) => acc + cur.price /* * cur.quantity */, 0);

export const getTotalItems = (cart) => cart.length;

let item = "items";

const Subtotal = ({ cart }) => {
  // const getTotalPrice = (cart) =>
  // cart.reduce((acc, cur) => acc + cur.price /* * cur.quantity */, 0);

  // const getTotalItems = (cart) => cart.length;

  // cart.length = 1 ? (item = "item") : (item = "items")

  return (
    <div className="subtotal">
      {/* npm i react-currency-format */}
      <div>
        <p className='subtotal__p'>
        
          Subtotal ({getTotalItems(cart)} {item}): <strong><small>$</small>
          {getTotalPrice(cart)}</strong>
        </p>
      </div>
    </div>
  );
};

export default Subtotal;
