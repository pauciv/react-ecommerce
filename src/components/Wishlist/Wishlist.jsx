import React, { useContext } from 'react';
import Subtotal from '../Subtotal/Subtotal';
import Counter from '../Counter/Counter';

import '../Checkout/Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CartButton from '../CartButton/CartButton';
import { CartContext } from '../../context/ReducerStateContext';
import { useReducerState } from '../../context/ReducerStateProvider';
import WishlistItem from './WishlistItem';
import ChildrenProd from '../Product/ChildrenProd';

//rating star icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Wishlist = ({ id, title, image, price, rating, addToCart }) => {

  const [{ wishlist }, dispatch] = useReducerState();
  // console.log('wishlist = ', wishlist);

  const deleteFromWishlist = (id) => {
    const action = {
      type: 'delete_from_wishlist',
      payload: id,
    }
    console.log(id)
    dispatch(action);
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">Wishlist</h2>
        </div>

        <div className="checkout__items">
          {wishlist ? (
            wishlist.map((item) => (
              <ChildrenProd key={item.id}>
                <div className="item__image">
                  <img
                    className="item__image"
                    src={item.image}
                    alt="product image"
                  />
                </div>

                <div className="item__info">
                  <p className="item__title">{item.title}</p>
                  <p className="item__price">
                    <small>$</small>
                    {item.price}
                  </p>
                  <div className="item__rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                    {/* <StarOutlineIcon /> */}
                  </div>

                  {/* <Counter
                    itemQuantity={item.quantity}
                    addToCart={() => addToCart(item.id)}
                    handleSubtractQty={() => handleSubtractQty(item.id)}
                    handleIncrementQty={() => handleIncrementQty(item.id)}
                  /> */}

                  <Counter />

                  {/* Button puede ser un component */}
                  <button
                    onClick={() => addToCart(/* item.id */)}
                    className="product__btnAddToCart"
                  >
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteFromWishlist(item.id)}
                    className="item__btn--delete"
                  >
                    Delete
                  </button>
                </div>
              </ChildrenProd>
            ))
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Wishlist;
