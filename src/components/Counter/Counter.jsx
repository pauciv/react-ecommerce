import { useState } from 'react';
import './Counter.css';

const Counter = ({ initialValue = 1 }) => {
  const [numItems, setNumItems] = useState(initialValue);

  const addItem = () => {
    setNumItems(numItems + 1);
  };

  const substractItem = () => {
    setNumItems(numItems - 1);
  };

  return (
    <div className="counter">
      <p>Qty: {numItems}</p>
      <button onClick={addItem}>+</button>

      {numItems > 1 ? (
        <button onClick={substractItem}>-</button>
      ) : (
        <button disabled>-</button>
      )}
    </div>
  );
};

export default Counter;
