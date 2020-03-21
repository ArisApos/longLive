import React from 'react'
import { connect } from "react-redux";
import { brands, types, changeProductContainer, products } from "../models";

const MainOptions = ({ searchedProducts, onSelectOption }) => (
  <aside className="mainOptions">
   <div className="container">
    <section className="totalProducts">{products.length} total products</section>
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
   </div>
  </aside>
);

const filterMenu = (searchedProducts, onSelectOption, e) => {
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

export default connect(stateFilterMenu, dispatchFilterMenu)(MainOptions);
