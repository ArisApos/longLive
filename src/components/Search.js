import React from "react";
import { connect } from "react-redux";
import { products, changeProductContainer, onKeyUp } from "../models";


const Search = ({ onEnterClick, suggestedProducts, input, filters, onKeyUpD }) => {
  return (
    <div className="center-search">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        onKeyUp={e => handleInput(onEnterClick, filters, onKeyUpD, e)}
      />
      { suggestedProducts.map(({ name, type, brand },i) => (
        <div key={i} className="searching-result">
          {` ${name}`}
          {` ${type}`}
          {` ${brand}`}
        </div>
      ))}
    </div>
  );
};

const searchableProducts = products.map(({ name, type, brand }) => {
  const productKeys = name.toLowerCase().split(/[\s-]+/);
  productKeys.push(type.toLowerCase());
  productKeys.push(brand.toLowerCase());
  return productKeys;
});

const handleInput = (onEnterClick, filters, onKeyUpD, event) => {
  const searchInput = event.target.value.toLowerCase().split(" ");
  if (!event.target.value.length) {
    onEnterClick(products);
    onKeyUpD({ suggestedProducts: [], input: [], filter: [{type:"Downhill"}] });
    return;
  } else {
    const filtered = products.filter((product, i) =>
      searchableProducts[i].find(key => {
        return (
          searchInput.find(inputWord => inputWord === key) ||
          key.includes(searchInput)
        );
      })
    );
     const extraFilter = filtered.filter(
       ({ type, brand }) => {
         return Object.entries(filters[0])[0][0] === "type" && type === Object.entries(filters[0])[0][1]
       }
     )
    onKeyUpD({ suggestedProducts: filtered, input: searchInput, filters: [{type:"Downhill"}]} );
    if (event.key === "Enter") onEnterClick(filtered);
  }
};

const stateSearch = ({ suggestedProducts }) => ({
  suggestedProducts: suggestedProducts.suggestedProducts,
  input: suggestedProducts.input,
  filters: suggestedProducts.filters
});

const dispatchSearch = dispatch => ({
  onEnterClick: filtered => dispatch(changeProductContainer(filtered)),
  onKeyUpD: (filteredAndInput) => dispatch(onKeyUp(filteredAndInput)),
});

export default connect(
  stateSearch,
  dispatchSearch
)(Search);
