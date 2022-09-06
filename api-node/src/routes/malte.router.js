import { Router } from "express";
import MalteController from "../controller/malte.controller.js";

const MalteRouter = Router();
MalteRouter.post("/", MalteController.post);
MalteRouter.put("/", MalteController.put);
MalteRouter.delete("/", MalteController.delete);
MalteRouter.get("/", MalteController.getAll);
MalteRouter.get("/:id", MalteController.get);

export default MalteRouter 
