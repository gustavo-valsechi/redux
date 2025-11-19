import { Reducer } from "@reduxjs/toolkit"
import { reducer } from "@tools"
import { store } from "../../index"

export let memory: any = { actions: {}, reducer: {} }

export const configureSlices = (slices: {
    [key: string]: {
        actions: { [key: string]: Function }
        reducer: Reducer<any, any>
    }
}) => {
    for (const slice in slices) {
        memory.actions[slice] = slices[slice]?.actions
        memory.reducer[slice] = slices[slice]?.reducer
    }

    store.replaceReducer((...args) => reducer(memory.reducer, ...args))
    store.dispatch({ type: '@@redux/INIT' })
}