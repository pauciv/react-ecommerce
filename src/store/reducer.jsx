const loadWishlist = () => {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
}

export const initialState = {
  wishlist: loadWishlist(),
  // wishlist: []
};

// export const init = () => {
//   return JSON.parse(localStorage.getItem('wishlist')) || initialState;
// };

// export const getTotalPriceR = (cartR) =>
//   cartR?.reduce(
//     (prevPrice, item) => prevPrice + item.price /* * item.quantity */,
//     0
//   );

const reducer = (state /*  = initialState */, action /*  = {} */) => {
  console.log('state = ', state);
  console.log('action = ', action);
  console.log('state = ', state.wishlist);

  switch (action.type) {
    // case 'add_to_cart':
    //   return [
    //     ...state,
    //     action.payload,
    //   ]

    // case 'delete_from_cart':
    //   return console.log('delete_from_cart');

    case 'add_to_wishlist':
      const id = action.payload.id;
      const isInWishlist = state.wishlist.findIndex((item) => item.id === id);

      if (isInWishlist !== -1) {
        // ! YES
        return state;
      }

      return {
        ...state,
        wishlist: [...state.wishlist, action.payload], // action.payload
      };

    case 'delete_from_wishlist':
      console.log(state);
      // return state.filter(item => item.id !== action.payload)

      const index = state.wishlist.findIndex(
        (item) => item.id === action.payload
      );

      let updatedWishlist = [...state.wishlist];

      if (index >= 0) {
        updatedWishlist.splice(index, 1);
      } else {
        console.warn(
          `Can't delete product (id: ${action.payload}) as it's not in the wishlist`
        );
      }

      return {
        ...state,
        wishlist: updatedWishlist,
      };

    default:
      return state;

    // switch (action.type) {
    //   case 'add_book':
    //     return [...state, action.payload]
    //   case "delete_book":
    //     return state.filter(book => book.id !== action.payload)
    //   default:
    //     return state;
    // }
  }
};

// esto iría en nuestro componente

// const addProduct = {
//   type: 'add_to_cart',
//   payload: ''/* product */,
// };

// const addToCart = ProductsReducer(ProductsReducer(), addProduct)

export default reducer;
