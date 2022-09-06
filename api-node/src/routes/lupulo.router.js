import { Router } from "express";
import LupuloController from "../controller/lupulo.controller.js";

const LupuloRouter = Router();
LupuloRouter.post("/", LupuloController.post);
LupuloRouter.put("/", LupuloController.put);
LupuloRouter.delete("/", LupuloController.delete);
LupuloRouter.get("/", LupuloController.getAll);
LupuloRouter.get("/:id", LupuloController.get);

export default LupuloRouter 
