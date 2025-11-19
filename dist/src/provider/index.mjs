"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { store } from "../index";
import { SyncStatesProvider } from "../tools";
function StoreProvider({ children }) {
  return /* @__PURE__ */ jsxs(Provider, { store, children: [
    /* @__PURE__ */ jsx(SyncStatesProvider, {}),
    children
  ] });
}
export {
  StoreProvider
};
