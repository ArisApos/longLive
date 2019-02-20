import { enterPressed, onKeyUp, notFound, products } from './'

export const searchedProducts = (searchedProducts = products, action) => {
  switch(action.type) {
     case enterPressed.type:
       return action.payload;
    default:
      return searchedProducts;
  }
};

export const suggestedProducts = (suggestedProducts = [], action) => {
         switch (action.type) {
           case onKeyUp.type:
             return action.payload;
           default:
             return suggestedProducts;
         }
       };
