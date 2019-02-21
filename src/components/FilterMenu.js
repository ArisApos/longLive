import React from 'react'
import { connect } from "react-redux";
import { brands, types, changeProductContainer, products } from "../models";

const FilterMenu = ({ searchedProducts, onSelectOption }) => (
  <div className="side-menu">
    <h4 className="side-menu--title">SHOP:</h4>

    <p>BY BRAND</p>
    <select onChange={ (e) => { filterBrands(searchedProducts, onSelectOption, e) } }>
    <option value=" ">--Choose a brand--</option>
      { brands.map(brand => <option value={ brand }>{ brand }</option>) };
    </select>

    <p>BY STYLE</p>
    <select onChange={ () => { filterTypes(searchedProducts) } }>
      <option value="">--Choose a style--</option>
      { types.map(type => <option value={ type }>{ type }</option>) };
    </select>

    <p>BY PRICE</p>
  </div>
);

const filterBrands = (searchedProducts, onSelectOption, e) => {
  const {value} = e.target;
  if (value.length == 1) {
    onSelectOption(products)
    return;
  }
  const filteredByBrand = searchedProducts.filter(
    ({ brand }) => brand === value
  )
  onSelectOption(filteredByBrand);
};

const filterTypes = (searchedProducts) => {

};

const stateFilterMenu = ({ searchedProducts }) => ({ searchedProducts });

const dispatchFilterMenu = dispatch => ({
  onSelectOption: filteredByBrand => dispatch(changeProductContainer(filteredByBrand)),
});

export default connect(stateFilterMenu, dispatchFilterMenu)(FilterMenu);
