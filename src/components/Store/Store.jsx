//rating star icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import './Store.css';

import { TailSpin } from 'react-loader-spinner';
import { Col, Container, Row } from 'react-bootstrap';
import StoreItem from '../StoreItem/StoreItem';

const Store = ({ products, error, loading }) => {
  
  return (
    <main className="home">
      <Container>
        <Row md={3} xs={2} lg={5} className='mb-4'>
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
              <Col key={product.id} className="mt-3">
                <StoreItem product={product} {...product} />
              </Col>
            ))
          ) : (
            <h2>No products obtained</h2>
          )}
        </Row>

        {/* <div className="home__row">
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
        </div> */}

        {/* <div>
            <Checkout cart={cart} />
          </div> */}
      </Container>

      {/* <p>{JSON.stringify(cart)}</p> */}
      {/* {console.log(cart)} */}
    </main>
  );
};

export default Store;

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
