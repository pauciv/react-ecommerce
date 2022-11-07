import React from 'react';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home';

const HomeView = () => {
  return (
    <>
      <Home />

      {/* {cart.length > 0 ? ( */}
        <aside className="cart">
          <Cart /* cart={cart} */ />
        </aside>
      {/* ) : null} */}
    </>
  );
};

export default HomeView;
