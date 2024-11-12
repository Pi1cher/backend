import { Router } from "express";

import { superheroController } from "../controllers/superhero.controller";
import { commonMiddleware } from "../middlewares/commonMiddleware";

const router = Router();

router.get("/", superheroController.findAll);

router.get(
  "/:superheroId",

  superheroController.getById,
);

router.post(
  "/",

  commonMiddleware.FormData(),
  superheroController.create,
);

router.put(
  "/:superheroId",
  commonMiddleware.FormData(),
  superheroController.updateById,
);

router.delete(
  "/:superheroId",

  superheroController.deleteById,
);

export const superheroRouter = router;
