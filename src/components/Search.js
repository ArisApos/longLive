import React from "react";
import { connect } from "react-redux";
import { products, enterPressed, onKeyUp } from "../models";


const Search = ({ onEnterClick, suggestedProducts, input, onKeyUpD }) => {
  return (
    <div className="center-search">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        onKeyUp={e => handleInput(onEnterClick, onKeyUpD, e)}
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

const handleInput = (onEnterClick, onKeyUpD, event) => {
  const searchInput = event.target.value.toLowerCase().split(" ");
  if (!event.target.value.length) {
    onEnterClick(products);
    onKeyUpD({ suggestedProducts: [], input: [] });
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
    onKeyUpD({ suggestedProducts: filtered, input: searchInput} );
    if (event.key === "Enter") onEnterClick(filtered);
  }
};

const stateSearch = ({ suggestedProductsAndInput }) => ({
  suggestedProducts: suggestedProductsAndInput.suggestedProducts,
  input: suggestedProductsAndInput.input
});

const dispatchSearch = dispatch => ({
  onEnterClick: filtered => dispatch(enterPressed(filtered)),
  onKeyUpD: (filteredAndInput) => dispatch(onKeyUp(filteredAndInput)),
});

export default connect(
  stateSearch,
  dispatchSearch
)(Search);
