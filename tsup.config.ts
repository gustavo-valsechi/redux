import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["index.ts", "bin/index.js", "src/index.ts", "src/provider/**/*.tsx", "src/tools/**/*.ts"],
    outDir: "dist",
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    splitting: false,
    minify: false,
    bundle: false,
    sourcemap: false,
    external: ["react", "react-dom", "react-redux", "@reduxjs/toolkit"],
    tsconfig: "./tsconfig.json"
})
