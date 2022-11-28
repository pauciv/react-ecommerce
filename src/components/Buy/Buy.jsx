import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import Checkout from '../Checkout/Checkout';

const Buy = () => {
  const { user } = useContext(AuthContext);

  const [buyState, setBuyState] = useState({
    userName: user.userName || '',
    mobileNumber: user.mobileNumber || '',
    country: user.country || '',
    address: user.address || '',
    postalCode: user.postalCode || '',
    city: user.city || '',
    province: user.province || '',
  });

  console.log('buyState = ', buyState);

  const {
    userName,
    mobileNumber,
    country,
    address,
    postalCode,
    city,
    province,
  } = buyState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log(name, value);

    setBuyState({
      ...buyState,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (
      !userName ||
      !mobileNumber ||
      !country ||
      !address ||
      !postalCode ||
      !city ||
      !province
    ) {
      console.warn('you must complete all the inputs');
      return;
    }

    const buyData = {
      userName,
      mobileNumber,
      country,
      address,
      postalCode,
      city,
      province,
    };
    console.log('buyData = ', buyData);

    setBuyState({
      userName: '',
      mobileNumber: '',
      country: '',
      address: '',
      postalCode: '',
      city: '',
      province: '',
    });
  };

  return (
    <div className="login">
      <div className="login__container mt-4">
        <h2>Address</h2>

        <form onSubmit={onFormSubmit}>
          <h2>Full name</h2>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={onInputChange}
          />

          <h2>Mobile number</h2>
          <input
            type="text"
            name="mobileNumber"
            value={mobileNumber}
            onChange={onInputChange}
          />

          <h2>Country/Region</h2>
          <input
            type="text"
            name="country"
            value={country}
            onChange={onInputChange}
          />

          <h2>Address</h2>
          <input
            type="text"
            name="address"
            value={address}
            onChange={onInputChange}
          />

          <h2>Postal code</h2>
          <input
            type="text"
            name="postalCode"
            value={postalCode}
            onChange={onInputChange}
          />

          <h2>City</h2>
          <input
            type="text"
            name="city"
            value={city}
            onChange={onInputChange}
          />

          <h2>Province</h2>
          <input
            type="text"
            name="province"
            value={province}
            onChange={onInputChange}
          />

          <Button type="submit" className="login__signInButton">
            Buy
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Buy;
