import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Router from './routes/Router';
import Cart from './components/Cart/Cart';
import ItemQtyProvider from './components/context/ItemQtyProvider';
import { getProducts, url } from './api/getProducts';

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
  console.log('products = ', products);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);

    // const fetchData = async () => {
    //   const response = await fetch(url);
    //   console.log(response); // status: 200

    //   const json = await response.json();
    //   console.log("json = ", json); // response.json is not a function (porque falta el async)
    // };
    getProducts(setProducts, setError, setLoading); // únicamente se ejecuta una vez al renderizar el componente App.
  }, [url]); // se volvería a renderizar si cambiara la url.

  //! ___

  const [cart, setCart] = useState(() => loadCart());
  // const [numItems, setNumItems] = useState(initialValue);

  useEffect(() => {
    // * --- setItem para agregar un item (cart) al local storage.
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('cart = ', cart); // está dentro del useEffect para que me muestre en consola el cart actualizado
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

  function handleIncrementQty(id) {
    console.log(id);
    // setNumItems((prevState) => prevState + 1);

    // const items = cart.map((item) => {
    //   if (item.id === id) {
    //     item.quantity = numItems;
    //   }
    //   return item;
    // });
    // console.log(items);
    // setCart(items);
  }

  // function handleQuantity(event, id) {
  //   const items = cart.map((item) => {
  //     if (item.id === id) {
  //       item.quantity = Number(event.target.value);
  //     }

  //     return item;
  //   });

  //   setCart(items);
  // }

  return (
    <>
      {/* <ItemQtyProvider>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </ItemQtyProvider> */}

      {/* <div className="app">
        <div className="main">
          <Header cart={cart} />
          <Home cart={cart} addToCart={addToCart} />
          <Checkout
            cart={cart}
            handleDelete={handleDelete}
            handleIncrementQty={handleIncrementQty}
          />
        </div>

        {cart.length > 0 ? (
          <aside className="cart">
            <Cart cart={cart} />
          </aside>
        ) : null}
      </div> */}
      {/* <p>{JSON.stringify(cart)}</p> */}

      <ItemQtyProvider>
        <BrowserRouter>
          <div className="app">
            <div className="main">
              <Routes>
                <Route path="/" element={<Header cart={cart} />}>
                  <Route
                    index
                    element={
                      <Home
                        products={products}
                        error={error}
                        loading={loading}
                        cart={cart}
                        addToCart={addToCart}
                      />
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <Checkout
                        cart={cart}
                        addToCart={addToCart}
                        handleDelete={handleDelete}
                        handleSubtractQty={handleSubtractQty}
                        handleIncrementQty={handleIncrementQty}
                      />
                    }
                  />
                  <Route path="/*" element={<Navigate replace to="/" />} />
                </Route>
              </Routes>
            </div>
            {cart.length > 0 ? (
              <aside className="cart">
                <Cart cart={cart} />
              </aside>
            ) : null}
          </div>
        </BrowserRouter>
      </ItemQtyProvider>
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

// import { useEffect, useState, useMemo, useCallback, useId } from 'react';
// import List from './List';

// const initialUsers = [
//   { id: 1, name: 'Maria' },
//   { id: 2, name: 'Pau' },
// ];

// function App() {
//   const [users, setUsers] = useState(initialUsers);
//   const [text, setText] = useState('');
//   const [search, setSearch] = useState('');
//   // const id = useId();

//   const handleAdd = () => {
//     const newUser = { id: Date.now(), name: text };
//     setUsers([...users, newUser]);
//   };

//   // useCallback
//   const handleDelete = useCallback(
//     (userId) => {
//       setUsers(users.filter((user) => user.id !== userId));
//     },
//     [users]
//   );

//   const handleSearch = () => {
//     setSearch(text);
//   };

//   // const filteredUsers = users.filter((user) => {
//   //   console.log('filter process');
//   //   return user.name.toLowerCase().includes(search.toLowerCase()); // para hacer la búsqueda sin darle a search, en lugar de poner search, ponemos text.
//   // });

//   // useMemo
//   const filteredUsers = useMemo(
//     () =>
//       users.filter((user) => {
//         // console.log('filter process');
//         return user.name.toLowerCase().includes(search.toLowerCase()); // para hacer la búsqueda sin darle a search, en lugar de poner search, ponemos text.
//       }),
//     [search, users]
//   );

//   const printUsers = useCallback(() => {
//     console.log('users changed', users);
//   }, [users]);

//   useEffect(() => {
//     // console.log('App render');
//     // console.log(users);
//   });

//   useEffect(() => {
//     printUsers();
//   }, [users, printUsers]);

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//         <button onClick={handleAdd}>Add</button>
//         <List users={filteredUsers} handleDelete={handleDelete} />
//       </div>
//     </>
//   );
// }

// export default App;
