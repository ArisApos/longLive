import React from 'react'

const Product = ({ name, type, brand, price, imageSrc }) => (
  <div className="center-text">
    <div className="productName">{ name }</div>
    <img src={ imageSrc } alt="img" height="250" width="170" className="center"/>
    <div>Brand: { brand }</div>
    <div>Style: { type }</div>
    <div>Price: €{ price }.00</div>
  </div>
);

export default Product;
