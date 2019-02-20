import React from 'react'

const FilterMenu = ({ noProductsFound }) => (
  <div className="sidemenu">
    <h3>SHOP</h3>
    <p>BY BRAND</p>
    <select>
      <option>Sector 9</option>
      <option>Arbor</option>
      <option>Roxy</option>
      <option>Madrid</option>
      <option>Naked</option>
    </select>
    <p>BY STYLE</p>
    <p>BY PRICE</p>
    {noProductsFound && <h1>No Products Found</h1>}
  </div>
);

export default FilterMenu;
