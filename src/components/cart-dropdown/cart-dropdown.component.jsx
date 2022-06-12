import { useCartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style.scss';

const CartDropdown = () => {
  // The components for the dropdown cart
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>

      <Button onClick={goToCheckOutHandler}>Check Out</Button>
    </div>
  );
};

export default CartDropdown;
