import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

/*
specificationsRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();
  return response.status(201).json(all);
});
*/
export { specificationsRoutes };
