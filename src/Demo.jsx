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
        <p>
          {state.name} {state.id}
        </p>
        <button onClick={assignId}>Set Id</button>
      </div>
    </>
  );
};

export default Demo;

// * async / await

// async function foo() {
//   return 2; // el valor que retorna va encapsulado dentro de un objeto promise
// }

// // -- usando await (espera a que se resuelva la promesa)
// // const a = await foo() // 2
// // console.log(a)

// // -- usando el callback then
// const dev = foo(); // Objeto promise
// // console.log(dev);
// dev.then((value) => console.log(value)); // 2
