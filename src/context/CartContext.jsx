import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getProducts, url } from '../utilities/api/getProducts';

const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  //! API
  const [products, setProducts] = useState([]);
  // console.log('products = ', products);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);

    getProducts(setProducts, setError, setLoading); // únicamente se ejecuta una vez al renderizar el componente App.
  }, [url]); // se volvería a renderizar si cambiara la url.
  //! ___

  // const [cartIsOpen, setCartIsOpen] = useState(false);
  // const openCart = () => setCartIsOpen(true);
  // const closeCart = () => setCartIsOpen(false);

  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage('cart');

  const totalCartQuantity = cartItems?.reduce(
    (prevQuantity, item) => prevQuantity + item.quantity,
    0
  );

  const totalCartPrice = cartItems?.reduce(
    (prevPrice, item) => prevPrice + item.price * item.quantity,
    0
  );

  // function getItemQuantity(id) {
  //   return cartItems.find(item => item.id === id)?.quantity || 0
  // }

  const addToCart = (id) => {
    const isInCart = cartItems.findIndex((item) => item.id === id);

    if (isInCart === -1) {
      // ! NO
      const cart = [
        ...cartItems,
        {
          ...products.find((product) => product.id === id),
          quantity: 1,
        },
      ];
      setCartItems(cart);
    } else {
      // ! YES
      const cart = cartItems.map((item) => {
        if (item.id === id) {
          item.quantity += 1; // item.quantity = Number(item.quantity) + 1;
        }

        return item;
      });
      setCartItems(cart);
    }
  };

  const deleteFromCart = (id) => {
    console.log('handleDelete');
    const cart = cartItems.filter((item) => item.id !== id);
    setCartItems(cart);

    // TODO: useCallback
    //   const handleDelete = useCallback(
    //     (userId) => {
    //       setUsers(users.filter((user) => user.id !== userId));
    //     },
    //     [users]
    //   );
  };

  const decreaseQuantity = (id) => {
    const isInCart = cartItems.findIndex((item) => item.id === id);

    if (isInCart !== -1) {
      // ! YES
      const cart = cartItems.map((item) => {
        if (item.id === id) {
          item.quantity -= 1; // item.quantity = Number(item.quantity) - 1;
        }

        return item;
      });

      setCartItems(cart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        decreaseQuantity,
        deleteFromCart,
        cartItems,
        totalCartQuantity,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
