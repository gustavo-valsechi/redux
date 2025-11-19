"use strict";
"use client";
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
var synchronizer_exports = {};
__export(synchronizer_exports, {
  SyncStatesProvider: () => SyncStatesProvider,
  syncStates: () => syncStates
});
module.exports = __toCommonJS(synchronizer_exports);
var import_react = require("react");
var import_navigation = require("next/navigation");
var import_react_redux = require("react-redux");
var import_tools = require("../../tools");
const syncStates = async (dispatch) => {
  try {
    const res = await fetch("/api/state", { cache: "no-store" });
    const json = await res.json();
    console.log("json.state", json.state);
    if (!json.state) return;
    dispatch((0, import_tools.setFullState)(json.state));
  } catch (err) {
    console.error("Error on sync server states", err);
  }
};
function SyncStatesProvider() {
  const dispatch = (0, import_react_redux.useDispatch)();
  const pathname = (0, import_navigation.usePathname)();
  (0, import_react.useEffect)(() => {
    (async () => await syncStates(dispatch))();
  }, [pathname]);
  return null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SyncStatesProvider,
  syncStates
});
