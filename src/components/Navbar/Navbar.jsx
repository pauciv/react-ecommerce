import React, { memo, useContext } from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';

import { getTotalItems } from '../Subtotal/Subtotal';
import { Link, Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useReducerState } from '../../context/ReducerStateProvider';
import { ReducerStateContext } from '../../context/ReducerStateContext';

const Navbar = ({ handleSearch, cart }) => {
  // const cart = useContext(ReducerStateContext);
  // console.log(cart);

  // const [{ cartR }, dispatch] = useReducerState(); //useStateValue = () => useContext(CartContext)

  return (
    <>
      {/* <div className="flex__container"> */}
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="logo512.png" /* src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" */
            alt="reactjs logo"
          />
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo">Spain</span>
        </div>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <button onClick={handleSearch}>
            <SearchIcon className="header__searchIncon" />
          </button>
        </div>

        <div className="header__nav">
          {/* <div className="header__option">
            <span className="header__optionLineOne">English</span>
            <img
              className="header__flagIcon"
              src="https://flagpedia.net/data/flags/emoji/twitter/256x256/us.png"
              alt="american flag image"
            />
          </div> */}

          <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">Hello, sign in</span>
              <span className="header__optionLineTwo">Accounts & Lists</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <Link to="/wishlist">
            <div className="header__option">
              <span className="header__optionLineTwo">Wishlist</span>
            </div>
          </Link>

          <Link to="/checkout">
            <div className="header__option header__optionBasket">
              <span className="header__basketCount">
                {/* cartR?.length */ getTotalItems(cart)}
              </span>
              <ShoppingCartIcon className="header__cartIncon" />
            </div>
          </Link>
        </div>
      </nav>

      {/* <aside className="cart">
          <Cart cart={cart} />
        </aside> */}
      {/* </div> */}

      {/* <section>
        <Outlet />
      </section> */}
    </>
  );
};

export default memo(Navbar);
