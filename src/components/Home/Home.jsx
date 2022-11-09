import { useState, useEffect /* useId */ } from 'react';
import Product from '../Product/Product';
import ChildrenProd from '../Product/ChildrenProd';
import Counter from '../Counter/Counter';
import CartButton from '../CartButton/CartButton';

import products from '../../assets/db/db';

//rating star icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import './Home.css';
import Checkout from '../Checkout/Checkout';
import Cart from '../Cart/Cart';

// console.log(products);

/* const loadCart = () => {
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
}; */

const Home = ({ cart, addToCart }) => {
  // console.log(cart)
  // props.cart(cart)

  /*   const [cart, setCart] = useState(() => loadCart());

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
        quantity: 1
      },
    ]);

    // products.map((product) => {
    //   // = cart.map ??
    //   if (product.id === id) {
    //     console.log(product);
    //   }
    // });
  }; */

  return (
    <>
      <main className="home">
        <div className="home__container">
          {/* <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt="home image"
          /> */}

          <div className="home__row">
            {(products &&
              products.map((product) => (
                <ChildrenProd key={product.id}>
                  {/* useId() */}
                  <img
                    className="product__image"
                    src={product.image}
                    alt="product image"
                  />

                  <div className="product__info">
                    <p className="product__title">{product.title}</p>
                    <p className="product__price">
                      <small>$</small>
                      {product.price}
                    </p>
                    <div className="product__rating">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                      <StarBorderIcon />
                      {/* <StarOutlineIcon /> */}
                    </div>
                    {/* <div className="product__rating">
                    {Array(product.rating)
                      // .fill()
                      .map(() => (
                        <p key={id}>*</p>
                      ))}
                  </div> */}
                  </div>

                  <Counter />

                  {/* Button puede ser un component */}
                  <button
                    onClick={() => addToCart(product.id)}
                    className="product__btnAddToCart"
                  >
                    Add to Cart
                  </button>
                </ChildrenProd>
              ))) || <h2>No products obtained</h2>}
          </div>

          {/* <div className="home__row">
            {(products &&
              products.map((product) => (
                <Product
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  addToCart={() => addToCart(product.id)}
                />
              ))) || <h2>No products obtained</h2>}
          </div> */}

          {/* <div>
            <Checkout cart={cart} />
          </div> */}
        </div>
      </main>

      {/* <p>{JSON.stringify(cart)}</p> */}
      {/* {console.log(cart)} */}
    </>
  );
};

export default Home;

{
  /* <div className="home__container">
						<img
							className="home__image"
							src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
							alt="home image"
						/>
						<div className="home__row">
							<Product
								id="101"
								image="https://m.media-amazon.com/images/I/71lsfH+ww3L._AC_SL1500_.jpg"
								title="Logitech MX Keys Mini"
								price={19.99}
								rating={4}
							/>
							<Product />
						</div>

						<div className="home__row">
							<Product />
							<Product />
							<Product />
						</div>

						<div className="home__row">
							<Product />
						</div>
					</div> */
}
