import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formState, setFormState] = useState({
    unserName: '',
    email: '',
    password: '',
  });

  const { userName, email, password } = formState;

  const onFormSubmit = () => {};

  const onInputChange = ({ target }) => {
    const { name, value } = target;
  };

  return (
    <div className="login">
      {/* <Link to="/"> */}
      <img className="login__logo" src="logo512.png" />
      {/* </Link> */}

      <div>
        <div className="login__container">
          <h1>Create Account</h1>

          <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   login(email, password);
          // }}
          >
            <h2>Name</h2>
            <input
              type="text"
              name="name"
              placeholder="First and last name"
              value={userName}
              onChange={onInputChange}
            />

            <h2>Mobile number or email</h2>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onInputChange}
            />

            <h2>Password</h2>
            {/* <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
            /> */}

            <h2>Re-enter password</h2>
            <input
              type="password"
              name="password"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              // onClick={signIn}
              className="login__signInButton"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
