import { INCREMENT_DATA, DECREMENT_DATA } from "./testConstants";

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
