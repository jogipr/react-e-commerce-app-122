import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.css';

const Product = ({ product, handleAddToCart }) => {
  const { productName = 'Product Name', productPrice = '100' } = product;
  return (
    <div className="product">
      <img
        className="product-image"
        src="https://picsum.photos/id/237/100/100"
      ></img>
      <div className="product-name">{productName}</div>
      <div className="product-price">{productPrice}</div>
      <ShoppingCartIcon onClick={handleAddToCart} />
    </div>
  );
};

export default Product;
