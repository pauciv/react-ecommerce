import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';

const CartItem = ({ id, image, quantity }) => {
  return (
    <div className="cart__item">
      <Link to={`/product/${id}`}>
        <img className="cart__item--image" src={image} alt="product image" />
      </Link>
      <div className="d-flex justify-content-center">
        <p className="cart__item--quantity">{quantity > 1 ? quantity : null}</p>
      </div>
    </div>
  );
};

export default CartItem;
