import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import products from './assets/db/db';

// import Product from './components/Product/Product';
// import ChildrenProd from './components/Product/ChildrenProd';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const pullCart = (cart) => {
//   console.log(cart)
//   console.log("yes")
// }

const loadCart = () => {
  console.log(`loadCart`);
  // * --- getItem para leer el item (cart) almacenado en el local storage.
  const getCart = localStorage.getItem('cart');
  // console.log(getCart);

  if (getCart) {
    try {
      console.log(getCart);
      console.log(JSON.parse(getCart));

      return JSON.parse(getCart);
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
};

function App() {
  const [cart, setCart] = useState(() => loadCart());

  useEffect(() => {
    console.log(`useEffect`);

    // * --- setItem para agregar un item (cart) al local storage.
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart); // está dentro del useEffect para que me muestre en consola el cart actualizado
  }, [cart]);

  const addToCart = (id) => {
    // console.log(id);
    // console.log(cart);
    // console.log(...cart);
    // console.log(...products);

    // const itemsQuantity = cart.map((item) => {
    //   if (item.id === id) {
    //     item.quantity = Number(item.quantity) + 1;
    //   }
    //   return item;
    // });

    // setCart(itemsQuantity);

    setCart([
      ...cart,
      {
        ...products.find((product) => product.id === id),
        quantity: 1,
      },
    ]);

    // products.map((product) => {
    //   // = cart.map ??
    //   if (product.id === id) {
    //     console.log(product);
    //   }
    // });
  };

  return (
    <>
      <div className="app">
        <div className="main">
          <Header cart={cart} />
          <Home cart={cart} addToCart={addToCart} /* cart={pullCart} */ />
          {/* <p>The Checkout component will be displayed in another page</p> */}
          <Checkout cart={cart} />
        </div>
        {/* solo debe aparecer si hay > 0 productos en el carrito */}
        <aside className="cart">
          <Cart cart={cart} />
        </aside>
      </div>
      {/* <p>{JSON.stringify(cart)}</p> */}
    </>
  );
}

export default App;

{
  /* <Router>
	<div className="app">
		<Switch>
			<Route path="/checkout">
				<Header />
				<h1>Checkout Component</h1>
			</Route>
			<Route path="/"> // default root at the bottom
				<div className="main">
					<Header />
					<Home />
				</div>
				<div className="cart">
					<Cart />
				</div>
			</Route>
		</Switch>
	</div>
</Router> */
}
