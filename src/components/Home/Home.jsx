// import { useId } from 'react';
// import Product from '../Product/Product';
import ChildrenProd from '../Product/ChildrenProd';
import Cart from '../Cart/Cart';
import products from '../../assets/db/db';

//rating star icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import './Home.css';

console.log(products);

function Home() {
	return (
		<>
			<div className="home">
				<div className="home__container">
					{/* <img
						className="home__image"
						src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
						alt="home image"
					/> */}

					<div className="home__row">
						{products.map((product) => (
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

								<button className="product__btnAddToCart">Add to Cart</button>
							</ChildrenProd>
						))}

						{/* <div className="home__container">
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
					</div> */}
					</div>
				</div>
			</div>
			{/* <div className="cart">
				<Cart />
			</div> */}
		</>
	);
}

export default Home;
