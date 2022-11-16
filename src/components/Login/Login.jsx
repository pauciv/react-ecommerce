import React, { useState } from 'react';
import './Login.css';

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const signIn = (e) => {
    e.preventDefault()

  }

  const createAccount = () => {
    return;
  }

  return (
    <div className="login">
      {/* <Link to="/"> */}
      <img className="login__logo" src="logo512.png" />
      {/* </Link> */}

      <div>
        <div className="login__container">
          <h1>Sign in</h1>

          <form>
            <h2>Email</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h2>Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
        </div>

        <button onClick={createAccount} className="login__registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default Login;
