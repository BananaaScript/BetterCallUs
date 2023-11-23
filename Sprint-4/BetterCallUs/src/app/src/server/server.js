const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const jwt = require('jsonwebtoken')

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'fatec',
  database: 'bettercallus',
};

async function connect() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

app.get('/equipamentos', async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT nome FROM equipamentos');

  const nomesEquipamentos = rows.map((equipamento) => equipamento.nome);

  connection.end();
  res.json(nomesEquipamentos);
});

app.get('/chamados', async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM chamado ORDER BY tempoderesposta ASC');
  connection.end();

  res.json(rows);
});


app.post('/chamados', async (req, res) => {
  const { area, titulo, sumario, nome_equipamento} = req.body; 


  let tempoderesposta;
  let prioridade = '';


  switch (area) {
    case 'Problema de Conexão':
      tempoderesposta = 1;
      prioridade = 'Baixa'
      break;
    case 'Falha de Software':
      tempoderesposta = 2;
      prioridade = 'Alta'
      break;
    case 'Problema de Segurança':
      tempoderesposta = 3;
      break;
    case 'Vírus e Malware':
      tempoderesposta = 4;
      prioridade = 'Media'
      break;
    case 'Falha de Hardware':
      tempoderesposta = 5;
      prioridade = 'Alta'
      break;
    case 'Dúvidas de Programação':
      tempoderesposta = 6;
      prioridade = 'Baixa'
      break;
    case 'Problemas de Impressão':
      tempoderesposta = 7;
      prioridade = 'Baixa'
      break;

    default:
      tempoderesposta = 8;
      prioridade = 'Baixa'
  }

  // editar os tempos de resposta depois

  const connection = await connect();
  await connection.execute('INSERT INTO chamado (area, titulo, sumario, tempoderesposta, nome_equipamento, prioridade) VALUES (?, ?, ?, ?, ?, ?)', [area || null, titulo, sumario,  tempoderesposta, nome_equipamento, prioridade]);

  res.json({ message: 'Chamado criado com sucesso' });
});


app.delete('/chamados/:id', async (req, res) => {
  const { id } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM chamado WHERE id = ?', [id]);
  connection.end();

  res.json({ message: 'Chamado excluído com sucesso' });
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

/* Registro suporte */

app.get('/registroSup', async(req, res) => {
  const connection = await connect();
  const[rows] = await connection.execute('SELECT * FROM suporte')
  connection.end();

  res.json(rows)
})

app.post('/registroSup', async(req, res) => {
  const {nome, cpf, senha, privilegio, email, chamados, chamadosRespondidos} = req.body;
  
  const connection = await connect();
  await connection.execute('INSERT INTO suporte (nome, cpf, senha, privilegio, email, chamados, chamadosRespondidos) VALUES(?, ?, ?, ?, ?, ?, ?)', [nome, cpf, senha, privilegio, email, chamados, chamadosRespondidos]);

  res.json({message: 'Registro feito com sucesso'});
})

app.delete('/registroSup/:cpf', async (req, res) => {
  const { cpf } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM suporte WHERE cpf = ?', [cpf]);
  connection.end();

  res.json({ message: 'Suporte excluído com sucesso' });
});

/* Registro ADM */

app.get('/registroAdm', async(req, res) => {
  const connection = await connect();
  const[rows] = await connection.execute('SELECT * FROM ADM')
  connection.end();

  res.json(rows)
})

app.post('/registroAdm', async(req, res) => {
  const {nome, cpf, senha, privilegio, email, departamento} = req.body;
  
  const connection = await connect();
  await connection.execute('INSERT INTO ADM (nome, cpf, senha, privilegio, email, departamento) VALUES(?, ?, ?, ?, ?, ?)', [nome, cpf, senha, privilegio, email, departamento]);

  res.json({message: 'Registro feito com sucesso'});
})


/* Registro clientes */

app.get('/registroCliente', async (req, res) => {
  const connection = await connect();
  const[rows] = await connection.execute('SELECT * FROM cliente')
  connection.end();

  res.json(rows)
})

app.post('/registroCliente', async(req, res) => {
  const {nome, cpf, senha, privilegio, email, telefone, nomeSocial} = req.body;

  const connection = await connect();
  await connection.execute('INSERT INTO cliente(nome, cpf, senha, privilegio, email, telefone, nomeSocial) VALUES (?, ?, ?, ?, ?, ?, ?)', [nome, cpf, senha, privilegio, email, telefone, nomeSocial]);

  res.json({message: 'Registro feito com sucesso'});
})

app.delete('/registroCliente/:cpf', async (req, res) => {
  const { cpf } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM cliente WHERE cpf = ?', [cpf]);
  connection.end();

  res.json({ message: 'Cliente excluído com sucesso' });
});


/* Registro de equipamentos */

app.get('/registroEquip', async (req, res) => {
  const connection = await connect();
  const[rows] = await connection.execute('SELECT * FROM equipamentos')
  connection.end();

  res.json(rows)
})

app.post('/registroEquip', async(req, res) => {
  const {numeroSerie, nome, descricao} = req.body;

  const connection = await connect();
  await connection.execute('INSERT INTO equipamentos(numeroSerie, nome, descricao) VALUES (?, ?, ?)', [numeroSerie, nome, descricao]);

  res.json({message: 'Registro feito com sucesso'});
})


app.delete('/registroEquip/:numeroSerie', async (req, res) => {
  const { numeroSerie } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM equipamentos WHERE numeroSerie = ?', [numeroSerie]);
  connection.end();

  res.json({ message: 'Equipamento excluído com sucesso' });
});


app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const connection = await connect();

  try {
    let [rows] = await connection.execute('SELECT * FROM ADM WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email }, 'segredo_do_jwt');
      return res.json({ usuario: { ...rows[0], privilegio: rows[0].privilegio }, token });
    }

    [rows] = await connection.execute('SELECT * FROM cliente WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email }, 'segredo_do_jwt');
      return res.json({ usuario: { ...rows[0], privilegio: rows[0].privilegio }, token });
    }

    [rows] = await connection.execute('SELECT * FROM suporte WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email }, 'segredo_do_jwt');
      return res.json({ usuario: { ...rows[0], privilegio: rows[0].privilegio }, token });
    }
    res.status(401).json({ message: 'Credenciais inválidas' });
  } catch (error) {
    console.error('Erro durante a autenticação:', error);
    res.status(500).json({ message: 'Erro durante a autenticação' });
  } finally {
    connection.end();
  }
});



app.post('/validate', async (req, res) => {
  const { token } = req.body;
  
  jwt.verify(token, 'segredo_do_jwt', (err, decoded) => {
      if (err) {
          return res.status(401).json({ message: 'Token inválido' });
      }
      res.json({ usuario: decoded });
  });
});


app.post('/logout', (req, res) => {
res.json({ message: 'Logout bem-sucedido' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
