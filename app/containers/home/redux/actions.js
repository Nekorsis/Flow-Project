import * as actions from './actionTypes';

const incriment = (payload) => {
  console.log('action incriment called');
  return {
    type: actions.ACTION_INCRIMENT,
    payload: payload,
  };
};

const decriment = (payload) => {
  console.log('action decriment called');
  return {
    type: actions.ACTION_DECRIMENT,
    payload: payload,
  };
};

export default { incriment, decriment };
