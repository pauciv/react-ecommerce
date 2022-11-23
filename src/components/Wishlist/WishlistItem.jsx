import React from 'react';
import '../CheckoutItem/CheckoutItem.css';

import { Button, Card } from 'react-bootstrap';
import { useCartContext } from '../../context/CartProvider';
import { formatCurrency } from '../../utilities/formatCurrency';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useWishlistContext } from '../../context/WishlistProvider';

const WishlistItem = ({ id, title, image, price, quantity }) => {
  const { addToCart } = useCartContext();
  const { wishlistItems, deleteFromWishlist } = useWishlistContext();

  const isInWishlist = wishlistItems.findIndex((item) => item.id === id);

  return (
    <Card className="h-100">
      <div className="d-flex justify-content-end">
        {isInWishlist === -1 ? null : (
          <FavoriteIcon
            onClick={() => deleteFromWishlist(id)}
            className="product__wished m-2"
          />
        )}
      </div>

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
            <Button onClick={() => addToCart(id)} variant="primary">
              Add another one
            </Button>
          )}

          {/* <Button
            type="button"
            onClick={() => deleteFromWishlist(id)}
            variant="outline-secondary"
            size="sm"
            className="item__btn--delete"
          >
            Delete
          </Button> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default WishlistItem;
