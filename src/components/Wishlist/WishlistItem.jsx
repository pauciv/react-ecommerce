import React from 'react'
import '../CheckoutItem/CheckoutItem.css';

const WishlistItem = ({ children }) => {
  return (
    <div className="checkout__item">
      {children}
    </div>
  );
}

export default WishlistItem