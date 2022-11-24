import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoutes = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
  console.log(isLogged);

  return isLogged ? children : <Navigate to='/login' />
};

export default PrivateRoutes;
