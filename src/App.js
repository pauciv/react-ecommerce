import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [value, updateValue] = useState([]);

	return (
		<div className="app">
			<div className="main">
				<Header />
				<Home />
				<p>The Checkout component will be displayed in another page</p>
				<Checkout />
			</div>
			{/* solo debe aparecer cuando haya más de un producto en el carrito */}
			<aside className="cart"> 
				<Cart />
			</aside>
		</div>
	);
}

export default App;

{
	/* <Router>
	<div className="app">
		<Switch>
			<Route path="/checkout">
				<Header />
				<h1>Checkout Component</h1>
			</Route>
			<Route path="/"> // default root at the bottom
				<div className="main">
					<Header />
					<Home />
				</div>
				<div className="cart">
					<Cart />
				</div>
			</Route>
		</Switch>
	</div>
</Router> */
}
