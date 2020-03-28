//traremos as funcionalidades do express para o node
//importar o modulo "express" para a variavel express
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//criação da aplicação via express
const app = express();
app.use(cors());

//informar que usaremos o formato JSON nas nossas requisições
//transforma todas respostas em objeto json.
app.use(express.json());

app.use(routes);


  // ouvir a aplicação na porta 3333
  app.listen(3333);