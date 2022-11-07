import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '../pages/HomeView';
import CheckoutView from '../pages/CheckoutView';

const Router = () => (
  <Routes>
    <Route
      path="/"
      element={<HomeView /*  cart={cart} addToCart={addToCart}  */ />}
    />
    <Route path="/checkout" element={<CheckoutView /* cart={cart} */ />} />
    <Route path="/*" element={<Navigate replace to="/" />} />
  </Routes>
);

export default Router;
