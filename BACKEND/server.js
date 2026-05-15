const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const funcionarios = require('./routes/funcionarios');

app.use('/api/funcionarios', funcionarios);

app.listen(3001, () => {
  console.log('Servidor rodando');
});