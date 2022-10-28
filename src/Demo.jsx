import { useState, useEffect } from 'react';

console.log('Demo');

const Demo = ({ initialValue = 1, btnProp }) => {
  const [numItems, setNumItems] = useState(initialValue);

  //   useEffect(() => {
  //     first

  //     return () => {
  //       second
  //     }
  //   }, [third])

  useEffect(() => {
    console.log(`Qty: ${numItems}`)
  }, [numItems]); // se ejecuta cada vez que numItems cambia

  const addItem = () => {
    setNumItems(numItems + 1);
  };

  const subtractItem = () => {
    setNumItems(numItems - 1);
  };

  return (
    <div className="counter">
      <p>Qty: {numItems}</p>
      <button onClick={addItem}>+</button>

      {/* {numItems > 1 ? (
        <button onClick={subtractItem}>-</button>
      ) : (
        // <button disabled>-</button>
        undefined
      )} */}

      {numItems > 1 && <button onClick={subtractItem}>-</button>}
    </div>
  );
};

export default Demo;
