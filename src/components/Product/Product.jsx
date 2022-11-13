import React from 'react';
import './Product.css';
import Counter from '../Counter/Counter';
import CartButton from '../CartButton/CartButton';

//rating star icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useStateValue } from '../../context/CartProvider';

const defaultImg =
  'https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=';

function Product({ id, title, image = defaultImg, price, rating, addToCart }) {
  const [{ cartR }, dispatch] = useStateValue();
  console.log('cartR = ', cartR);

  const addToWishlist = () => {
    dispatch({
      type: 'add_to_cart',
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img className="product__image" src={image} alt="product image" />

      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          {price}
        </p>
        <div className="product__rating">
          {/* svg para las estrellas */}
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

      {/* <CartButton onClick={handleAddToCart}>Add to C</CartButton> */}

      {/* Button puede ser un component */}
      <button onClick={addToCart} className="product__btnAddToCart">
        Add to Cart
      </button>

      <FavoriteBorderIcon
        onClick={() => addToWishlist()}
        className="product__wishlist"
      />

      {/* <FavoriteIcon
        onClick={() => deleteFromWishlist(item.id)}
        className="item__btn--delete"
      /> */}
    </div>
  );
}

export default Product;
