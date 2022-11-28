import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
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

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

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

    const verifyLoginUser = async (loginUser) => {
      try {
        const url = 'http://localhost:3001/users';
        const response = await fetch(url);
        const json = await response.json();

        const users = json;
        const correctLoginUser = users.find(
          (user) =>
            user.email === loginUser.email &&
            user.password === loginUser.password
        );
        console.log(correctLoginUser);

        if (correctLoginUser) {
          console.log(correctLoginUser);
          login(correctLoginUser);

          navigate('/', {
            replace: true,
          });
        }

        if (!response.ok) {
          throw { status: response.status, statusText: response.statusText };
        }
      } catch (error) {
        const message = error.statusText || 'unknown error';
        console.error(`Error ${error.status}: ${message}`);
      }
    };
    verifyLoginUser(loginUser);

    // reset the form
    setLoginState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login">
      {/* <Link to="/"> */}
      <img className="login__logo" src="../../logo512.png" />
      {/* </Link> */}

      <div>
        <div className="login__container">
          <h1>Sign in</h1>

          <form onSubmit={onFormSubmit}>
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
              className="login__signInButton"
            >
              Sign In
            </Button>
          </form>
        </div>

        <Link to="/register">
          <Button variant="outline-secondary" className="login__registerButton">Create your Account</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
