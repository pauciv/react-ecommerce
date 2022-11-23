import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // // console.log(email, password);

  // const signIn = (e) => {
  //   e.preventDefault();
  // };

  // const login = (email, password) => {
  //   if (email === 'pau@gmail.com' && password === '123') {
  //     console.log('logged');
  //   } else console.log('incorrect');
  // };




  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  // console.log('loginState = ', loginState);

  const { email, password } = loginState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log(name, value);

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.warn('you must complete all the inputs');
      return;
    }

    const loginUser = {
      email,
      password,
    };
    console.log('loginUser = ', loginUser);


    // const verifyUser = async (loginUser) => {
    //   try {
    //     const url = 'http://localhost:3001/users';
    //     const options = {
    //       method: 'POST',
    //       headers: { 'Content-type': 'application/json; charset=utf-8' },
    //       body: JSON.stringify(loginUser),
    //     };
    //     const response = await fetch(url, options);
    //     const json = await response.json();

    //     if (!response.ok) {
    //       throw { status: response.status, statusText: response.statusText };
    //     }
    //   } catch (error) {
    //     const message = error.statusText || 'unknown error';
    //     console.error(`Error ${error.status}: ${message}`);
    //   }
    // };
    // verifyUser(loginUser);

    // reset the form
    setLoginState({
      email: '',
      password: '',
    });
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
            onSubmit={onFormSubmit}
          >
            <h2>Email</h2>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onInputChange}
            />

            <h2>Password</h2>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
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
          <button className="login__registerButton">
            Create your Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
