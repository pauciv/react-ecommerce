import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';

const Buy = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="login">
      {/* <Link to="/"> */}
      <img className="login__logo" src="logo512.png" />
      {/* </Link> */}

      <div>
        <div className="login__container">
          <h1>Buy</h1>

          <form
          // onSubmit={onFormSubmit}
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   login(email, password);
          // }}
          >
            <h2>Full name</h2>
            <input
              type="text"
              name="userName"
              value={/* userName */user.userName}
              placeholder="First and last name"
              //   onChange={onInputChange}
            />

            <h2>Mobile number</h2>
            <input
              type="text"
              name="email"
              //   value={email}
              //   onChange={onInputChange}
            />

            {/* TODO: select */}
            <h2>Country/Region</h2>
            <input
              type="text"
              name="country"
              //   value={country}
              //   onChange={onInputChange}
            />

            <h2>Address</h2>
            <input
              type="text"
              name="address"
              //   value={address}
              //   onChange={onInputChange}
            />

            <h2>Postal code</h2>
            <input
              type="text"
              name="postalCode"
              //   value={postalCode}
              //   onChange={onInputChange}
            />

            <h2>City</h2>
            <input
              type="text"
              name="city"
              //   value={city}
              //   onChange={onInputChange}
            />

            <h2>Province</h2>
            <input
              type="text"
              name="city"
              //   value={city}
              //   onChange={onInputChange}
            />

            <Button
              type="submit"
              // onClick={signIn}
              className="login__signInButton"
            >
              Use this address
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Buy;
