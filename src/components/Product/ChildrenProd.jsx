import React from 'react';

import './Product.css';

const ChildrenProd = ({ children }) => {
	return (
		<>
			<div className="product">{children}</div>
		</>
	);
};

export default ChildrenProd;
