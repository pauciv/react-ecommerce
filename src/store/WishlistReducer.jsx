// export const getTotalPriceR = (cartR) =>
//   cartR?.reduce(
//     (prevPrice, item) => prevPrice + item.price /* * item.quantity */,
//     0
//   );

const WishlistReducer = (state, action) => {
  console.log('state = ', state);
  console.log('action = ', action);
  console.log('state = ', state.wishlistItems);

  switch (action.type) {

    case 'add_to_wishlist':
      const id = action.payload.id;
      const isInWishlist = state.wishlistItems.findIndex((item) => item.id === id);

      if (isInWishlist !== -1) {
        // ! YES
        return state;
      }

      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload], // action.payload
      };

    case 'delete_from_wishlist':
      console.log(state);
      // return state.filter(item => item.id !== action.payload)

      const index = state.wishlistItems.findIndex(
        (item) => item.id === action.payload
      );

      let updatedWishlist = [...state.wishlistItems];

      if (index !== -1) {
        updatedWishlist.splice(index, 1);
        console.log('updatedWishlist = ', updatedWishlist);
      } else {
        console.warn(
          `Can't delete product (id: ${action.payload}) as it's not in the wishlist`
        );
      }

      return {
        ...state,
        wishlistItems: updatedWishlist,
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

export default WishlistReducer;
