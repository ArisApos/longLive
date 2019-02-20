import React from 'react'
import { connect } from 'react-redux';
import { products, enterPressed, onKeyUp, notFound } from '../models'


const Search = ({ onEnterClick, fastProducts, onKeyUpD, onNullEnter }) => {
  return (
    <div className="centerSearch">
      <input
        type="text"
        placeholder="Search..."
        className="searchBar"
        onKeyUp={e => handleInput(onEnterClick, onNullEnter, onKeyUpD, e)}
      />
      {fastProducts.map(({ name, type, brand }) => (
        <div className="searching-result">
          <b>  name: </b> { name }
          <b>  style:</b> { type }
          <b>  brand:</b> { brand }
        </div>
      ))}
    </div>
  );
}

const searchableProducts = products.map(
  ({ name, type, brand }) => {
    const productKeys = name.toLowerCase().split(/[\s-]+/);
    productKeys.push(type.toLowerCase());
    productKeys.push(brand.toLowerCase());
    return productKeys;
  }
);

const handleInput = (onEnterClick, onNullEnter, onKeyUpD, event) => {
  const searchInput = event.target.value.toLowerCase().split(' ');
  if (!event.target.value.length) {
    onEnterClick(products);
    return;
  } else {
      const filtered = products.filter(
        (product, i) => (
          searchableProducts[i].find(key => {
            return searchInput.find(inputWord => inputWord === key) || key.includes(searchInput)
          })
        ));
      console.log(filtered)
      onKeyUpD(filtered)
      if (event.key === "Enter") {
        if (!filtered.length) {
          onNullEnter()
        } else {
          onEnterClick(filtered);
      }
    }
  }
};

const stateSearch = ({ fastProducts }) => ({ fastProducts })

const dispatchSearch = dispatch => ({
  onEnterClick: filtered => dispatch(enterPressed(filtered)),
  onKeyUpD: filtered => dispatch(onKeyUp(filtered)),
  onNullEnter: () => dispatch(notFound()),
});

export default connect(stateSearch, dispatchSearch)(Search);
