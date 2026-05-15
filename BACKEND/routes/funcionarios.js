const router = require('express').Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM funcionarios', (err, result) => {
    res.json(result);
  });
});

router.post('/', (req, res) => {
  const { nome, cargo, salario, departamento } = req.body;

  db.query(
    'INSERT INTO funcionarios (nome,cargo,salario,departamento) VALUES (?,?,?,?)',
    [nome, cargo, salario, departamento],
    () => {
      res.json({ mensagem: 'Funcionário cadastrado' });
    }
  );
});

module.exports = router;