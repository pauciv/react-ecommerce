import React from 'react';

const CartButton = ({ onClick, children }) => {
  return (
    <button type="button" className="btn">
      {children} {/* children = Add to cart or Delete */}
    </button>
  );
};

export default CartButton;
