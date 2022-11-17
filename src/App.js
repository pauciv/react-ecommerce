import { useEffect, useState } from 'react';
import './assets/css/global.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

import { Navigate, Route, Routes } from 'react-router-dom';
import Router from './routes/Router';
import Cart from './components/Cart/Cart';
import ReducerStateProvider from './context/ReducerStateProvider';
import { getProducts, url } from './utilities/api/getProducts';
import reducer, { init, initialState } from './store/reducer';
import Login from './components/Login/Login';
import CheckoutView from './pages/CheckoutView';
import Wishlist from './components/Wishlist/Wishlist';
import WishlistReducer from './store/WishlistReducer';
import { CartProvider } from './context/CartContext';

// getProducts();

const loadCart = () => {
  // console.log(`loadCart`);
  // * --- getItem para leer el item (cart) almacenado en el local storage.
  const getCart = localStorage.getItem('cart');
  // console.log(getCart);

  if (getCart) {
    try {
      // console.log(getCart);
      // console.log(JSON.parse(getCart));

      return JSON.parse(getCart);
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
};

function App() {
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

  const [cart, setCart] = useState(() => loadCart());
  // const [numItems, setNumItems] = useState(initialValue);

  useEffect(() => {
    // * --- setItem para agregar un item (cart) al local storage.
    localStorage.setItem('cart', JSON.stringify(cart));
   //console.log('cart = ', cart); // está dentro del useEffect para que me muestre en consola el cart actualizado
  }, [cart]);

  const addToCart = (id) => {
    // Comprovar si el item añadido existe en cart (si no existe, findIndex retorna -1, y si existe, retorna el index del array)
    const isInCart = cart.findIndex((item) => item.id === id);

    if (isInCart === -1) {
      // ! NO
      const items = [
        ...cart,
        {
          ...products.find((product) => product.id === id),
          quantity: 1,
        },
      ];

      // console.log(items);
      setCart(items);
    } else {
      // ! YES
      const items = cart.map((item) => {
        if (item.id === id) {
          item.quantity += 1; // item.quantity = Number(item.quantity) + 1;
        }

        // console.log(item);
        return item;
      });

      // console.log(items);
      setCart(items);
    }
  };

  const handleDelete = (id) => {
    console.log('handleDelete');
    const items = cart.filter((item) => item.id !== id);
    setCart(items);
  };

  //   const handleDelete = useCallback(
  //     (userId) => {
  //       setUsers(users.filter((user) => user.id !== userId));
  //     },
  //     [users]
  //   );

  const handleSubtractQty = (id) => {
    const isInCart = cart.findIndex((item) => item.id === id);

    if (isInCart !== -1) {
      // ! YES
      const items = cart.map((item) => {
        if (item.id === id) {
          item.quantity -= 1; // item.quantity = Number(item.quantity) - 1;
        }

        return item;
      });

      setCart(items);
    }
  };

  const handleSearch = () => {
    console.log('handleSearch');
    // https://www.youtube.com/watch?v=maUZjMJ4bF4
  };

  return (
    <>
      {/* <ItemQtyProvider>
          <Navbar />
          <Router />
          <Footer />
      </ItemQtyProvider> */}
      <CartProvider>
        <ReducerStateProvider
          reducer={reducer}
          initialState={initialState} /*  init={init}  */
        >
          {/* <CartProvider cart={cart}> */}
          <div className="app">
            <div className="main">
              <Navbar handleSearch={handleSearch} cart={cart} />

              <Routes>
                {/* <Route
                  path="/"
                  element={<Navbar handleSearch={handleSearch} cart={cart} />}
                > */}
                <Route
                  /* index */
                  path="/"
                  element={
                    <Home
                      products={products}
                      error={error}
                      loading={loading}
                      addToCart={addToCart}
                    />
                  }
                />

                <Route path="/login" element={<Login />} />

                <Route path="/wishlist" element={<Wishlist />} />

                <Route
                  path="/checkout"
                  element={
                    <CheckoutView
                      cart={cart}
                      addToCart={addToCart}
                      handleDelete={handleDelete}
                      handleSubtractQty={handleSubtractQty}
                    />
                  }
                />
                <Route path="/*" element={<Navigate replace to="/" />} />
                {/* </Route> */}
              </Routes>
            </div>
            {cart.length > 0 ? (
              <aside className="cart">
                <Cart cart={cart} />
              </aside>
            ) : null}
          </div>
        </ReducerStateProvider>
      </CartProvider>
    </>
  );
}

export default App;
