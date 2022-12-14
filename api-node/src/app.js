import express from "express";
import PessoaRepository from "./repository/pessoa.repository.js";
import PessoaRouter from "./routes/pessoa.router.js";
import MalteRepository from "./repository/malte.repository.js";
import MalteRouter from "./routes/malte.router.js";
import LupuloRepository from "./repository/lupulo.repository.js";
import LupuloRouter from "./routes/lupulo.router.js";


const port = 3000;


PessoaRepository.criarTabelaPessoa();
LupuloRepository.criarTabelaLupulo();
MalteRepository.criarTabelaMalte();



const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Api Rodando agora");
});

app.use("/pessoa", PessoaRouter);
app.use("/lupulo", LupuloRouter);
app.use("/malte", MalteRouter);



app.listen(port, () => console.log("Api Rodando."));
    