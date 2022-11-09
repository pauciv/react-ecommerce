// import { useState, useEffect } from 'react';

// // console.log('Demo');

// const Demo = ({ initialValue = 1, btnProp }) => {
//   const [numItems, setNumItems] = useState(initialValue);

//   useEffect(() => {
//     // console.log(`Qty: ${numItems}`);
//   }, [numItems]); // se ejecuta cada vez que numItems cambia

//   const addItem = () => {
//     setNumItems(numItems + 1);
//   };

//   const subtractItem = () => {
//     setNumItems((prev) => prev - 1);
//     setNumItems((prev) => prev - 1);
//   };

//   const [state, setState] = useState({
//     name: 'Pau',
//     surname: 'Civill',
//   });

//   const assignId = () => {
//     setState((prevState) => {
//       console.log(prevState);
//       return {
//         ...prevState,
//         id: 1,
//       };
//     });
//   };

//   return (
//     <>
//       <div className="counter">
//         <p>Qty: {numItems}</p>
//         <button onClick={addItem}>+</button>

//         {/* {numItems > 1 ? (
//         <button onClick={subtractItem}>-</button>
//       ) : (
//         // <button disabled>-</button>
//         undefined
//       )} */}

//         {numItems > 1 && <button onClick={subtractItem}>-</button>}
//       </div>

//       <div>
//         <p>{JSON.stringify(state)}</p>
//         <p>
//           {state.name} {state.id}
//         </p>
//         <button onClick={assignId}>Set Id</button>
//       </div>
//     </>
//   );
// };

// export default Demo;

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


//! TESTS 

import { useEffect, useState, useMemo, useCallback, useId } from 'react';
import List from './List';

const initialUsers = [
  { id: 1, name: 'Maria' },
  { id: 2, name: 'Pau' },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  // const id = useId();

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  // useCallback
  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );

  const handleSearch = () => {
    setSearch(text);
  };

  // const filteredUsers = users.filter((user) => {
  //   console.log('filter process');
  //   return user.name.toLowerCase().includes(search.toLowerCase()); // para hacer la búsqueda sin darle a search, en lugar de poner search, ponemos text.
  // });

  // useMemo
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        // console.log('filter process');
        return user.name.toLowerCase().includes(search.toLowerCase()); // para hacer la búsqueda sin darle a search, en lugar de poner search, ponemos text.
      }),
    [search, users]
  );

  const printUsers = useCallback(() => {
    console.log('users changed', users);
  }, [users]);

  useEffect(() => {
    // console.log('App render');
    // console.log(users);
  });

  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleAdd}>Add</button>
        <List users={filteredUsers} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;