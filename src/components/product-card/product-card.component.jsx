import './product-card.style.scss';
import Button from '../button/button.component';
import { useCartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { increaseItemQuantityTocart } = useCartContext();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    increaseItemQuantityTocart(product);
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt='product-img' />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
