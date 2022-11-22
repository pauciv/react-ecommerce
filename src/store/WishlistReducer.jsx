const WishlistReducer = (state, action) => {
  console.log('state = ', state);
  console.log('action = ', action);
  console.log('state.wishlistItems = ', state.wishlistItems);

  switch (action.type) {
    case 'add_to_wishlist':
      // return [...state, action.payload]
      const id = action.payload.id;
      const isInWishlist = state.wishlistItems.findIndex(
        (item) => item.id === id
      );

      if (isInWishlist !== -1) {
        // ! YES
        return state;
      }

      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case 'delete_from_wishlist':
      // return state.filter(book => book.id !== action.payload)

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
    //   case "delete_book":
    //   default:
    //     return state;
    // }
  }
};

export default WishlistReducer;
