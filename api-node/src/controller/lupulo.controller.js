import LupuloService from "../service/lupulo.service.js"

const LupuloController = {}

LupuloController.get = async (req, res) => {
    const lupuloId = req.params.id
    const lupulo = await LupuloService.obter(lupuloId);

    if (lupulo) {
        res.json(lupulo);
    } else {
        res.sendStatus(404);
    }
}

LupuloController.getAll = async (req, res) => {
    const lupulo = await LupuloService.obterTodos();
    if (lupulo) {
        res.json(lupulo);
    } else {
        res.sendStatus(404);
    }
}

LupuloController.post = async (req, res) => { }

LupuloController.put = (req, res) => { }

LupuloController.delete = (req, res) => { }


export default LupuloController

