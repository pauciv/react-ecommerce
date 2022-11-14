export const initialState = {
  cartR: [],
  // wishlist: []
};

export const getTotalPriceR = (cartR) =>
  cartR?.reduce(
    (prevPrice, item) => prevPrice + item.price /* * item.quantity */,
    0
  );

const ProductsReducer = (state = initialState, action = {}) => {
  console.log(action);

  switch (action.type) {
    case 'add_to_cart':
      return [
        ...state,
        action.payload,
      ]

    // case 'delete_from_cart':
    //   return console.log('delete_from_cart');

    case 'add_to_wishlist':
      return {
        ...state,
        cartR: [...state.cartR, action.payload], // action.payload
      };

    case 'delete_from_wishlist':
      const index = state.cartR.findIndex((item) => item.id === action.id);

      let newCartR = [...state.cartR];

      if (index >= 0) {
        newCartR.splice(index, 1);
      } else {
        console.warn(
          `Can't delete product (id: ${action.id}) as it's not in the cart`
        );
      }

      return {
        ...state,
        cartR: newCartR,
      };

    default:
      return state;
  }
};

console.log(ProductsReducer());

// esto iría en nuestro componente

// const addProduct = {
//   type: 'add_to_cart',
//   payload: ''/* product */,
// };

// const addToCart = ProductsReducer(ProductsReducer(), addProduct)

export default ProductsReducer;
