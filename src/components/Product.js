import React from 'react'

const Product = ({ name, type, brand, price, imageSrc }) => (
  <div className="centerText">
    <h2>{ name }</h2>
    <img src={ imageSrc } height="250" width="170" className="center"/>
    <h4>Brand: { brand }</h4>
    <h4>Style: { type }</h4>
    <h4>Price: €{ price }.00</h4>
  </div>
);

export default Product;
