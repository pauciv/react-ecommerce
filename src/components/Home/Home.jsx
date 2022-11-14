import { useState, useEffect /* useId */ } from 'react';
import Product from '../Product/Product';
import ChildrenProd from '../Product/ChildrenProd';
import Counter from '../Counter/Counter';
import CartButton from '../CartButton/CartButton';

//rating star icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import './Home.css';
import Checkout from '../Checkout/Checkout';
import Cart from '../Cart/Cart';

import { TailSpin } from 'react-loader-spinner';
import { useStateValue } from '../../context/CartProvider';

const Home = ({ products, error, loading, addToCart }) => {
  
  const [{ cartR }, dispatch] = useStateValue();

  return (
    <main className="home">
      <div className="home__container">
        {/* <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt="home image"
          /> */}

        <div className="home__row">
          {error ?? 'Page not found'}
          {loading ? (
            <TailSpin
              height="80"
              width="80"
              color="#61dafb"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : null}
          {products ? (
            products.map((product) => (
              <ChildrenProd key={product.id}>
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
                        <p>*</p>
                      ))}
                  </div> */}
                </div>

                {/* <Counter /> */}

                {/* Button puede ser un component */}
                <button
                  onClick={
                    () =>
                      dispatch({
                        type: 'add_to_cart',
                        // payload: '',
                      }) /* () => addToCart(product.id) */
                  }
                  className="product__btnAddToCart"
                >
                  Add to Cart
                </button>

              </ChildrenProd>
            ))
          ) : (
            <h2>No products obtained</h2>
          )}
        </div>

        <div className="home__row">
          {(products &&
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                addToCart={() => addToCart(product.id)}
              />
            ))) || <h2>No products obtained</h2>}
        </div>

        {/* <div>
            <Checkout cart={cart} />
          </div> */}
      </div>

      {/* <p>{JSON.stringify(cart)}</p> */}
      {/* {console.log(cart)} */}
    </main>
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
