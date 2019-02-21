import { changeProductContainer, onKeyUp, products } from './'

export const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type) {
     case changeProductContainer.type:
       return action.payload;
    default:
      return searchedProducts;
  }
};

export const suggestedProductsAndInput = (suggestedProductsAndInput = {suggestedProducts:[],input:[]}, action) => {
  switch (action.type) {
    case onKeyUp.type:
      return action.payload;
    default:
      return suggestedProductsAndInput;
    }
};
