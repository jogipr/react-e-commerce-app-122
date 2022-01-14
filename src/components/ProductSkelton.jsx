import React from 'react';
import './style.css';

const ProductSkelton = (props) => {
  return (
    <div className="ProductSkelton">
      <div className="image-container">Loading</div>
      <div className="ProductSkelton-name"></div>
      <div className="ProductSkelton-price"></div>
      <div />
    </div>
  );
};

export default ProductSkelton;
