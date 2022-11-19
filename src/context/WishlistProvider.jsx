import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { init } from '../store/reducer';
import { WishlistContext } from './WishlistContext';

export const useWishlistContext = () => useContext(WishlistContext);

const WishlistProvider = ({ reducer, initialState, children, cart }) => {

  // useEffect(() => {
  //   localStorage.setItem("wishlist", JSON.stringify(wishlist));
  // }, [wishlist]);

  // const [wishlistItems, setWishlistItems] = useLocalStorage('wishlist');

  // const addToWishlist = (..........) => {
  //   // setState(true) //TODO. pintar el corazón en función de si está o no en la wishlist.
  //   const action = {
  //     type: 'add_to_wishlist',
  //     payload: {
  //       id,
  //       title,
  //       image,
  //       price,
  //       rating,
  //     },
  //   };
  //   dispatch(action);
  //   console.log('action = ', action);
  // };

  return (
    <WishlistContext.Provider value={useReducer(reducer, initialState/* , init */)}>
      {children}
    </WishlistContext.Provider>

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

export default WishlistProvider;
