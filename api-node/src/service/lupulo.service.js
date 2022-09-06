import LupuloRepository from "../repository/lupulo.repository.js"

const LupuloService = {}

LupuloService.salvar = ({id}) => {
    if (id) {
        LupuloRepository.atualizar();
    } else {
        LupuloRepository.inserir(id);
    }
}

LupuloService.obter =  async (id) => {
    return LupuloRepository.obter(id);
}

LupuloService.obterTodos =  async () => {
    return LupuloRepository.obterTodos();
}


LupuloService.excluir = (id) => {
    LupuloRepository.excluir(id)
}

export default LupuloService;