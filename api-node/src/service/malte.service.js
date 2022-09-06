import MalteRepository from "../repository/Malte.repository.js"

const MalteService = {}

MalteService.salvar = ({id}) => {
    if (id) {
        MalteRepository.atualizar();
    } else {
        MalteRepository.inserir(id);
    }
}

MalteService.obter =  async (id) => {
    return MalteRepository.obter(id);
}

MalteService.obterTodos =  async () => {
    return MalteRepository.obterTodos();
}


MalteService.excluir = (id) => {
    MalteRepository.excluir(id)
}

export default MalteService;