const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'lucca',
  database: 'teste',
};

async function connect() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

app.get('/chamados', async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM chamado ORDER BY FIELD(prioridade, "Alta", "Média", "Baixa")');
  connection.end();

  res.json(rows);
});

app.post('/chamados', async (req, res) => {
  const { prioridade, area } = req.body;

  let tempoderesposta = 3;

  if (prioridade === 'Média') {
    tempoderesposta = 2;
  } else if (prioridade === 'Alta') {
    tempoderesposta = 1;
  }

  const connection = await connect();
  await connection.execute('INSERT INTO chamado (prioridade, area, tempoderesposta) VALUES (?, ?, ?)', [prioridade, area, tempoderesposta]);
  connection.end();

  res.json({ message: 'Chamado criado com sucesso' });
});


app.delete('/chamados/:id', async (req, res) => {
  const { id } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM chamado WHERE id = ?', [id]);
  connection.end();

  res.json({ message: 'Chamado excluído com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});