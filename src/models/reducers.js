import { combineReducers } from 'redux';
import { increaseCount, hasMatched } from './'
import { products } from './'

const count = (count = 0, action) => {
  switch(action.type) {
    case increaseCount.type:
      console.log(products)
      return count+1;
    default:
      return count;
  }
};

const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type){
    case hasMatched.type:
      return searchedProducts;
    default:
      return searchedProducts;
  }
}

export const rootReducer = combineReducers({ count, searchedProducts });
