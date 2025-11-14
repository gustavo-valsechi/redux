import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["index.ts"],
    outDir: "dist",
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    splitting: false,
    minify: false,
    bundle: true,
    sourcemap: false,
    external: ["react", "react-dom", "react-redux", "@reduxjs/toolkit"],
    tsconfig: "./tsconfig.json"
})
