import React from 'react'
import { products, hasMatched } from '../models'
import { connect } from 'react-redux';

const Search = ({ onEnterClick }) => (
  <div className="centerSearch">
    <input type="text" placeholder="Search..." className="searchBar" onKeyUp={(e)=>{handleKeyUp(onEnterClick,e)}}/>
  </div>
);

const searchableProducts = products.map(
  ({ name, type }) => {
    const itemArray = name.toLowerCase().split(/[\s-]+/);
    itemArray.push(type.toLowerCase());
    return itemArray;
  }
);

const handleKeyUp = (onEnterClick, event) => {
  const searchInput = event.target.value.toLowerCase();
  const filtered = products.filter(
    (product, i) => (
      searchableProducts[i].find(key => key === searchInput)
    ));
    event.key === "Enter" && onEnterClick(filtered);
}

  const dispatchSearch = dispatch => ({
      onEnterClick: (filtered) => {
      dispatch(hasMatched(filtered));
    },
  });

export default connect(undefined, dispatchSearch)(Search);
