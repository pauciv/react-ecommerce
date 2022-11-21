import { useCartContext } from '../../context/CartProvider';
import { formatCurrency } from '../../utilities/formatCurrency';

const Subtotal = () => {
  const { totalCartQuantity, totalCartPrice } = useCartContext();

  return (
    <div className="subtotal">
      {/* npm i react-currency-format */}
      <div>
        <p className="fs-5">
          Subtotal ({totalCartQuantity} {totalCartQuantity === 1 ? 'item' : 'items'}){': '}
          <strong>
            {/* <small>$</small> */}
            {formatCurrency(totalCartPrice)}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Subtotal;
