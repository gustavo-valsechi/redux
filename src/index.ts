import { configureStore } from "@reduxjs/toolkit"
import { reducer, memory } from "@tools"
import fs from "fs"
import path from "path"

const caminhoConfig = path.join(process.cwd(), "/src/app/store/slices/index.ts")

if (fs.existsSync(caminhoConfig)) {
    const conteudo = fs.readFileSync(caminhoConfig)
    console.log(conteudo)
}


export const store = configureStore({
    reducer: (state = {}, action) => reducer(memory.reducer, state, action),
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]