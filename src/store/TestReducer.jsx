import React, { useReducer } from 'react'

// actions.js ____
const initialState = {}

const reducer = (state, action) => {
  switch (action.type) {
    // case 'add_book':
    //   return [...state, action.payload]
    // case "delete_book":
    //   return state.filter(book => book.id !== action.payload)
    default:
      return state;
  }
}
//____

const TestReducer = () => {

  const [wishlist, dispatch] = useReducer(reducer, initialState/* , init */);
  // console.log(wishlist)

  return (
    <div>WishlistReducer</div>
  )
}

export default test