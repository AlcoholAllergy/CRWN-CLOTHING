import './checkout-item.style.scss';
import { useCartContext } from '../../context/cart.context';
const CheckoutItem = ({ cartItem }) => {
  // The component for each item in checkout page
  const { imageUrl, quantity, name, price } = cartItem;
  const itemTotalPrice = quantity * price;
  const {
    increaseItemQuantityTocart,
    decreaseItemQuantityFromCart,
    deleteItemFromCart,
  } = useCartContext();

  const deleteItemHandler = () => {
    //comments
    deleteItemFromCart(cartItem);
  };

  const addItemHandler = () => {
    //comments
    increaseItemQuantityTocart(cartItem);
  };

  const removeItemHandler = () => {
    //comments
    decreaseItemQuantityFromCart(cartItem);
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>${itemTotalPrice}</span>
      <div className='remove-button' onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
