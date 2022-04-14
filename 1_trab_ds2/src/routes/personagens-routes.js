const { Router } = require('express');

const { PersoController } = require('../controllers/personagens-controller');

const routes = Router();

const persoController = new PersoController();

routes.get('/cadastrar', persoController.mostraCadastro);

routes.get('/deletar/:id', persoController.deletar);

routes.get('/', persoController.listar);

routes.get('/:id', persoController.detalhar);

routes.post('/', persoController.cadastrar)



module.exports = routes;