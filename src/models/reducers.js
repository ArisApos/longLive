import { changeProductContainer, onKeyUp, products } from './'

export const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type) {
     case changeProductContainer.type:
       return action.payload;
    default:
      return searchedProducts;
  }
};

export const suggestedProducts = (suggestedProductsAndInput = {suggestedProducts: [],input: [], filters: [{type:"Pintail"},{brand:"Arbor"}]}, action) => {
  switch (action.type) {
    case onKeyUp.type:
      return action.payload;
    default:
      return suggestedProductsAndInput;
    }
};
