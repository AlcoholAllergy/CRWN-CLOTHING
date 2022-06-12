import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.style.scss';
import { useCartContext } from '../../context/cart.context';
const Checkout = () => {
  //The component for checkout page
  const { cartItems, cartTotalAmount } = useCartContext();
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className='total'>Total: {cartTotalAmount}</span>
    </div>
  );
};

export default Checkout;
