import { increaseCount, hasMatched } from './'
import { products } from './'

export const count = (count = 0, action) => {
  switch(action.type) {
    case increaseCount.type:
      return count+1;
    default:
      return count;
  }
};

export const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type){
    case hasMatched.type:
      return searchedProducts;
    default:
      return searchedProducts;
  }
}
