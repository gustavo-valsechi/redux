import path from "path"
import fs from "fs"

export const loadSlices = () => {
    const projectRoot = process.cwd()
    const slicesFile = path.join(projectRoot, "src/store/slices/index.tsx")

    if (!fs.existsSync(slicesFile)) {
        throw new Error(
            `❌ Não foi encontrado o arquivo src/store/slices/index.tsx no projeto.`
        )
    }

    const imported = require(slicesFile)

    if (!imported) {
        throw new Error(
            `❌ O arquivo index.tsx precisa exportar seus slices. Exemplo:
      
              export * as user from "./user"
              export * as product from "./product"
            `
        )
    }

    return imported
}