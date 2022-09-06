import { Router } from "express";
import LeveduraController from "../controller/levedura.controller.js";

const LeveduraRouter = Router();
LeveduraRouter.post("/", LeveduraController.post);
LeveduraRouter.put("/", LeveduraController.put);
LeveduraRouter.delete("/", LeveduraController.delete);
LeveduraRouter.get("/", LeveduraController.getAll);
LeveduraRouter.get("/:id", LeveduraController.get);

export default LeveduraRouter 
