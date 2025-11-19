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
var reducers_exports = {};
__export(reducers_exports, {
  reducer: () => reducer,
  setFullState: () => setFullState
});
module.exports = __toCommonJS(reducers_exports);
var import_toolkit = require("@reduxjs/toolkit");
const setFullState = (0, import_toolkit.createAction)("SET_FULL_STATE");
const reducer = (reducers, state, action) => {
  if (action.type === setFullState.type) return { ...state, ...action.payload };
  return Object.keys(reducers).reduce((acc, key) => {
    var _a;
    acc[key] = (_a = reducers[key]) == null ? void 0 : _a.call(reducers, state == null ? void 0 : state[key], action);
    return acc;
  }, {});
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  reducer,
  setFullState
});
