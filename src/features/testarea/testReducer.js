import { INCREMENT_DATA, DECREMENT_DATA } from "./testConstants";
import { createReducer } from "../../app/common/utils/reducerUtil";

const initialState = {
  data: 233
};

export const incrementData = (state, payload) => {
  return { ...state, data: state.data + 1 };
};

export const decrementData = (state, payload) => {
  return { ...state, data: state.data - 1 };
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
  [DECREMENT_DATA]: decrementData
});
