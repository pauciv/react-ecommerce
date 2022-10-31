import React from 'react';
import ChildrenProd from '../Product/ChildrenProd';
import products from '../../assets/db/db';
import './Cart.css';

const Cart = ({ cart }) => {
	return (
		// <div className="cart">
        <>
			<div className="cart__subtotal">
				<span className="cart__subtotal--title">Subtotal</span>
				<span className="cart__subtotal--price">
					<small>$</small>0
					{/* price */}
				</span>
			</div>

			{/* <div className="cart__product">
				{products.map((product) => (
					<ChildrenProd key={product.id}>
						{console.log(product.id)}
						<img
							className="cart__product--image"
							src={product.image}
							alt="product image"
						/>
					</ChildrenProd>
				))}
			</div> */}
            </>
		// </div>
	);
};

export default Cart;
