import { Button, Card } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { formatCurrency } from '../../utilities/formatCurrency';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './StoreItem.css';
import { useContext, useEffect } from 'react';
import { WishlistContext } from '../../context/WishlistContext';

const StoreItem = ({ /* product, */ id, image, title, price, rating }) => {
  const { addToCart } = useCartContext();
  const quantity = 0;

  // const [{ wishlist }, dispatch] = useReducerState();
  const [{ wishlist }, dispatch] = useContext(WishlistContext);
  console.log('wishlist = ', wishlist);

  // el useEffect deber'ia estar en el context para que actualice el localStorage tanto si se anade desde product como desde checkout
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = () => {
    // setState(true) //TODO. pintar el corazón en función de si está o no en la wishlist.
    const action = {
      type: 'add_to_wishlist',
      payload: {
        id,
        title,
        image,
        price,
        rating,
      },
    };
    dispatch(action);
    console.log('action = ', action);
  };

  return (
    <Card className="h-100">
      <Card.Img className="store__item--img" src={image} height="150" />
      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mt-2">
          {/* <small>$</small> */}
          {formatCurrency(price)}
        </Card.Text>
        <div className="product__rating">
          {/* {Array(rating)
            .fill()
            .map(() => (
              <p>*</p>
            ))} */}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarBorderIcon />
          {/* <StarOutlineIcon /> */}
        </div>
        <div>
          {quantity === 0 ? (
            <Button onClick={() => addToCart(id)} variant="primary">
              Add to Cart
            </Button>
          ) : (
            <Button variant="primary">Add another one</Button>
          )}

          <FavoriteBorderIcon
            onClick={() => addToWishlist({/* ...product */})}
            className="product__wishlist"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
