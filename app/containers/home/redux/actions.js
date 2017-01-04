import { actionTypes as types } from './actionTypes';


const requestEvents = () => {
  console.log('action creator called');
  return { type: types.REQUEST_EVENTS };
};

const goToNextQuestion = (answer) => {
  return { type: types.GO_TO_NEXT_QUESTION, payload: { answer } };
};

export { requestEvents, goToNextQuestion };
