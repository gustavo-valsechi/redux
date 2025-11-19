import { createAction } from "@reduxjs/toolkit";
const setFullState = createAction("SET_FULL_STATE");
const reducer = (reducers, state, action) => {
  if (action.type === setFullState.type) return { ...state, ...action.payload };
  return Object.keys(reducers).reduce((acc, key) => {
    var _a;
    acc[key] = (_a = reducers[key]) == null ? void 0 : _a.call(reducers, state == null ? void 0 : state[key], action);
    return acc;
  }, {});
};
export {
  reducer,
  setFullState
};
