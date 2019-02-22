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
    onKeyUpD({ suggestedProducts: [], input: [], filters });
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
    const filteredByFilters = filtering(filters, filtered)
    onKeyUpD({ suggestedProducts: filteredByFilters, input: searchInput, filters });
    if (event.key === "Enter") onEnterClick(filteredByFilters);
  }
};
const filtering = (filters,data) => filters.reduce((acc, filter) =>{
   const longTypo = Object.entries(filter)[0][0]
   const longValue = Object.entries(filter)[0][1]
   return  acc.filter( ({type, brand})=>longTypo === 'type' ? type === longValue : brand === longValue );
}, data)

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
