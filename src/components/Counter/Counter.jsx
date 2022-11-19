import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import './Counter.css';

const Counter = ({ id, itemQuantity}) => {
  // const [itemQty, setItemQty] = useState(initialValue);

  // console.log(itemQuantity)
  
  // const handleAddItem = () => {
  //   setItemQty((prevState) => prevState + 1);
  // };

  // const handleSubtractItem = () => {
  //   setItemQty((prevState) => prevState - 1);
  // };

  const { addToCart, decreaseQuantity } = useCartContext()

  return (
    <>
      <div className="counter">
        <p>Qty: {itemQuantity}</p> {/* numItems que sea el value de un input? */}
        {/* <input type='num' value={itemQuantity} /> */}
        <button onClick={() => addToCart(id)}>+</button>
        {/* <button onClick={handleIncrementQty}>+qty</button> */}
        {itemQuantity > 1 ? (
          <button onClick={() => decreaseQuantity(id)}>-</button>
        ) : (
          <button disabled>-</button>
        )}
      </div>
    </>
  );
};

export default Counter;
