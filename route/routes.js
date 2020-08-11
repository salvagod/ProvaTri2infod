const express = require("express");
const routes = express.Router();

const controlador = require('../controller/controller');
//const itemcontrole = new controlador;


routes.post('/inserir', controlador.store);
routes.get('/usuario/:id', controlador.show);
routes.put('/usuario/:id', controlador.update);
routes.delete('/usuario/:id', controlador.deletar);
/*
routes.post('/inserir', itemcontrole.inserir);
routes.get('/usuario/:id', itemcontrole.buscar);
routes.put('/usuario/:id', itemcontrole.atualizar);
routes.delete('/usuario/:id', itemcontrole.remover);
*/module.exports = routes;
