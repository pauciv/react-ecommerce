import { useReducer } from 'react';
// import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { types, AuthReducer } from '../store/AuthReducer';

export const AuthProvider = ({ children }) => {
  //   const initArgs = {
  //     isLogged: false,
  //     // user,
  //   };

  const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
      isLogged: !!user,
      user,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const login = (name = '') => {
    const user = {
      id: 22,
      name,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: types.login,
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
