export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    var handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
};
