import { createContext, useState, useContext } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToadd
  //The find() method returns the value of the first element that passes a test.
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the cart item to remove
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  //chekc if quantity is equal to 1, if it is remove that item from the cart
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  //return cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, deleteItemFromCart) => {
  //delete the item from cart
  return cartItems.filter((cartItem) => cartItem.id !== deleteItemFromCart.id);
};

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  cartTotalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseItemQuantityTocart = (productToadd) => {
    //re-set the cartItems value to be new cartItems that incremented the selected item's quantity by 1
    setCartItems(addCartItem(cartItems, productToadd));
  };

  const decreaseItemQuantityFromCart = (cartItemToRemove) => {
    //re-set the cartItems value to be new cartItems that decremented the selected item's quantity by 1
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (cartItemToRemove) => {
    // re-set the cartItems value to be new cartItems without the deleted item
    setCartItems(deleteCartItem(cartItems, cartItemToRemove));
  };

  const cartTotalAmount = cartItems.reduce((previouseValue, currentValue) => {
    return previouseValue + currentValue.price * currentValue.quantity;
  }, 0);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartTotalAmount,
    cartItems,
    setCartItems,
    increaseItemQuantityTocart,
    decreaseItemQuantityFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  //costomized useContext to return the context value
  return useContext(CartContext);
};
