import React from 'react'

const Product = ({ name, type, price, imageSrc }) => (
  <div className="centerText">
    <h2>{ name }</h2>
    <img src={ imageSrc } height="250" width="170" className="center"/>
    <h4>Type: { type }</h4>
    <h4>Price: €{ price }</h4>
  </div>
);

export default Product;
