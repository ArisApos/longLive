import React from 'react'

const FilterMenu = ({ noProductsFound }) => (
  <div className="sidemenu">
    <label>SHOP:</label>

    <p>BY BRAND</p>
    <select>
      <option value="">--Choose a brand--</option>
      <option>Sector 9</option>
      <option>Arbor</option>
      <option>Roxy</option>
      <option>Madrid</option>
      <option>Naked</option>
    </select>

    <p>BY STYLE</p>
    <select>
      <option value="">--Choose a style--</option>
      <option>Downhill</option>
      <option>Pintail</option>
      <option>FishTail</option>
    </select>

    <p>BY PRICE</p>
    {noProductsFound && <h1>No Products Found</h1>}
  </div>
);

export default FilterMenu;
