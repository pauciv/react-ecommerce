import React, { useContext, useReducer, useState } from 'react';
import { CartContext } from './CartContext';

// 2. envuelve nuestra app y proporciona el contexto
const CartProvider = ({ reducer, initialState, children, cart }) => {
  return (
    // <CartContext.Provider value={useReducer(reducer, initialState)}>
    //   {children}
    // </CartContext.Provider>

    <CartContext.Provider value={cart}>
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

// 3. Extrae datos del contexto
export const useStateValue = () => useContext(CartContext);
