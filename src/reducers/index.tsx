import { loadSlices, setFullState } from "@tools"

const slices = loadSlices()

const reducers: any = {}

slices.forEach((key: string) => {
    if (!slices[key]?.reducer) return
    reducers[key] = slices[key].reducer
})

export default (state: any, action: any) => {
    if (action.type === setFullState.type) return { ...state, ...action.payload }

    return Object.keys(reducers).reduce((acc, key) => {
        acc[key] = reducers[key](state?.[key], action)
        return acc
    }, {} as any)
}
