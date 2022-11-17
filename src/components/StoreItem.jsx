import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

const StoreItem = ({ id, image, title, price, rating }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mt-2">
          <small>$</small>
          {formatCurrency(price)}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
