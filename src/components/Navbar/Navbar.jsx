import { memo, useContext } from 'react';
import { Navbar as BtNavbar } from 'react-bootstrap'

import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';

import { getTotalItems } from '../Subtotal/Subtotal';
import { Link, Outlet } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';


const Navbar = ({ handleSearch, cart }) => {
  const { totalCartQuantity, openCart } = useCartContext()

  return (
    <>
      {/* <div className="flex__container"> */}
      {/* <nav className="header"> */}
      <BtNavbar sticky='top' className='bg-black shadow-sm mb-3'>
        <Link to="/">
          <img
            className="header__logo"
            src="logo512.png" /* src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" */
            alt="reactjs logo"
          />
        </Link>

        {/* <div className="header__option">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo">Spain</span>
        </div> */}

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
                {/* cartR?.length */ totalCartQuantity /* getTotalItems(cart) */}
              </span>
              <ShoppingCartIcon className="header__cartIncon" />
            </div>
          </Link>
        </div>
      </BtNavbar>
      {/* </nav> */}

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
