import './cart-item.style.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div>
        <span className='name'>{name}</span>
        <span className='item-details'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
