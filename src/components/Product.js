import React from 'react'

const Product = ({ name, type, price, imageSrc }) => (
  <div>
    <h1>{ name }</h1>
    <img src={ imageSrc } height="400" width="300"/>
    <h3>type: { type }</h3>
    <h3>price: €{ price }</h3>
  </div>
);

export default Product;
