import { useEffect, useState } from 'react';
import './assets/css/global.css';

//! usando el archivo de barril
import { Navbar } from './components';

import Store from './components/Store/Store';
import Footer from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Router from './routes/Router';
import Cart from './components/Cart/Cart';
import WishlistProvider from './context/WishlistProvider';
import { getData, url } from './utilities/api/getProducts';
import Login from './components/Login/Login';
import CheckoutView from './pages/CheckoutView';
import Wishlist from './components/Wishlist/Wishlist';
import { CartProvider } from './context/CartProvider';
import Register from './components/Login/Register';
import { AuthProvider } from './context/AuthProvider';

function App() {
  //! API
  const [products, setProducts] = useState([]);
  // console.log('products = ', products);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);

    getData(setProducts, setError, setLoading); // únicamente se ejecuta una vez al renderizar el componente App.
  }, [url]); // se volvería a renderizar si cambiara la url.
  //! ___

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

      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            {/* <CartProvider cart={cart}> */}
            <div className="app">
              <div className="main">
                <Navbar handleSearch={handleSearch} />

                <Routes>
                  {/* <Route
                  path="/"
                  element={<Navbar handleSearch={handleSearch} cart={cart} />}
                > */}
                  <Route
                    /* index */
                    path="/"
                    element={
                      <Store
                        products={products}
                        error={error}
                        loading={loading}
                      />
                    }
                  />

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/checkout" element={<CheckoutView />} />
                  <Route path="/*" element={<Navigate replace to="/" />} />
                  {/* </Route> */}
                </Routes>
              </div>
              <Cart />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
