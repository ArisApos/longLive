import React from 'react'
import { products, enterPressed } from '../models'
import { connect } from 'react-redux';

const Search = ({ onEnterClick, onEmptyClick }) => (
  <div className="centerSearch">
    <input type="text" placeholder="Search..." className="searchBar" onKeyUp={(e)=>{handleEnterClick(onEnterClick, e)}}/>
  </div>
);

const searchableProducts = products.map(
  ({ name, type }) => {
    const itemArray = name.toLowerCase().split(/[\s-]+/);
    itemArray.push(type.toLowerCase());
    return itemArray;
  }
);

const handleEnterClick = (onEnterClick, event) => {
  if (event.key === "Enter") {
    const searchInput = event.target.value.toLowerCase();
    if (!event.target.value.length){
      onEnterClick(products);
      return;
    } else {
      const filtered = products.filter(
        (product, i) => (
          searchableProducts[i].find(key => key === searchInput || key + " " === searchInput || key.includes(searchInput))
        ));
        onEnterClick(filtered);
    }
  };
};

  const dispatchSearch = dispatch => ({
      onEnterClick: (filtered) => {
      dispatch(enterPressed(filtered));
    },
  });

export default connect(undefined, dispatchSearch)(Search);
