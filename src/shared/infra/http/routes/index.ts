import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
// Fazendo sem colocar o /"authenticates", fará com que o path dele seja o que foi colocado em authenticateRoutes que no caso é o /sessions
router.use(authenticateRoutes);

export { router };
