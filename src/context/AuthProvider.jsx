import { useReducer } from 'react';
// import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { types, AuthReducer } from '../store/AuthReducer';

export const AuthProvider = ({ children }) => {

  const init = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return {
      isLogged: !!user,
      user,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const login = (loginUser = {}) => {
    console.log(loginUser)

    sessionStorage.setItem('user', JSON.stringify(loginUser));

    dispatch({
      type: types.login,
      payload: loginUser,
    });
  };

  const logout = () => {
    sessionStorage.removeItem('user');

    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
