import { combineReducers } from 'redux';
import * as actions from './actionTypes';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
  case actions.ACTION_INCREMENT:
    console.log('reducer incriment called');
    return state + 1;
  case actions.ACTION_DECREMENT:
    console.log('reducer decriment called');
    return state - 1;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
