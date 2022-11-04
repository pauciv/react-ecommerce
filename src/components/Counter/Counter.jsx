import { useState } from 'react';
import './Counter.css';

const Counter = ({ initialValue = 1, itemQuantity, handleIncrementQty }) => {
  const [itemQty, setItemQty] = useState(initialValue);

  console.log(itemQuantity)

  const handleAddItem = () => {
    setItemQty((prevState) => prevState + 1);
  };

  const handleSubtractItem = () => {
    setItemQty((prevState) => prevState - 1);
  };

  return (
    <>
      <div className="counter">
        <p>Qty: {itemQty}</p> {/* numItems que sea el value de un input? */}
        {/* <input type='num' value={itemQuantity} /> */}
        <button onClick={handleAddItem}>+</button>
        {/* <button onClick={handleIncrementQty}>+qty</button> */}
        {itemQty > 1 ? (
          <button onClick={handleSubtractItem}>-</button>
        ) : (
          <button disabled>-</button>
        )}
      </div>
    </>
  );
};

export default Counter;
