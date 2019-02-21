import React from 'react'
import { connect } from "react-redux";
import { brands, types, changeProductContainer, products } from "../models";

const FilterMenu = ({ searchedProducts, onSelectOption }) => (
  <div className="side-menu">
    <h4 className="side-menu--title">SHOP:</h4>

    <p>BY BRAND</p>
    <select onChange={ (e) => { filterMenu(searchedProducts, onSelectOption, e) } }>
    <option value="brands">--Choose a brand--</option>
      { brands.map(brand => <option value={ brand }>{ brand }</option>) };
    </select>

    <p>BY STYLE</p>
    <select onChange={ (e) => { filterMenu(searchedProducts, onSelectOption, e) } }>
      <option value="types">--Choose a style--</option>
      { types.map(type => <option value={ type }>{ type }</option>) };
    </select>

    <p>BY PRICE</p>
  </div>
);

const filterMenu = (searchedProducts, onSelectOption, e) => {
  console.log(searchedProducts);
  console.log(products);
  searchedProducts = products;
  const { value } = e.target;
  if (value === "brands" || value === "types") {
    onSelectOption(products)
    return;
  }
  const filteredByMenu = searchedProducts.filter(
    ({ brand, type }) => e.target.options[0].value === "brands" ? brand === value : type === value
  )
  onSelectOption(filteredByMenu);
};

const stateFilterMenu = ({ searchedProducts }) => ({ searchedProducts });

const dispatchFilterMenu = dispatch => ({
  onSelectOption: filteredByMenu => dispatch(changeProductContainer(filteredByMenu)),
});

export default connect(stateFilterMenu, dispatchFilterMenu)(FilterMenu);
