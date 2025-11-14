import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducers"

export * from "./tools"
export * from "./provider"
export * from "./reducers"

export const store = configureStore({ reducer })

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]