import fs from "fs"
import path from "path"

const root = process.cwd()

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
    }
}

const apiDir = path.join(root, "src/app/api/state")
ensureDir(apiDir)

const file = path.join(apiDir, "route.tsx")

if (!fs.existsSync(file)) {
    fs.writeFileSync(
        file,
        `
import { NextResponse } from "next/server"
import { store } from "@gustavo-valsechi/redux"

export async function GET() {
    const state = store.getState()
    return NextResponse.json({ success: true, state })
}
        `.trim()
    )

    console.log("✔ app/api/state/route.ts criado!")
} else {
    console.log("⚠ app/api/state/route.ts já existe!")
}