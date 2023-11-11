import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const app = express();
const PORT = 3001;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'fatec',
  database: 'BetterCallUs',
});

app.use(bodyParser.json());

app.post('/api/registro-conta', (req, res) => {
  const { nome, cpf, email, senha} = req.body;

  const sql = 'INSERT INTO Cliente (nome, email, senha, cpf) VALUES (?, ?, ?, ?)';
  db.query(sql, [nome, email, senha, cpf], (err) => {
    if (err) {
      console.error('Erro ao inserir cliente no banco de dados:', err);
    }
    res.json({ message: 'Cliente registrado com sucesso!' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
