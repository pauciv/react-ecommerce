import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<div className='checkout__header'>
					<h2 className="checkout__title">Shopping Cart</h2>
					<p className='checkout__subtitle'>Price</p>
				</div>
				{/* CartProduct */}
				{/* CartProduct */}
				{/* CartProduct */}
				{/* CartProduct */}
				{/* CartProduct */}
			</div>
			<div className="checkout__right">
                <Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
