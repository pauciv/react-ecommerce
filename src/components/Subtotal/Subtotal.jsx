import React, { useContext } from 'react';
import { useReducerState } from '../../context/ReducerStateProvider';
import { dataContext } from '../../context/DataContextProvider';

import { useDataContext } from '../../context/DataContextProvider';
import { getTotalPriceR } from '../../store/reducer';

import './Subtotal.css';
import { useCartContext } from '../../context/CartContext';

export const getTotalPrice = (cart) =>
  cart?.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

export const getTotalItems = (cart) =>
  cart?.reduce((acc, cur) => acc + cur.quantity, 0);

let item = 'items';

// if (getTotalItems(cart) === 1) {
//   item = 'item';
// } else {
//   item = 'items';
// }

const Subtotal = ({ cart }) => {
  const {cartItems} = useCartContext();

  const [{ cartR }, dispatch] = useReducerState();

  const { contextData } = useContext(dataContext);
  // const { contextData } = useDataContext();

  return (
    <div className="subtotal">
      {/* npm i react-currency-format */}
      <div>
        <p className="subtotal__p">
          Subtotal ({/* {cartR.length} */}
          {getTotalItems(cartItems)} {item}):{' '}
          <strong>
            <small>$</small>
            {/* {getTotalPriceR(cartR)} */}
            {getTotalPrice(cartItems)}
          </strong>
          {/* {contextData} */}
        </p>
      </div>
    </div>
  );
};

export default Subtotal;
