import { useCartContext } from '../../context/CartContext';

const CartItem = ({ id, image, quantity }) => {
  const { deleteFromCart } = useCartContext();

  return (
    // <Link to="/product...">
    <div className="cart__item">
      <img className="cart__item--image" src={image} alt="product image" />
      <div className="d-flex justify-content-center">
        <p className="">{quantity > 1 ? quantity : null}</p>
      </div>
    </div>
    // </Link>
  );
};

export default CartItem;
