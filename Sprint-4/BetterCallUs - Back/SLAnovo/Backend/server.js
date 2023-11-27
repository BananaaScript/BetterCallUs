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
  password: 'fatec',
  database: 'novoteste',
};

async function connect() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}



app.get('/chamados', async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM chamado ORDER BY tempoderesposta ASC');
  connection.end();

  res.json(rows);
});


app.post('/chamados', async (req, res) => {
  const { area, status, id_cliente} = req.body; 


  let tempoderesposta;

  switch (area) {
    case 'Problema de Conexão':
      tempoderesposta = 1;
      break;
    case 'Falha de Software':
      tempoderesposta = 2;
      break;
    case 'Problema de Segurança':
      tempoderesposta = 3;
      break;
    case 'Vírus e Malware':
      tempoderesposta = 4;
      break;
    case 'Falha de Hardware':
      tempoderesposta = 5;
      break;
    case 'Dúvidas de Programação':
      tempoderesposta = 6;
      break;
    case 'Problemas de Impressão':
      tempoderesposta = 7;
      break;

    default:
      tempoderesposta = 8; 
  }

  // editar os tempos de resposta depois

  const connection = await connect();
  await connection.execute('INSERT INTO chamado (area, status, tempoderesposta, id_cliente) VALUES (?, ?, ?, ?)', [area || null, status, tempoderesposta, id_cliente]);

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

/* ============ ATUALIZACAO DO TICKET =============== */

app.put('/chamados/:id', async (req, res) => {
  const { id } = req.params;
  const { prioridade, area, status } = req.body;

  const connection = await connect();

  try {
    const [existingTicket] = await connection.execute('SELECT * FROM chamado WHERE id = ?', [id]);

    if (!existingTicket || existingTicket.length === 0) {
      return res.status(404).json({ message: 'Chamado não encontrado' });
    }

    const updatedPrioridade = prioridade !== undefined ? prioridade : existingTicket[0].prioridade;
    const updatedStatus = status !== undefined ? status : existingTicket[0].status;

    await connection.execute(
      'UPDATE chamado SET prioridade = ?, status = ?, dataatualizacao = CURRENT_TIMESTAMP WHERE id = ?',
      [
        updatedPrioridade,
        updatedStatus,
        id
      ]
    );

    const [updatedChamado] = await connection.execute('SELECT id, prioridade, tempoderesposta, datacriacao, dataatualizacao FROM chamado WHERE id = ?', [id]);

    res.json({
      chamado: updatedChamado[0],
      message: 'Chamado atualizado com sucesso',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o chamado' });
  } finally {
    connection.end();
  }
});
/* ======================================================== */