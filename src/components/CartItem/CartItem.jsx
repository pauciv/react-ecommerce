import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import './CartItem.css';

const CartItem = ({ id, image, quantity }) => {
  const { deleteFromCart } = useCartContext();

  return (
    <div className="cart__item">
      <Link to={`/product/${id}`}>
        <img className="cart__item--image" src={image} alt="product image" />
      </Link>
      <div className='d-flex justify-content-between'>
        <div className="d-flex">
          {quantity > 1 ? (
            <p className="cart__item--quantity">{quantity}</p>
          ) : null}
        </div>
        <DeleteIcon
          onClick={() => deleteFromCart(id)}
          className="cart__item--delete text-danger"
          fontSize='small'
        />
      </div>
    </div>
  );
};

export default CartItem;
