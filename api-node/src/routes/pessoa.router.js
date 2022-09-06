import { Router } from "express";
import PessoaController from "../controller/pessoa.controller.js";

const PessoaRouter = Router();
PessoaRouter.post("/", PessoaController.post);
PessoaRouter.put("/", PessoaController.put);
PessoaRouter.delete("/", PessoaController.delete);
PessoaRouter.get("/", PessoaController.getAll);
PessoaRouter.get("/:id", PessoaController.get);

export default PessoaRouter 
