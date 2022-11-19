import React from 'react';
import { Stack } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { useWishlistContext } from '../../context/WishlistProvider';
import { formatCurrency } from '../../utilities/formatCurrency';
import Counter from '../Counter/Counter';
import './CheckoutItem.css';

const CheckoutItem = ({ id, title, image, price, rating, quantity }) => {
  // en el caso de que en lugar de con children, añadieramos el código aquí.
  // const [{ cartR }, dispatch] = useStateValue();
  // const deleteFromCart = () => null;

  const { deleteFromCart } = useCartContext();

  const [{ wishlist }, dispatch] = useWishlistContext();
  console.log('wishlist = ', wishlist);

  const addToWishlist = (id, title, image, price, rating) => {
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
  };

  return (
    <Stack className="checkout__item" direction="horizontal">
      <div className="item__image">
        <img className="item__image" src={image} alt="product image" />
      </div>

      <div className="item__info">
        <p className="item__title">{title}</p>

        <Counter id={id} itemQuantity={quantity} />

        <button
          type="button"
          onClick={() => deleteFromCart(id)}
          className="item__btn--delete"
        >
          Delete
        </button>

        <button
          type="button"
          onClick={() => addToWishlist(id, title, image, price, rating)}
          className="item__btn--wishlist"
        >
          Save to Wishlist
        </button>
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
