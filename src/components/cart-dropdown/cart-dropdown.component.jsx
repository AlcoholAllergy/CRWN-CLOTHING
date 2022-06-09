import Button from '../button/button.component';
import './cart-dropdown.style.scss';

const CartDropdown = () => {
  // The components for the dropdown cart
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
