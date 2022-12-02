import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

// Funcionamento de json
app.use(express.json());

app.use("/categories", categoriesRoutes);
// Criando path inicial de /categories, assim quando chegar no arquivo "categories.routes.ts", não será necessário ficar criando as rotas com "/categories", e sim, somente com o "/"

app.use("/specifications", specificationsRoutes);

app.listen(3333);
