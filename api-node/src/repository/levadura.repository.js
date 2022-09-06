import { getDBConnection } from "./configDB.js";

const LeveduraRepository = {};

LeveduraRepository.criarTabelaLevedura = async () => {
  const conn = await getDBConnection();
};

LeveduraRepository.inserir = async () => {
  const conn = await getDBConnection();
}

LeveduraRepository.atualizar = async () => {
  const conn = await getDBConnection();
};


LeveduraRepository.obter = async (id) => {
  const conn = await getDBConnection();
};

LeveduraRepository.obterTodos = async () => {
  const conn = await getDBConnection();
};

export default LeveduraRepository;
