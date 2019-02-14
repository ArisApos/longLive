import { enterPressed } from './'
import { products } from './'

export const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type){
     case enterPressed.type:
       return action.payload;
    default:
      return searchedProducts;
  }
}
