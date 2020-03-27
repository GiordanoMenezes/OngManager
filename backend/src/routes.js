const express = require('express');

const routes = express.Router();

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const sessionController = require('./controllers/sessionController');


// GET COM TEXTO SIMPLES

// //metodo "send" mostra um simples texto no body
// routes.get('/', (request,response) => {
//     return response.send("Hello World");
// })

// GET COM JSON

//metodo "json" retorna um objeto JSON.
// routes.get('/', (request,response) => {
//     return response.json({
//       'name':'giordano',
//       'idade': 42
//     });
// })

// GET COM PARAMETROS

// Query params: Parametros enviados na rota para filtrar a consulta, paginacao, etc.. => ?name=maria
// Route params: Parametros para identificar um recurso unico => /:id

// const url = '/users'; //todos ou filtrados se tiver queryparams
// const urlporId = '/users/:id'; //com routeparams

// routes.get(urlporId, (request, response) => {

//   const queryparams = request.query; // consulta todos os query params da requisição
//   console.log('Query params: ',queryparams);
//   const routeparams = request.params; // consulta os route params da requisicao
//   console.log('Route params: ',routeparams);
//   return response.json({
//     'name': 'giordano',
//     'idade': 42
//   });
// })

routes.get('/ongs', ongController.findAll);
routes.get('/incidents', incidentController.findAll);
routes.get('/incidents/profile', incidentController.findByProfile);


// POST
routes.post('/session',sessionController.create);
routes.post('/ongs', ongController.save);
routes.post('/incidents', incidentController.save);

routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;