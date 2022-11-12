import React, { useContext } from 'react';
import { useStateValue } from '../../context/CartProvider';
import { dataContext } from '../../context/DataContextProvider';

import { useDataContext } from '../../context/DataContextProvider';
import { getTotalPriceR } from '../../store/CartReducer';

import './Subtotal.css';

export const getTotalPrice = (cart) => (
  cart?.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
)

export const getTotalItems = (cart) => (
  cart?.reduce((acc, cur) => acc + cur.quantity, 0)
)

let item = 'items';

const Subtotal = ({ cart }) => {
  
  const [{ cartR }, dispatch] = useStateValue();


  const { contextData } = useContext(dataContext);
  // const { contextData } = useDataContext();

  return (
    <div className="subtotal">
      {/* npm i react-currency-format */}
      <div>
        <p className="subtotal__p">
          Subtotal ({cartR.length}{/* {getTotalItems(cart)} */} {item}):{' '}
          <strong>
            <small>$</small>
            {getTotalPriceR(cartR)}
            {/* {getTotalPrice(cart)} */}
          </strong>
          
          {/* {contextData} */}
        </p>
      </div>
    </div>
  );
};

export default Subtotal;
