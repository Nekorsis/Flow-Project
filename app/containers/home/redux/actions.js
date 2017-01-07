import { actionTypes as types } from './actionTypes';


const requestEvents = () => {
  return (dispatch) => {
    dispatch({ type: types.REQUEST_EVENTS });
    return fetch('http://localhost:3000/events')
      .then(response => {
        const data = response.json();
        return data;
      })
      .then(data => {
        dispatch({ type: types.REQUEST_EVENTS_SUCCSESS, payload: { events: data }});
      });
  };
};


const selectCity = (city) => {
  return { type: types.SELECT_CITY, payload: { city } };
};

const selectTheme = (theme) => {
  return { type: types.SELECT_THEME, payload: { theme } };
};

const selectTime = (time) => {
  return { type: types.SELECT_TIME, payload: { time } };
};

export { requestEvents, selectCity, selectTheme, selectTime };
