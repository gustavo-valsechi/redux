import { reducer } from "../../tools";
import { store } from "../../index";
let memory = { actions: {}, reducer: {} };
const configureSlices = (slices) => {
  var _a, _b;
  for (const slice in slices) {
    memory.actions[slice] = (_a = slices[slice]) == null ? void 0 : _a.actions;
    memory.reducer[slice] = (_b = slices[slice]) == null ? void 0 : _b.reducer;
  }
  store.replaceReducer((...args) => reducer(memory.reducer, ...args));
  store.dispatch({ type: "@@redux/INIT" });
};
export {
  configureSlices,
  memory
};
