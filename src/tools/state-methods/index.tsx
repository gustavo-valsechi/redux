import { createAction } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { store, AppDispatch, RootState, loadSlices } from "@index"

const slices = loadSlices()

const actions: any = {}

slices.forEach((key: string) => {
    if (!slices[key]?.actions) return
    actions[key] = slices[key].actions
})

export const setFullState = createAction<any>("SET_FULL_STATE")

export const useReduxClient = <K extends keyof RootState>(key: K): RootState[K] => {
    const sliceActions = actions[key]
    const dispatch = useDispatch<AppDispatch>()

    return {
        state: useSelector((state: RootState) => state[key]) || {},
        dispatch: (action: keyof typeof sliceActions, value: any) => {
            const actionFunction = sliceActions[action]
            if (!actionFunction) return
            dispatch(actionFunction(value))
        }
    }
}

export const useReduxServer = <K extends keyof RootState>(key: K): RootState[K] => {
    const sliceActions = actions[key]

    return {
        state: store.getState()?.[key] || {},
        dispatch: (action: keyof typeof sliceActions, value: any) => {
            const actionFunction = sliceActions[action]
            if (!actionFunction) return
            store.dispatch(actionFunction(value))
        }
    }
}