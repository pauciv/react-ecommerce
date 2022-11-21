import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import WishlistReducer from '../store/WishlistReducer';
import { WishlistContext } from './WishlistContext';

export const useWishlistContext = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  // const loadWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  // const initialState = {
  //   wishlistItems: loadWishlist,
  // };

  const init = () => {
    const wishlistStoraged = JSON.parse(localStorage.getItem('wishlist')) || [];
    return {
      wishlistItems: wishlistStoraged,
    };
  };

  const [{ wishlistItems }, dispatch] = useReducer(WishlistReducer, {}, init);
  console.log(wishlistItems);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    console.log('wishlistItems = ', wishlistItems);
  }, [wishlistItems]);

  const addToWishlist = (id, image, title, price, rating) => {
    // setState(true) //TODO. pintar el corazón en función de si está o no en la wishlist.
    const action = {
      type: 'add_to_wishlist',
      payload: {
        id,
        title,
        image,
        price,
        rating,
      },
    };
    dispatch(action);
    console.log('action = ', action);
  };

  const deleteFromWishlist = (id) => {
    const action = {
      type: 'delete_from_wishlist',
      payload: id,
    };
    console.log(id);
    dispatch(action);
  };

  return (
    <WishlistContext.Provider
      // value={useReducer(WishlistReducer, {}, init)}
      value={{
        wishlistItems,
        addToWishlist,
        deleteFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
