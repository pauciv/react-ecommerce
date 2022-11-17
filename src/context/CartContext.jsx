import { createContext, useContext, useState } from 'react';

const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (id) => {
    
    const isInCart = cartItems.findIndex((item) => item.id === id);

    if (isInCart === -1) {
      // ! NO
      const cartItems = [
        ...cartItems,
        {
        //   ...products.find((product) => product.id === id),
        //   quantity: 1,
        },
      ];
      setCartItems(cartItems);

    } else {
      // ! YES
      const cartItems = cartItems.map((item) => {
        if (item.id === id) {
          item.quantity += 1; // item.quantity = Number(item.quantity) + 1;
        }

        return item;
      });
      setCartItems(cartItems);
    }
  }

  const deleteFromCart = (id) => {
    console.log('handleDelete');
    const cartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(cartItems);
  }

  const decreaseQuantity = (id) => {
    const isInCart = cartItems.findIndex((item) => item.id === id);

    if (isInCart !== -1) {
      // ! YES
      const cartItems = cartItems.map((item) => {
        if (item.id === id) {
          item.quantity -= 1; // item.quantity = Number(item.quantity) - 1;
        }

        return item;
      });

      setCartItems(cartItems);
    }
  }

  return(
    <CartContext.Provider value={{addToCart, decreaseQuantity, deleteFromCart}}>
        {children}
    </CartContext.Provider>
  )
};
