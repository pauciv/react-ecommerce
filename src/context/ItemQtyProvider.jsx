import React, { useState } from 'react';
import { ItemQtyContext } from './ItemQtyContext';

const ItemQtyProvider = ({ initialValue = 1, children }) => {
  const [itemQty, setItemQty] = useState(initialValue);

  return (
    <ItemQtyContext.Provider value={{ itemQty, setItemQty }}>
        {children}
    </ItemQtyContext.Provider>
  );
};

export default ItemQtyProvider;
