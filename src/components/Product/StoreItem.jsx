import { Button, Card } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { formatCurrency } from '../../utilities/formatCurrency';

import './StoreItem.css'

const StoreItem = ({ id, image, title, price, rating }) => {
  const { addToCart, decreaseQuantity, deleteFromCart } = useCartContext();
  const quantity = 0;

  return (
    <Card className="h-100">
      <Card.Img className='store__item--img' src={image} height="150" />
      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mt-2">
          {/* <small>$</small> */}
          {formatCurrency(price)}
        </Card.Text>
        <div>
          {quantity === 0 ? (
            <Button onClick={() => addToCart(id)} variant="primary">Add to Cart</Button>
          ) : (
            <Button variant="primary">Add another one</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
