import { memo, useContext } from 'react';
import { Button, Nav, Navbar as NavbarB } from 'react-bootstrap';

import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';
import SearchForm from './SearchForm';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { totalCartQuantity } = useCartContext();

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
      <NavbarB
        sticky="top"
        className="bg-black shadow-sm mb-2 d-flex justify-content-between"
      >
        <Link to="/">
          <img
            className="header__logo"
            src="../../logo512.png"
            alt="reactjs logo"
          />
        </Link>

        <p className='logo h2'>codezone</p>

        <SearchForm />

        <Nav className="header__nav">
          {user ? (
            <span className="header__option">Hello, {user.userName}</span>
          ) : (
            <Link to="/login" className='text-decoration-none'>
              <span className="header__option">Hello, sign in</span>
            </Link>
          )}

          {user && (
            <span className="header__option" onClick={onLogout}>
              Logout
            </span>
          )}

          <Link to="/wishlist" className='text-decoration-none'>
            <span className="header__option">Wishlist</span>
          </Link>

          <Link to="/checkout" className='text-decoration-none'>
            <div className="header__option header__optionBasket">
              <span className="header__basketCount">{totalCartQuantity}</span>
              <ShoppingCartIcon className="header__cartIncon" />
            </div>
          </Link>
        </Nav>
      </NavbarB>
      {/* </nav> */}

      {/* <section>
        <Outlet />
      </section> */}
    </>
  );
};

export default memo(Navbar);
