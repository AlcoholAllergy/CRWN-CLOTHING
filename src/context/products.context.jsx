import { createContext, useState, useContext } from 'react';
import SHOP_DATA from '../assets/shop-data.json';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  //costmized fuction for usecontext
  return useContext(ProductsContext);
};
