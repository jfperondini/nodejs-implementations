import { getDBConnection } from "./configDB.js";

const MalteRepository = {};

MalteRepository.criarTabelaMalte = async () => {
  const conn = await getDBConnection();
  return conn.exec(
    "CREATE TABLE IF NOT EXISTS malte (" +
    "id INTEGER PRIMARY KEY, maltesGraos TEXT, origem TEXT, " +
    "tipo TEXT, fabricante TEXT, conversaoDeAcucarNecessaria TEXT, " +
    "corMenorLovibond REAL, corMaiorLovibond REAL, corMenorSRM REAL, " +
    "corMaiorSRM REAL, utilizacaoMaxima REAL, descricao TEXT)",
    (err) => {
      if (err) {
        console.log("Some Error Occured");
      } else {
        console.log("Table Created");
      }
    }
  );
};

MalteRepository.inserir = async () => { }

MalteRepository.atualizar = async () => { }

MalteRepository.obter = async () => {
  const conn = await getDBConnection();
  return conn.all("SELECT * FROM malte WHERE id = ?", [id], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.name);
    });

    return null;
  });
};

MalteRepository.obterTodos = async () => {
  const conn = await getDBConnection();
  return conn.all("SELECT * FROM malte", (err, rows) => {
    return rows;
  });
};

MalteRepository.excluir = async () => { };

export default MalteRepository;
