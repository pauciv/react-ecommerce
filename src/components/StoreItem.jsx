import { Button, Card } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext';
import { formatCurrency } from '../utilities/formatCurrency';

const StoreItem = ({ id, image, title, price, rating }) => {
  const { addToCart, decreaseQuantity, deleteFromCart } = useCartContext();
  const quantity = 0;

  return (
    <Card className="h-100">
      <Card.Img src={image} height="150" style={{ objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mt-2">
          <small>$</small>
          {formatCurrency(price)}
        </Card.Text>
        <div>
          {quantity === 0 ? (
            <Button onClick={addToCart} variant="primary">Add to Cart</Button>
          ) : (
            <Button variant="primary">Add another one</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
