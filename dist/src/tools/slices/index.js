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
var slices_exports = {};
__export(slices_exports, {
  configureSlices: () => configureSlices,
  memory: () => memory
});
module.exports = __toCommonJS(slices_exports);
var import_tools = require("../../tools");
var import__ = require("../../index");
let memory = { actions: {}, reducer: {} };
const configureSlices = (slices) => {
  var _a, _b;
  for (const slice in slices) {
    memory.actions[slice] = (_a = slices[slice]) == null ? void 0 : _a.actions;
    memory.reducer[slice] = (_b = slices[slice]) == null ? void 0 : _b.reducer;
  }
  import__.store.replaceReducer((...args) => (0, import_tools.reducer)(memory.reducer, ...args));
  import__.store.dispatch({ type: "@@redux/INIT" });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  configureSlices,
  memory
});
