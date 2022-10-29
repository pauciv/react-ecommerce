import { useState } from 'react';
import './Counter.css';

const Counter = ({ initialValue = 1 }) => {
  const [numItems, setNumItems] = useState(initialValue);

  const addItem = () => {
    setNumItems((prevState) => prevState + 1);
  };

  const subtractItem = () => {
    setNumItems((prevState) => prevState - 1);
  };

  return (
    <>
      <div className="counter">
        <p>Qty: {numItems}</p>
        <button onClick={addItem}>+</button>

        {(numItems > 1 && <button onClick={subtractItem}>-</button>) || (
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
