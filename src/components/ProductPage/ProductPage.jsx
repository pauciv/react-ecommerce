import { Card, Container } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
  console.log(products);

  const { id } = useParams();

  const getProductById = (products, id) => {
    return products.find((product) => product.id === id);
  };

  const product = getProductById(products, parseInt(id));

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Card className='p-4'>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card>
    </Container>
  );
};

export default ProductPage;
