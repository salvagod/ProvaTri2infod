const express = require("express");
const routes = express.Router();

const controlador = require('../controller/controller');
const itemcontrole = new controlador;

routes.post('/usuario', itemcontrole.inserir);
routes.get('/usuario/:id', itemcontrole.buscar);
routes.put('/usuario/:id', itemcontrole.atualizar);
routes.delete('/usuario/:id', itemcontrole.remover);
module.exports = routes;
