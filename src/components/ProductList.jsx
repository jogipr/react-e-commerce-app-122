import React from 'react';
import Product from './Product';
import ProductSkelton from './ProductSkelton';

const ProductList = (props) => {
  const { products ,handleAddToCart} = props;
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product product={product}
        handleAddToCart={handleAddToCart}/>
      ))}
      <ProductSkelton/>
    </div>
  );
};

export default ProductList;
