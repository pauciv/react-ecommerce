import React, { useContext } from 'react';
import { dataContext } from '../../context/DataContextProvider';

import { useDataContext } from '../../context/DataContextProvider';

import './Subtotal.css';

export const getTotalPrice = (cart) => {
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  return totalPrice;
}

export const getTotalItems = (cart) => {
  const totalItems = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  return totalItems;
}

let item = 'items';

const Subtotal = ({ cart }) => {
  // const getTotalPrice = (cart) =>
  // cart.reduce((acc, cur) => acc + cur.price /* * cur.quantity */, 0);

  // const getTotalItems = (cart) => cart.length;

  // cart.length = 1 ? (item = "item") : (item = "items")

  // const contextData = useContext(dataContext)
  const { contextData } = useContext(dataContext);
  // const { contextData } = useDataContext();

  return (
    <div className="subtotal">
      {/* npm i react-currency-format */}
      <div>
        <p className="subtotal__p">
          Subtotal ({getTotalItems(cart)} {item}):{' '}
          <strong>
            <small>$</small>
            {getTotalPrice(cart)}
          </strong>
          {/* {contextData} */}
        </p>
      </div>
    </div>
  );
};

export default Subtotal;
