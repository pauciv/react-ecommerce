import React, { useContext, useEffect, useReducer, useState } from 'react';
import { init } from '../store/reducer';
import { ReducerStateContext } from './ReducerStateContext';

// 2. envuelve nuestra app y proporciona el context
const ReducerStateProvider = ({ reducer, initialState, children, cart }) => {

  // useEffect(() => {
  //   localStorage.setItem("wishlist", JSON.stringify(wishlist));
  // }, [wishlist]);

  return (
    <ReducerStateContext.Provider value={useReducer(reducer, initialState, init)}>
      {children}
    </ReducerStateContext.Provider>

    // <CartContext.Provider value={cart}>
    //   {children}
    // </CartContext.Provider>
  );

  // const [itemQty, setItemQty] = useState(initialValue);

  // return (
  //   <CartContext.Provider value={ itemQty, setItemQty }>
  //     {children}
  //   </CartContext.Provider>
  // );
};

export default ReducerStateProvider;

// 3. Extrae datos del context
export const useReducerState = () => useContext(ReducerStateContext);
