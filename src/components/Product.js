import React from 'react'

const Product = ({ name, type, price, imageSrc }) => (
  <div>
    <h2 className="center-text">{ name }</h2>
    <img src={ imageSrc } height="250" width="170" className="center"/>
    <h4 className="center-text">Type: { type }</h4>
    <h4 className="center-text">Price: €{ price }</h4>
  </div>
);

export default Product;
