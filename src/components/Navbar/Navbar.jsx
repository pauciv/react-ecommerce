import { memo, useContext } from 'react';
import { Button, Navbar as NavbarB } from 'react-bootstrap';

import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';
import SearchForm from './SearchForm';
import { AuthContext } from '../../context/AuthContext';

const Navbar = ({ handleSearch }) => {
  const { totalCartQuantity, openCart } = useCartContext();

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate('/login', {
      replace: true,
    });
  };

  return (
    <>
      <NavbarB sticky="top" className="bg-black shadow-sm mb-2 d-flex justify-content-between">
        <Link to="/">
          <img
            className="header__logo"
            src="../../logo512.png"
            alt="reactjs logo"
          />
        </Link>

        <SearchForm />

        <div className="header__nav">
          {user ? (
            <span className="header__option">Hello, {user.userName}</span>
          ) : (
            <Link to="/login">
              <span className="header__option">Hello, sign in</span>
            </Link>
          )}

          {user &&
            <span className="header__option" onClick={onLogout}>
            Logout
          </span>
          }
        
          <Link to="/wishlist">
            <span className="header__option">Wishlist</span>
          </Link>

          <Link to="/checkout">
            <div className="header__option header__optionBasket">
              <span className="header__basketCount">{totalCartQuantity}</span>
              <ShoppingCartIcon className="header__cartIncon" />
            </div>
          </Link>
        </div>
      </NavbarB>
      {/* </nav> */}

      {/* <section>
        <Outlet />
      </section> */}
    </>
  );
};

export default memo(Navbar);
