import LeveduraRepository from "../repository/levedura.repository.js"

const LeveduraService = {}

LeveduraService.salvar = ({id}) => {
    if (id) {
        LeveduraRepository.atualizar();
    } else {
        LeveduraRepository.inserir(id);
    }
}

LeveduraService.obter =  async (id) => {
    return LeveduraRepository.obter(id);
}

LeveduraService.obterTodos =  async () => {
    return LeveduraRepository.obterTodos();
}


LeveduraService.excluir = (id) => {
    LeveduraRepository.excluir(id)
}

export default LeveduraService;