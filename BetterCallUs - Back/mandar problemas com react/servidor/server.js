var express = require('express');
var app = express();
var cors = require('cors');
const port = 3001;

app.use(cors());

app.use(express.json());

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lucca',
  database: 'teste'
});

db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o MySQL: ' + err.message);
  } else {
    console.log('Conexão bem-sucedida ao MySQL.');
  }
});

app.post('/inserirProblema', (req, res) => {
  const { titulo, descricao } = req.body;

  const sql = 'INSERT INTO problemas (titulo, descricao) VALUES (?, ?)';

  db.query(sql, [titulo, descricao], (err, result) => {
    if (err) {
      console.error('Erro ao inserir o problema: ' + err.message);
      res.status(500).send('Erro ao inserir o problema no banco de dados.');
    } else {
      console.log('Problema inserido com sucesso na tabela "problemas".');
      res.status(200).send('Problema inserido com sucesso no banco de dados.');
    }
  });
});

app.get('/problemas', (req, res) => {
  const sql = 'SELECT titulo, descricao FROM problemas';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar problemas: ' + err.message);
      res.status(500).json({ error: 'Erro ao buscar problemas' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
