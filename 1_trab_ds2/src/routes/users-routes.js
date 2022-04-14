const { Router } = require('express');
const UsersController = require('../controllers/users-controller');

const routes = Router();

const usersController = new UsersController();

routes.post('/cadastrar', usersController.cadastrar);

routes.post('/login', usersController.login);

routes.get('/perfil/:email', usersController.perfil);


module.exports = routes;
