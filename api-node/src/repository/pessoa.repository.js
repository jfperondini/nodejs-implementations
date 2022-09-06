import { getDBConnection } from "./configDB.js";

const PessoaRepository = {};

PessoaRepository.criarTabelaPessoa = async () => {
  const conn = await getDBConnection();
  return conn.exec(
    "CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)",
    (err) => {
      if (err) {
        console.log("Some Error Occured");
      } else {
        console.log("Table Created");
      }
    }
  );
};

PessoaRepository.inserir = async () => {
  const conn = await getDBConnection();
  return conn.run('INSERT INTO pessoa (nome, idade) VALUES (?,?)', [
    pessoa.nome,
    pessoa.idade,
  ]);
}

PessoaRepository.atualizar = async () => {
  const conn = await getDBConnection();
  return conn.run('UPDATE INTO pessoa SET nome=?, idade=? WHERE id?', [
    pessoa.nome,
    pessoa.idade,
    pessoa.id,
  ]);
}


PessoaRepository.obter = async (id) => {
  const conn = await getDBConnection();
  return conn.all("SELECT * FROM pessoa WHERE id = ?", [id], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.name);
    });

    return null;
  });
};


PessoaRepository.obterTodos = async () => {
  const conn = await getDBConnection();
  return conn.all("SELECT * FROM pessoa", (err, rows) => {
    return rows;
  });
};


PessoaRepository.excluir = async () => { };

export default PessoaRepository;
