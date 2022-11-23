import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/CartProvider';

const Counter = ({ id, itemQuantity }) => {
  const { addToCart, decreaseQuantity } = useCartContext();

  return (
    <div className="d-flex align-items-center h-2">
      <p>Qty: {itemQuantity}</p> {/* numItems que sea el value de un input? */}
      {/* <input type='num' value={itemQuantity} /> */}
      <Button
        onClick={() => addToCart(id)}
        variant="outline-secondary"
        size="sm"
        className="m-1"
      >
        +
      </Button>
      <Button
        onClick={() => decreaseQuantity(id)}
        disabled={itemQuantity === 1}
        variant="outline-secondary"
        size="sm"
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
