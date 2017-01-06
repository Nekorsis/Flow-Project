import { actionTypes as types } from './actionTypes';

const initialState = {
  isEventsRequestSend: false,
  isEventsRequestSucceeded: false,
  isEventsRequestFailed: false,
  selectedCity: 'Moscow',
  selectedTheme: 'Any',
  selectedTime: 'Any',
  events: '',
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
  case types.SELECT_CITY:
    return {
      ...state,
      selectedCity: payload.city,
    };
  case types.SELECT_THEME:
    return {
      ...state,
      selectedTheme: payload.theme,
    };
  case types.SELECT_TIME:
    return {
      ...state,
      selectedTime: payload.time,
    };
  default: return state;
  }
};

export default homeReducers;
