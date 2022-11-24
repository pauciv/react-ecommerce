import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  //! API
  const [users, setUsers] = useState([]);
  const url = 'http://localhost:3001/users';

  console.log('users = ', users);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url); // cuando no especificamos el segundo parámetro en el fetch(), estamos haciendo una petición con el método GET.
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.warn('login error');
      }
    };
    getUsers();
  }, [url]);
  //! ___

  const [registerState, setRegisterState] = useState({
    userName: '',
    email: '',
    password: '',
    rePassword: '',
  });
  console.log('registerState = ', registerState);

  const { userName, email, password, rePassword } = registerState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log(name, value);

    setRegisterState({
      ...registerState,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !rePassword) {
      console.warn('you must complete all the inputs');
      return;
    } else if (users.find((user) => user.email === email)) {
      console.warn(`${email} is already used`);
      return;
    } else if (password !== rePassword) {
      console.warn('passwords do not match');
      return;
    }

    const newUser = {
      userName,
      email,
      password,
    };
    console.log('newUser = ', newUser);

    // ! add the new user to the db.json
    const addNewUser = async (newUser) => {
      // const userIds = users.map((user) => user.id);
      // const maxUserId = Math.max(...userIds) || 0;
      // newUser.id = maxUserId + 1;

      try {
        const url = 'http://localhost:3001/users';
        const options = {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=utf-8' },
          body: JSON.stringify(newUser),
        };
        const response = await fetch(url, options);
        // const json = await response.json();

        if (!response.ok) {
          throw { status: response.status, statusText: response.statusText };
        }
      } catch (error) {
        const message = error.statusText || 'unknown error';
        console.error(`Error ${error.status}: ${message}`);
      }

      // console.log([...users, newUser]);
      // return [...users, newUser];
    };
    addNewUser(newUser);

    // reset the form
    setRegisterState({
      userName: '',
      email: '',
      password: '',
      rePassword: '',
    });
  };

  return (
    // {success && <Navigate to="/" />}

    <div className="login">
      {/* <Link to="/"> */}
      <img className="login__logo" src="logo512.png" />
      {/* </Link> */}

      <div>
        <div className="login__container">
          <h1>Create Account</h1>

          <form
            onSubmit={onFormSubmit}
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   login(email, password);
            // }}
          >
            <h2>Name</h2>
            <input
              type="text"
              name="userName"
              value={userName}
              placeholder="First and last name"
              onChange={onInputChange}
            />

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
              placeholder="At least 6 characters"
              value={password}
              onChange={onInputChange}
            />

            <h2>Re-enter password</h2>
            <input
              type="password"
              name="rePassword"
              value={rePassword}
              onChange={onInputChange}
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
