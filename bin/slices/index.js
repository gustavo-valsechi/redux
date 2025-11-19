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

const storeSliceExampleDir = path.join(root, "src/store/example")
ensureDir(storeSliceExampleDir)

const layoutDir = path.join(root, "src/app")
ensureDir(storeSliceExampleDir)

const fileRoot = path.join(storeDir, "index.tsx")
const fileSliceExample = path.join(storeSliceExampleDir, "index.tsx")
const fileLayout = path.join(layoutDir, "layout.tsx")

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

    console.log("✔ src/store/example/index.tsx criado!")
} else {
    console.log("⚠ src/store/example/index.tsx já existe!")
}

if (!fs.existsSync(fileRoot)) {
    fs.writeFileSync(
        fileRoot,
        `
import { configureSlices } from "@gustavo-valsechi/redux"
        
import * as example from "./example"

configureSlices({ example })
        `.trim()
    )
    console.log("✔ src/store/index.tsx criado!")
} else {
    console.log("⚠ src/store/index.tsx já existe!")
}

if (!fs.existsSync(fileLayout)) {
    fs.writeFileSync(
        fileRoot,
        `
import React from "react"
import { StoreProvider } from "@gustavo-valsechi/redux/provider"
import "@store"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
            </head>
            <body>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </body>
        </html>
    )
}
        `.trim()
    )
    console.log("✔ src/app/layout.tsx criado!")
} else {
    const original = fs.readFileSync(fileLayout, "utf8")
    fs.writeFileSync(fileLayout, 'import "src/store"' + original)
    console.log("✔ Importação do store adicionado!")
}