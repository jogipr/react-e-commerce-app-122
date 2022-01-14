import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.css';

const header = ({cartItem}) => {
  return (
    <div className="shoppy-header">
      <div className="shoppy-icon">My Shoppy</div>
      <div className="shoppy-search">
        <input placeholder="Search Product" />
      </div>
      <div className="cart">
        <div className="cart-circle">{cartItem}</div>
        <ShoppingCartIcon/>
      </div>
    </div>
  );
};

export default header;
