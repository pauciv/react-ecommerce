import React, { memo, useEffect, useId } from 'react';
// import Item from './Item';

// memo sirve para memorizar un componente en base a sus props y que, en el caso de que no hayan cambiado, no se vuelva a renderizar el componenente.

const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    // console.log('List Render');
  });

  //   const id = useId();
  //   console.log(id);

  // return (
  //   <>
  //     <ul>
  //       {users.map((user) => (
  //         <Item key={user.id} user={user} handleDelete={handleDelete} /> // si pongo llaves me hace poner return, si pongo paréntesis lo hace solo.
  //       ))}
  //     </ul>
  //   </>
  // );
});

export default List;