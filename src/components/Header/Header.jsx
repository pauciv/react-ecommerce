// rfce or rafce + enter (to create a component with the file name)

import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';

import { getTotalItems } from '../Subtotal/Subtotal';

const Header = ({ /* cart */ }) => {
	// const Header = () => {
	return (
		<div className="header">
			{/* <Link to="/"> */}
			<img
				className="header__logo"
				src="logo512.png" /* src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" */
				alt="reactjs logo"
			/>
			{/* </Link> */}
			<div className="header__option">
				<span className="header__optionLineOne">Deliver to</span>
				<span className="header__optionLineTwo">Spain</span>
			</div>

			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIncon" />
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

				<div className="header__option header__optionBasket">
					<span className="header__basketCount">{/* {getTotalItems(cart)} */}</span>
					<ShoppingCartIcon className="header__cartIncon" />
				</div>
			</div>
		</div>
	);
}

export default Header;
