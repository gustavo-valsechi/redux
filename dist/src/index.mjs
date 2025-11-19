import { configureStore } from "@reduxjs/toolkit";
import { reducer, memory } from "./tools";
import fs from "fs";
import path from "path";
const caminhoConfig = path.join(process.cwd(), "/src/app/store/slices/index.ts");
if (fs.existsSync(caminhoConfig)) {
  const conteudo = fs.readFileSync(caminhoConfig);
  console.log(conteudo);
}
const store = configureStore({
  reducer: (state = {}, action) => reducer(memory.reducer, state, action)
});
export {
  store
};
