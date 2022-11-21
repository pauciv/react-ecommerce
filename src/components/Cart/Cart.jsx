import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useCartContext } from '../../context/CartProvider';

const Cart = () => {
  const { cartItems, totalCartPrice } = useCartContext();

  if (cartItems.length > 0) {
    return (
      <aside className="cart">
        <div className="cart__subtotal">
          <span className="cart__subtotal--title">Subtotal</span>
          <span className="cart__subtotal--price">
            {/* <small>$</small> */}
            {formatCurrency(totalCartPrice)}
          </span>
        </div>

        <div className="cart__items">
          {cartItems ? (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <h3>Your Cart is empty</h3>
          )}
        </div>
      </aside>
    );
  } else return null;
};

export default Cart;
