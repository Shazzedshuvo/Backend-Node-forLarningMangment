import { Router } from "express";
import { successStoryValidationSchema } from "./sucess.validition.js";

import { SuccessStoryController } from "./success.contlolar.js";
import { validateMiddleware } from "../middelware/validetmidelware.js";

const router = Router();


// sucessstory/create"

router.post(
  "/create",
  validateMiddleware(successStoryValidationSchema),
  SuccessStoryController.createSuccessStoryController
);

router.get("/", SuccessStoryController.getAllSuccessStoriesController);

router.get("/:id", SuccessStoryController.getSingleSuccessStoryController);

router.patch("/:id", SuccessStoryController.updateSuccessStoryController);

router.delete("/:id", SuccessStoryController.deleteSuccessStoryController);

export const SuccessStoryRoutes = router;
