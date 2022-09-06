import { getDBConnection } from "./configDB.js";

const LupuloRepository = {};

LupuloRepository.criarTabelaLupulo = async () => {
  const conn = await getDBConnection();
  return conn.exec(
    "CREATE TABLE IF NOT EXISTS lupulo (" +
    "id INTEGER PRIMARY KEY, especie TEXT, origem TEXT, " +
    "uso Text, alfaAcidoMenor Real, alfaAcidoMaior Real, " +
    "betaAcidoMenor Real, betaAcidoMaior Real, aroma Text, " +
    "estilosDeCerveja Text, substitutos Text)",
    (err) => {
      if (err) {
        console.log("Some Error Occured");
      } else {
        console.log("Table Created");
      }
    }
  );
};

LupuloRepository.inserir = async () => { }

LupuloRepository.atualizar = async () => { };


LupuloRepository.obter = async (id) => { 
  const conn = await getDBConnection();
  return conn.all("SELECT * FROM lupulo WHERE id = ?", [id], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.name);
    });

    return null;
  });
};

LupuloRepository.obterTodos = async () => { 
const conn = await getDBConnection();
return conn.all("SELECT * FROM lupulo", (err, rows) => {
  return rows;
});
};

export default LupuloRepository;
