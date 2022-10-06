import { Router } from "express";
import eventController from "../controllers/eventController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { eventSchema } from "../schemas/eventSchema.js";

const eventRouter = Router();

eventRouter.post("/create", validateSchemaMiddleware(eventSchema), eventController.createEvent);

export default eventRouter;