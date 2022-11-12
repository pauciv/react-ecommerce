export const initialState = {
  cartR: [],
};

export const getTotalPriceR = (cartR) =>
  cartR?.reduce(
    (prevPrice, item) => prevPrice + item.price /* * item.quantity */,
    0
  );

const CartReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'add_to_cart':
      return {
        ...state,
        cartR: [...state.cartR, action.payload], // action.payload
      };
    case 'delete_from_cart':
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

export default CartReducer;
