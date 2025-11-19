import { createAction, Reducer } from "@reduxjs/toolkit"

export const setFullState = createAction<any>("SET_FULL_STATE")

export const reducer = (reducers: Reducer<any, any>, state: any, action: any) => {
    if (action.type === setFullState.type) return { ...state, ...action.payload }

    return Object.keys(reducers).reduce((acc, key) => {
        acc[key] = reducers[key]?.(state?.[key], action)
        return acc
    }, {} as any)
}
