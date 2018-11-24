import {
  INCREMENT_DATA,
  DECREMENT_DATA,
  COUNTER_ACTION_STARTED,
  COUNTER_ACTION_FINISHED
} from "./testConstants";

export const incrementData = () => {
  return {
    type: INCREMENT_DATA
  };
};

export const decrementData = () => {
  return {
    type: DECREMENT_DATA
  };
};

export const startCounterAction = () => {
  return {
    type: COUNTER_ACTION_STARTED
  };
};

export const finishCounterAction = () => {
  return {
    type: COUNTER_ACTION_FINISHED
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const incrementAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({ type: INCREMENT_DATA });
    dispatch(finishCounterAction());
  };
};

export const decrementAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({ type: DECREMENT_DATA });
    dispatch(finishCounterAction());
  };
};
