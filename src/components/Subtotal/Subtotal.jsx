import React from 'react';
import './Subtotal.css';

const Subtotal = () => {
  return (
    <div className="subtotal">
      {/* npm i react-currency-format */}
      <div>
        <p>Subtotal (0 item): $0</p>
        {/* <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small> */}
      </div>
      <button className="subtotal__btncheckout">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
