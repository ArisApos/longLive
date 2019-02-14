import { hasMatched } from './'
import { products } from './'

export const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type){
     case hasMatched.type:
       return action.payload;
    default:
      return searchedProducts;
  }
}
