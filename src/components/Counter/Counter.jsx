import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/CartProvider';

const Counter = ({ id, itemQuantity}) => {

  const { addToCart, decreaseQuantity } = useCartContext()

  return (
    <>
      <div className='d-flex align-items-center h-2'>
        <p>Qty: {itemQuantity}</p> {/* numItems que sea el value de un input? */}
        {/* <input type='num' value={itemQuantity} /> */}
        <Button onClick={() => addToCart(id)} variant="outline-secondary" size="sm" className='m-1'>+</Button>
        {/* <button onClick={handleIncrementQty}>+qty</button> */}
        {itemQuantity > 1 ? (
          <Button onClick={() => decreaseQuantity(id)} variant="outline-secondary" size="sm">-</Button>
        ) : (
          <Button disabled variant="outline-secondary" size="sm">-</Button>
        )}
      </div>
    </>
  );
};

export default Counter;
