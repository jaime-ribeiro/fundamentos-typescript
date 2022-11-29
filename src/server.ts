import express, { response } from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

//Funcionamento de json
app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333);
