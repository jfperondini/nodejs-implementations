import PessoaRepository from "../repository/pessoa.repository.js"

const PessoaService = {}

PessoaService.salvar = ({id}) => {
    if (id) {
        PessoaRepository.atualizar();
    } else {
        PessoaRepository.inserir(id);
    }
}

PessoaService.obter =  async (id) => {
    return PessoaRepository.obter(id);
}

PessoaService.obterTodos =  async () => {
    return PessoaRepository.obterTodos();
}


PessoaService.excluir = (id) => {
    PessoaRepository.excluir(id)
}

export default PessoaService;