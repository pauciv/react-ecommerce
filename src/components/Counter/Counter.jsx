import { useState } from 'react';
import './Counter.css';

const Counter = ({ initialValue = 1, handleIncrementQty }) => {
  const [numItems, setNumItems] = useState(initialValue);

  const handleAddItem = () => {
    setNumItems((prevState) => prevState + 1);
  };

  const handleSubtractItem = () => {
    setNumItems((prevState) => prevState - 1);
  };

  return (
    <>
      <div className="counter">
        <p>Qty: {numItems}</p> {/* numItems que sea el value de un input? */}
        <button onClick={handleAddItem}>+</button>
        {/* <button onClick={handleIncrementQty}>+qty</button> */}
        
        {(numItems > 1 && <button onClick={handleSubtractItem}>-</button>) || (
          <button disabled>-</button>
        )}

        {/* {numItems > 1 ? (
          <button onClick={subtractItem}>-</button>
        ) : (
          <button disabled>-</button>
        )} */}
      </div>
    </>
  );
};

export default Counter;
