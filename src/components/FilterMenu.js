import React from 'react'

const FilterMenu = () => (
  <div className="side-menu">
    <h4 className="side-menu--title">SHOP:</h4>

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
  </div>
);

export default FilterMenu;
