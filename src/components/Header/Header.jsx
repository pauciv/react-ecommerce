// rfce or rafce + enter (to create a component with the file name)

import React, { memo } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';

import { getTotalItems } from '../Subtotal/Subtotal';
import { Link, Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Header = ({ handleSearch, cart }) => {
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
          <div className="header__option">
            <span className="header__optionLineOne">English</span>
            <img
              className="header__flagIcon"
              src="https://flagpedia.net/data/flags/emoji/twitter/256x256/us.png"
              alt="american flag image"
            />
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Hello, sign in</span>
            <span className="header__optionLineTwo">Accounts & Lists</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <Link to="/checkout">
            <div className="header__option header__optionBasket">
              <span className="header__basketCount">{getTotalItems(cart)}</span>
              <ShoppingCartIcon className="header__cartIncon" />
            </div>
          </Link>
        </div>
      </nav>

      {/* <aside className="cart">
          <Cart cart={cart} />
        </aside> */}
      {/* </div> */}

      <section>
        <Outlet />
      </section>
    </>
  );
};

export default memo(Header);
