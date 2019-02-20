import React from 'react'
import { connect } from "react-redux";

const FilterMenu = ({ suggestedProducts }) => (
  <div className="side-menu">
    <h4 className="side-menu--title">SHOP:</h4>

    <p>BY BRAND</p>
    <select onChange={ () => { filterBrand() } }>
      <option value="">--Choose a brand--</option>
      <option value="Sector 9">Sector 9</option>
      <option value="Arbor">Arbor</option>
      <option value="SeRoxy">Roxy</option>
      <option value="Madrid">Madrid</option>
      <option value="Naked">Naked</option>
    </select>

    <p>BY STYLE</p>
    <select>
      <option value="">--Choose a style--</option>
      <option value="Downhill">Downhill</option>
      <option value="Pintail">Pintail</option>
      <option value="FishTail">FishTail</option>
    </select>

    <p>BY PRICE</p>
  </div>
);

const filterBrand = () => {

};

const stateFilterMenu = ({ suggestedProductsAndInput }) => ({
  suggestedProducts: suggestedProductsAndInput.suggestedProducts,
});

export default connect(stateFilterMenu, null)(FilterMenu);
