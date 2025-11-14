import { readdirSync, renameSync, rmSync, statSync } from "fs"
import { join } from "path"

const distSrc = join(process.cwd(), "dist/src")
const distRoot = join(process.cwd(), "dist")

// Verifica se dist/src existe
try {
    const items = readdirSync(distSrc)

    items.forEach(item => {
        const srcPath = join(distSrc, item)
        const destPath = join(distRoot, item)

        if (!statSync(srcPath).isDirectory()) return

        renameSync(srcPath, destPath)
    })

    // Remove a pasta src vazia
    rmSync(distSrc, { recursive: true, force: true })
} catch (err) {
    console.error("🔴 Erro ao mover pastas do dist/src:", err)
}
