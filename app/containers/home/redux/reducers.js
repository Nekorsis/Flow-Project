import { combineReducers } from 'redux';
import { actionTypes as types } from './actionTypes';

const initialState = {
  isEventsRequestSend: false,
  isEventsRequestSucceeded: false,
  isEventsRequestFailed: false,
  events: [],
};

const homeReducers = (state = initialState, { type, payload }) => {
  switch (type) {
  case types.REQUEST_EVENTS:
    return {
      ...state,
      isEventsRequestSend: true,
    };
  case types.REQUEST_EVENTS_SUCCSESS:
    return {
      ...state,
      isEventsRequestSucceeded: true,
      events: payload.events,
    };
  case types.REQUEST_EVENTS_FAIL:
    return {
      ...state,
      isEventsRequestFailed: true,
    };
  default: return state;
  }
};

const reducers = combineReducers({ homeReducers });
export default reducers;
