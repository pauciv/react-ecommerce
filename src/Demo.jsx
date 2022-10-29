import { useState, useEffect } from 'react';

// console.log('Demo');

const Demo = ({ initialValue = 1, btnProp }) => {
  const [numItems, setNumItems] = useState(initialValue);

  useEffect(() => {
    // console.log(`Qty: ${numItems}`);
  }, [numItems]); // se ejecuta cada vez que numItems cambia

  const addItem = () => {
    setNumItems(numItems + 1);
  };

  const subtractItem = () => {
    setNumItems((prev) => prev - 1);
    setNumItems((prev) => prev - 1);
  };


  const [state, setState] = useState({
    name: 'Pau',
    surname: 'Civill',
  });

  const assignId = () => {
    setState((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        id: 1,
      };
    });
  };


  return (
    <>
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

      <div>
        <p>{JSON.stringify(state)}</p>
        <p>{state.name} {state.id}</p>
        <button onClick={assignId}>Set Id</button>
      </div>
    </>
  );
};

export default Demo;
