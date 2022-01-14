import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';

import { products } from './data/products';
import './style.css';

export default function App() {
  const [cartItem, setCartItem] = useState(0);

  const handleAddToCart = (item) => {
    setCartItem(cartItem + 1);
  };
  return (
    <div>
      <Header cartItem={cartItem} />
      <ProductList products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}
