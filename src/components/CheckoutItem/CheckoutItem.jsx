import React from 'react';
import { useStateValue } from '../../context/CartProvider';
import './CheckoutItem.css';

const CheckoutItem = ({ children }) => {

  // en el caso de que en lugar de con children, añadieramos el código aquí.
  // const [{ cartR }, dispatch] = useStateValue();
  // const deleteFromCart = () => null;

  return (
    <div className="checkout__item">
      {children}
    </div>
  );
};

export default CheckoutItem;
