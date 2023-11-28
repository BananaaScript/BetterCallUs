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
  password: 'root',
  database: 'bettercallus',
};

async function connect() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

/* Puxar privilégio */

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const connection = await connect();

  try {
    let [rows] = await connection.execute('SELECT * FROM ADM WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email, privilegio: rows[0].privilegio }, 'segredo_do_jwt');
      return res.json({ usuario: { ...rows[0], privilegio: rows[0].privilegio }, token });
    }

    [rows] = await connection.execute('SELECT * FROM cliente WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email, privilegio: rows[0].privilegio }, 'segredo_do_jwt');
      return res.json({ usuario: { ...rows[0], privilegio: rows[0].privilegio }, token });
    }

    [rows] = await connection.execute('SELECT * FROM suporte WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email, privilegio: rows[0].privilegio }, 'segredo_do_jwt');
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

app.get('/chamadosdocliente', async (req, res) => {
  const connection = await connect();
  const emailCliente = req.query.emailCliente; 

  if (emailCliente) {
    const [rows] = await connection.execute('SELECT * FROM chamado WHERE email_cliente = ? ORDER BY tempoderesposta ASC', [emailCliente]);

    connection.end();
    res.json(rows);
  } 
});

app.get('/chamadosdosuporte', async (req, res) => {
  const connection = await connect();
  const emailSuporte = req.query.emailSuporte; 

  if (emailSuporte) {
    const [rows] = await connection.execute('SELECT * FROM chamado WHERE email_suporte = ? AND status <> "Em aguardo" ORDER BY tempoderesposta ASC', [emailSuporte]);

    connection.end();
    res.json(rows);
  } 
});

app.get('/chamadossemresposta', async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM chamado WHERE status = 'Em aguardo' ORDER BY tempoderesposta ASC");
  connection.end();

  res.json(rows);
});

app.post('/chamados', async (req, res) => {
  const { area, titulo, sumario, nome_equipamento, email_cliente} = req.body; 
  let connection = await connect();
  const clienteQuery = await connection.execute('SELECT nome, cpf, telefone, nomeSocial FROM cliente WHERE email = ?', [email_cliente]);
  const [clienteData] = clienteQuery[0];

  const { nome, cpf, telefone, nomeSocial } = clienteData;

  let tempoderesposta;
  let prioridade = '';
  let status = 'Em aguardo';


  switch (area) {
    case 'Problema de Conexão':
      tempoderesposta = '1 hora';
      TempoResolucao = '2 horas'
      prioridade = '10'
      break;
    case 'Falha de Software':
      tempoderesposta = '2 horas';
      TempoResolucao = '4 horas'
      prioridade = '09'
      break;
    case 'Problema de Segurança':
      tempoderesposta = '3 horas';
      TempoResolucao = '6 horas'
      prioridade = '08'
      break;
    case 'Vírus e Malware':
      tempoderesposta = '4 horas';
      TempoResolucao = '8 horas'
      prioridade = '06'
      break;
    case 'Falha de Hardware':
      tempoderesposta = '5 horas';
      TempoResolucao = '7 horas'
      prioridade = '05'
      break;
    case 'Dúvidas de Programação':
      tempoderesposta = '6 horas';
      TempoResolucao = '12'
      prioridade = '04'
      break;
    case 'Problemas de Impressão':
      tempoderesposta = '7 horas';
      TempoResolucao = '14 horas'
      prioridade = '03'
      break;

    default:
      tempoderesposta = '2 horas';
      TempoResolucao = '4 horas'
      prioridade = '07'
  }

  // editar os tempos de resposta depois

  connection = await connect();
  await connection.execute(
    'INSERT INTO chamado (area, titulo, sumario, tempoderesposta,TempoResolucao, status, nome_equipamento, prioridade, email_cliente, nome_cliente, cpf_cliente, telefone_cliente, nomeSocial_cliente) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [area || null, titulo, sumario, tempoderesposta,TempoResolucao, status, nome_equipamento, prioridade, email_cliente, nome, cpf, telefone, nomeSocial]
  );
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
  let resposta = '';
  const connection = await connect();

  try {
    const [existingTicket] = await connection.execute('SELECT * FROM chamado WHERE id = ?', [id]);

    if (!existingTicket || existingTicket.length === 0) {
      return res.status(404).json({ message: 'Chamado não encontrado' });
    }

    const updatedPrioridade = prioridade !== undefined ? prioridade : existingTicket[0].prioridade;
    const updatedStatus = status !== undefined ? status : existingTicket[0].status;

    await connection.execute(
      'UPDATE chamado SET prioridade = ?, status = ?, resposta = ?, dataatualizacao = CURRENT_TIMESTAMP WHERE id = ?',
      [
        updatedPrioridade,
        updatedStatus,
        resposta,
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



/* =================ACEITANDO CHAMADO COMO SUPORTE==================== */

app.put('/aceitarchamado/:id', async (req, res) => {
  const { id } = req.params;
  const { status, email_suporte } = req.body;
  const connection = await connect();
  const suporteQuery = await connection.execute('SELECT nome, cpf FROM suporte WHERE email = ?', [email_suporte]);
  const [suporteData] = suporteQuery[0]
  const {nome, cpf} = suporteData

  try {
    

    await connection.execute('UPDATE chamado SET nome_suporte = ?, status = ?, email_suporte = ? WHERE id = ?', [nome, status, email_suporte, id]);


    const [updatedChamado] = await connection.execute('SELECT id, prioridade, tempoderesposta, datacriacao, dataatualizacao FROM chamado WHERE id = ?', [id]);

    res.json({
      chamado: updatedChamado[0],
      message: 'Chamado atualizado com sucesso',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao atualizar o chamado');
  }finally{
    connection.end();
  }
});


app.put('/responderchamado/:id', async (req, res) => {
  const { id } = req.params;
  const { status, resposta } = req.body;
  const connection = await connect();
  try {
 

    await connection.execute('UPDATE chamado SET status = ?, resposta = ? WHERE id = ?', [status, resposta, id]);


    const [updatedChamado] = await connection.execute('SELECT id, prioridade, tempoderesposta, datacriacao, dataatualizacao FROM chamado WHERE id = ?', [id]);

    res.json({
      chamado: updatedChamado[0],
      message: 'Chamado atualizado com sucesso',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao atualizar o chamado');
  }finally{
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

  const [rows] = await connection.execute('SELECT cpf FROM suporte WHERE cpf = ?' , [cpf]);
  if (rows.length > 0){
    return res.status(400).json({error: 'CPF já cadastrado'})
  }
  const [rows2] = await connection.execute('SELECT email FROM suporte WHERE email = ?', [email]);
  if(rows2.length > 0){
    return res.status(400).json({error: 'email já cadastrado'})
  }
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

  const [rows] = await connection.execute('SELECT cpf FROM ADM WHERE cpf = ?' , [cpf]);
  if (rows.length > 0){
    return res.status(400).json({error: 'CPF já cadastrado'})
  }
  const [rows2] = await connection.execute('SELECT email FROM ADM WHERE email = ?', [email]);
  if(rows2.length > 0){
    return res.status(400).json({error: 'email já cadastrado'})
  }

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
  const [rows] = await connection.execute('SELECT cpf FROM cliente WHERE cpf = ?' , [cpf]);
  if (rows.length > 0){
    return res.status(400).json({error: 'CPF já cadastrado'})
  }
  const [rows2] = await connection.execute('SELECT email FROM cliente WHERE email = ?', [email]);
  if(rows2.length > 0){
    return res.status(400).json({error: 'email já cadastrado'})
  }

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

/* Registro de FAQ */

app.get('/registroFaq', async (req, res) => {
  const connection = await connect();
  const[rows] = await connection.execute('SELECT id FROM topicos')
  connection.end();

  res.json(rows)
})

app.post('/registroFaq', async(req, res) => {
  const {id, titulo, descricao} = req.body;

  const connection = await connect();
  await connection.execute('INSERT INTO topicos(id, titulo, descricao) VALUES (?, ?, ?)', [id, titulo, descricao]);

  res.json({message: 'Registro feito com sucesso'});
})

app.delete('/registroFaq/:id', async (req, res) => {
  const { id } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM topicos WHERE id = ?', [id]);
  connection.end();

  res.json({ message: 'Equipamento excluído com sucesso' });
});

/* ================================================ */
/* Login */
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const connection = await connect();

  try {
    let [rows] = await connection.execute('SELECT * FROM ADM WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email, privilegio: rows[0].privilegio }, 'segredo_do_jwt');
      return res.json({ usuario: { ...rows[0], privilegio: rows[0].privilegio }, token });
    }

    [rows] = await connection.execute('SELECT * FROM cliente WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email, privilegio: rows[0].privilegio }, 'segredo_do_jwt');
      return res.json({ usuario: { ...rows[0], privilegio: rows[0].privilegio }, token });
    }

    [rows] = await connection.execute('SELECT * FROM suporte WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      const token = jwt.sign({ email, privilegio: rows[0].privilegio }, 'segredo_do_jwt');
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


/* ===================================================== */
/* SLA */
app.get('/sla', async (req, res) => {
  const connection = await connect();
  const[rows] = await connection.execute('SELECT id, area, prioridade, tempoderesposta, TempoResolucao FROM chamado WHERE estado = ?', ['aberto'])
  connection.end();

  res.json(rows)
})


/* Não é usado, mas deixe aqui! */
app.post('/sla', async(req, res) => {
  const {area, prioridade, TempoResposta, TempoResolucao} = req.body;

  const connection = await connect();
  await connection.execute('INSERT INTO sla(area, prioridade, TempoResposta, TempoResolucao) VALUES (?, ?, ?, ?)', [area, prioridade, TempoResposta, TempoResolucao]);

  res.json({message: 'Envio de dados feito com sucesso'})
})

app.put('/sla/:id', async (req, res) => {
  const { area, prioridade, tempoderesposta, TempoResolucao } = req.body;
  const id = req.params.id;

  const connection = await connect();
  await connection.execute(
      'UPDATE chamado SET area = ?, prioridade = ?, tempoderesposta = ?, TempoResolucao = ? WHERE id = ?',
      [area, prioridade, tempoderesposta, TempoResolucao, id]
  );

  const [updateRow] = await connection.execute ('SELECT * FROM chamado WHERE id = ?', [id]);
  res.json(updateRow[0])
});

app.get('/chamados/abertos', async(req, res) =>{
  const connection = await connect()
  const[rows] = await connection.execute('SELECT id, titulo, area, prioridade, tempoderesposta, TempoResolucao FROM chamado WHERE estado = ?', ['aberto'])
  res.json(rows)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
