import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(email, password);

  const signIn = (e) => {
    e.preventDefault();
  };

  const login = (email, password) => {
    if (email === 'pau@gmail.com' && password === '123') {
      console.log('logged');
    } else console.log('incorrect');
  };

  const createAccount = () => {
    return;
  };

  return (
    <div className="login">
      {/* <Link to="/"> */}
      <img className="login__logo" src="logo512.png" />
      {/* </Link> */}

      <div>
        <div className="login__container">
          <h1>Sign in</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(email, password);
            }}
          >
            <h2>Email</h2>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h2>Password</h2>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              // onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </Button>
          </form>
        </div>

        <Link to='/register'>
          <button onClick={createAccount} className="login__registerButton">
            Create your Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
