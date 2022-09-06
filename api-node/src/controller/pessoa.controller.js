import PessoaService from "../service/pessoa.service.js"

const PessoaController = {}

PessoaController.get = async (req, res) => {
    const pessoaId = req.params.id
    const pessoa = await PessoaService.obter(pessoaId);

    if (pessoa) {
        //res.end(JSON.stringify(pessoa));
        res.json(pessoa);
    } else {
        res.sendStatus(404);
    }
}

PessoaController.getAll = async (req, res) => {
    const pessoa = await PessoaService.obterTodos();
    if (pessoa) {
        //res.setHeader('Content-Type', 'application/json');
        res.json(pessoa);
    } else {
        res.sendStatus(404);
    }
}

PessoaController.post = async (req, res) => { }

PessoaController.put = (req, res) => { }

PessoaController.delete = (req, res) => { }


export default PessoaController



//  import { openDB } from '../configDB';

//  export async function createTable() {
//    openDB().then((db) => {
//      db.exec(
//        'CREATE TABLE IF NOT EXISTIS Pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER'
//      );
//    });
//  }

//  export async function instertPessoa(pessoa) {
//    openDB().then((db) => {
//      db.run('INSERT INTO PESSOA (nome, idade) VALUES (?,?)', [
//        pessoa.nome,
//        pessoa.idade,
//      ]);
//    });
//  }

//  export async function updatePessoa(pessoa) {
//    openDB().then((db) => {
//      db.run('UPDATE INTO Pessoa SET nome=?, idade=? WHERE id?', [
//        pessoa.nome,
//        pessoa.idade,
//        pessoa.id,
//      ]);
//    });
//  }

//  export async function selectPessoas() {
//    return openDB().then((db) => {
//      db.all('SELECT * FROM Pessoa').then((res) => res);
//    });
//  }

//  export async function selectPessoa(id) {
//    return openDB().then((db) => {
//      db.all('SELECT * FROM Pessoa WHERE id=?', [id]).then((res) => res);
//    });
//  }
