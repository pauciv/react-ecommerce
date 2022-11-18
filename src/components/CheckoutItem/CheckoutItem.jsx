import React from 'react';
import { Stack } from 'react-bootstrap';
import { useReducerState } from '../../context/ReducerStateProvider';
import './CheckoutItem.css';

const CheckoutItem = ({ children }) => {

  // en el caso de que en lugar de con children, añadieramos el código aquí.
  // const [{ cartR }, dispatch] = useStateValue();
  // const deleteFromCart = () => null;

  return (
    <Stack className="checkout__item" direction='horizontal'>
      {children}
    </Stack>
  );
};

export default CheckoutItem;
