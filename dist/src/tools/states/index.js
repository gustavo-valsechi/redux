"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var states_exports = {};
__export(states_exports, {
  useReduxClient: () => useReduxClient,
  useReduxServer: () => useReduxServer
});
module.exports = __toCommonJS(states_exports);
var import_react = require("react");
var import_react_redux = require("react-redux");
var import__ = require("../../index");
var import_tools = require("../../tools");
const useReduxClient = (sliceName) => {
  const dispatch = (0, import_react_redux.useDispatch)();
  (async () => await (0, import_tools.syncStates)(dispatch))();
  const state = (0, import_react.useSyncExternalStore)(
    import__.store.subscribe,
    () => import__.store.getState()[sliceName]
  );
  console.log("States", state);
  return {
    state: state || {},
    dispatch: (action, value) => {
      console.log("Actions", import_tools.memory.actions);
      const sliceActions = import_tools.memory.actions[sliceName];
      const actionFunction = sliceActions[action];
      if (!actionFunction) return;
      dispatch(actionFunction(value));
    }
  };
};
const useReduxServer = (sliceName) => {
  return {
    state: import__.store.getState()[sliceName] || {},
    dispatch: (action, value) => {
      const sliceActions = import_tools.memory.actions[sliceName];
      const actionFunction = sliceActions[action];
      if (!actionFunction) return;
      import__.store.dispatch(actionFunction(value));
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useReduxClient,
  useReduxServer
});
