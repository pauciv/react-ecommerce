import React, { useContext, useEffect } from 'react';
import '../Checkout/Checkout.css';
import { useWishlistContext } from '../../context/WishlistProvider';
import WishlistItem from './WishlistItem';
import { Col, Row } from 'react-bootstrap';

const Wishlist = () => {
  // const [{ wishlist }, dispatch] = useWishlistContext();
  const { wishlistItems } = useWishlistContext();
  console.log(wishlistItems)

  // useEffect(() => {
  //   localStorage.setItem('wishlist', JSON.stringify(wishlist));
  // }, [wishlist]);

  // const deleteFromWishlist = (id) => {
  //   const action = {
  //     type: 'delete_from_wishlist',
  //     payload: id,
  //   };
  //   console.log(id);
  //   dispatch(action);
  // };

  return (
    <div>
      <div>
        <div className="checkout__header">
          <h2 className="checkout__title">Wishlist</h2>
        </div>

        <Row md={4} xs={3} lg={5}>
          {wishlistItems ? (
            wishlistItems.map((wishlistItem) => (
              <Col key={wishlistItem.id}>
                <WishlistItem {...wishlistItem} />
              </Col>
            ))
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Wishlist;
