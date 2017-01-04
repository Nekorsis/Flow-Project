import { combineReducers } from 'redux';
import { actionTypes as types } from './actionTypes';

const initialState = {
  events: {},
};

const appReducers = (state = initialState, { type, payload }) => {
  switch (type) {
  case types.REQUEST_EVENTS:
    console.log('REQUEST_EVENTS reducer called');
    return {
      ...state,
      test: false,
    };
  default: return state;
  }
};

const reducers = combineReducers({ appReducers });
export default reducers;
