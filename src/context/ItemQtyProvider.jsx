import React, { useReducer, useState } from 'react';
import { CartContext } from './ItemQtyContext';

const CartProvider = ({ reducer, initialValue, children }) => {
  return (
    <CartContext.Provider value={useReducer}>
      {children}
    </CartContext.Provider>
  );
  
  // const [itemQty, setItemQty] = useState(initialValue);

  // return (
  //   <CartContext.Provider value={[ itemQty, setItemQty ]}>
  //     {children}
  //   </CartContext.Provider>
  // );
};

export default CartProvider;
