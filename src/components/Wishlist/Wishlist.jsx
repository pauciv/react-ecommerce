import React, { useContext, useEffect } from 'react';
import '../Checkout/Checkout.css';
import { useWishlistContext } from '../../context/WishlistProvider';
import WishlistItem from './WishlistItem';
import { Col, Container, Row } from 'react-bootstrap';

const Wishlist = () => {
  const { wishlistItems } = useWishlistContext();

  return (
    <Container>
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
    </Container>
  );
};

export default Wishlist;
