import MalteService from "../service/malte.service.js"

const MalteController = {}

MalteController.get = async (req, res) => {
    const malteId = req.params.id
    const malte = await MalteService.obter(malteId);

    if (malte) {
        res.json(malte);
    } else {
        res.sendStatus(404);
    }
}

MalteController.getAll = async (req, res) => {
    const malte = await MalteService.obterTodos();
    if (malte) {
        res.json(malte);
    } else {
        res.sendStatus(404);
    }
}

MalteController.post = async (req, res) => { }

MalteController.put = (req, res) => { }

MalteController.delete = (req, res) => { }


export default MalteController

