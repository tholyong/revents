import {
  INCREMENT_DATA,
  DECREMENT_DATA,
  COUNTER_ACTION_FINISHED,
  COUNTER_ACTION_STARTED
} from "./testConstants";
import { createReducer } from "../../app/common/utils/reducerUtil";

const initialState = {
  data: 233,
  loading: false
};

export const incrementData = (state, payload) => {
  return { ...state, data: state.data + 1 };
};

export const decrementData = (state, payload) => {
  return { ...state, data: state.data - 1 };
};

export const counterActionStarted = (state, payload) => {
  return { ...state, loading: true };
};

export const counterActionFinished = (state, payload) => {
  return { ...state, loading: false };
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_DATA:
//       return {
//         ...state,
//         data: state.data + 1
//       };
//     case DECREMENT_DATA:
//       return {
//         ...state,
//         data: state.data - 1
//       };
//     default:
//       return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_DATA]: incrementData,
  [DECREMENT_DATA]: decrementData,
  [COUNTER_ACTION_STARTED]: counterActionStarted,
  [COUNTER_ACTION_FINISHED]: counterActionFinished
});
