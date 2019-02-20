import { enterPressed, onKeyUp, notFound, products } from './'

export const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type) {
     case enterPressed.type:
       return action.payload;
    default:
      return searchedProducts;
  }
};

export const fastProducts = (fastProducts = ['zero','haha'], action) => {
  switch (action.type) {
    case onKeyUp.type:
      return action.payload;
    default:
      return fastProducts;
  }
};

export const noProductsFound = (noProductsFound = false, action) => {
  switch(action.type) {
     case notFound.type:
       return noProductsFound = true;
    default:
      return noProductsFound;
  }
};
