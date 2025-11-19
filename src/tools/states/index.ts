import { useSyncExternalStore } from "react"
import { useDispatch, useSelector } from "react-redux"
import { store, AppDispatch, RootState } from "../../index"
import { syncStates, memory } from "@tools"

export const useReduxClient = <K extends keyof RootState>(sliceName: K): RootState[K] => {

    const dispatch = useDispatch<AppDispatch>();

    (async () => await syncStates(dispatch))()

    const state = useSyncExternalStore(
        store.subscribe,
        () => store.getState()[sliceName]
    )

    console.log("States", state)

    return {
        state: state || {},
        dispatch: (action: string, value: any) => {
            console.log("Actions", memory.actions)
            const sliceActions = memory.actions[sliceName]
            const actionFunction = sliceActions[action]

            if (!actionFunction) return

            dispatch(actionFunction(value))
        }
    }
}

export const useReduxServer = <K extends keyof RootState>(sliceName: K): RootState[K] => {
    return {
        state: store.getState()[sliceName] || {},
        dispatch: (action: string, value: any) => {
            const sliceActions = memory.actions[sliceName]
            const actionFunction = sliceActions[action]

            if (!actionFunction) return

            store.dispatch(actionFunction(value))
        }
    }
}