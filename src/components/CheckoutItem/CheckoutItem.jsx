import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useCartContext } from '../../context/CartProvider';
import { useWishlistContext } from '../../context/WishlistProvider';
import { formatCurrency } from '../../utilities/formatCurrency';
import Counter from '../Counter/Counter';
import './CheckoutItem.css';

const CheckoutItem = ({ id, title, image, price, rating, quantity }) => {

  const { deleteFromCart } = useCartContext();
  const { addToWishlist } = useWishlistContext();

  // const [{ wishlist }, dispatch] = useWishlistContext();
  // console.log('wishlist = ', wishlist);

  // const addToWishlist = (id, title, image, price, rating) => {
  //   const action = {
  //     type: 'add_to_wishlist',
  //     payload: {
  //       id,
  //       title,
  //       image,
  //       price,
  //       rating,
  //     },
  //   };
  //   dispatch(action);
  // };

  return (
    <Stack className="checkout__item" direction="horizontal">
      <div className="item__image">
        <img className="item__image" src={image} alt="product image" />
      </div>

      <div className="item__info">
        <p className="item__title">{title}</p>

        <Counter id={id} itemQuantity={quantity} />

        <Button
          type="button"
          onClick={() => deleteFromCart(id)}
          variant="outline-dark" size="sm"
          className="item__btn--delete"
        >
          Delete
        </Button>

        <Button
          type="button"
          onClick={() => addToWishlist(id, image, title, price, rating)}
          variant="outline-secondary" size="sm"
          className=" ms-1 item__btn--wishlist"
        >
          Save to Wishlist
        </Button>
      </div>

      <div>
        <p className="item__price">
          {/* <small>$</small> */}
          {formatCurrency(price * quantity)}
        </p>
      </div>
    </Stack>
  );
};

export default CheckoutItem;
