import LeveduraService from "../service/levedura.service.js"

const LeveduraController = {}

LeveduraController.get = async (req, res) => {
    const leveduraId = req.params.id
    const levedura = await LeveduraService.obter(leveduraId);

    if (levedura) {
        res.json(levedura);
    } else {
        res.sendStatus(404);
    }
}

LeveduraController.getAll = async (req, res) => {
    const levedura = await LeveduraService.obterTodos();
    if (levedura) {
        res.json(levedura);
    } else {
        res.sendStatus(404);
    }
}

LeveduraController.post = async (req, res) => { }

LeveduraController.put = (req, res) => { }

LeveduraController.delete = (req, res) => { }


export default LeveduraController

