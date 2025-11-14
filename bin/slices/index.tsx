import fs from "fs"
import path from "path"

const root = process.cwd()

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
    }
}

const storeDir = path.join(root, "src/store")
ensureDir(storeDir)

const storeSliceExampleDir = path.join(root, "src/store/slices/example")
ensureDir(storeSliceExampleDir)

const fileRoot = path.join(storeDir, "index.tsx")
const fileSliceExample = path.join(storeSliceExampleDir, "index.tsx")

if (!fs.existsSync(fileSliceExample)) {
    fs.writeFileSync(
        fileSliceExample,
        `
            import { createSlice, PayloadAction } from "@reduxjs/toolkit"
            
            const initialState = {
                data: [],
            }
            
            const reducers = {
                setData: (state, action: PayloadAction<Array<any>>) => {
                    state.data = action.payload
                },
            }
            
            const slice = createSlice({
                name: 'example',
                initialState,
                reducers
            })
            
            export const actions = slice.actions
            export const reducer = slice.reducer
        `.trim()
    )

    console.log("✔ src/store/slices/example/index.tsx criado!")
} else {
    console.log("⚠ src/store/slices/example/index.tsx já existe!")
}

if (!fs.existsSync(fileRoot)) {
    fs.writeFileSync(fileRoot, `export * as example from "./example"`.trim())
    console.log("✔ src/store/index.tsx criado!")
} else {
    console.log("⚠ src/store/index.tsx já existe!")
}