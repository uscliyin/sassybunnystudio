// Home.js
import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Product.scss"


function Product() {
  const images = [
    "/FeaturedProducts/WechatIMG5.jpg",
  ]

  const [quantity, setQuantity] = useState(1);
  const setQuantityAddFunc = () => {
    setQuantity(quantity + 1);
  }
  const setQuantityReduceFunc = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  }

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]}></img>
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className="price">$25</span>
        <p>description</p>

        <div className="quantity">
          <button onClick={setQuantityReduceFunc}>-</button>
          {quantity}
          <button onClick={setQuantityAddFunc}>+</button>
        </div>

        <div className="add">
          <AddShoppingCartIcon/> ADD TO CART
        </div>
      </div>
    </div>
  );
}

export default Product;