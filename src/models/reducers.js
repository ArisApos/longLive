import { combineReducers } from 'redux';
import { increaseCount } from './'


const count = (count = 0, action) => {
  switch(action.type) {
    case increaseCount.type:
      return count++;
    default:
      return count;
  }
};

export const rootReducer = combineReducers({ count });
