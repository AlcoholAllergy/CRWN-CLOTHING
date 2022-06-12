import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useCartContext } from '../../context/cart.context';

import './cart-icon.style.scss';
const CartIcon = () => {
  //The component for dispalying the shopping cart icon

  const { isCartOpen, setIsCartOpen, cartItems } = useCartContext();
  const totalCartItemAmount = cartItems.reduce((accumulate, currentItem) => {
    return accumulate + currentItem.quantity;
  }, 0);
  return (
    <div
      className='cart-icon-container'
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalCartItemAmount}</span>
    </div>
  );
};

export default CartIcon;
