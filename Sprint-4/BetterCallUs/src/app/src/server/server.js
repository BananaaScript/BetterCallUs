const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database:'bettercallus'
}

async function connect(){
    const connection = await mysql.createConnection(dbConfig);
    return connection;
}

/* Registro suporte */

app.get('/registroSup', async(req, res) => {
    const connection = await connect();
    const[rows] = await connection.execute('SELECT * FROM suporte')
    connection.end();

    res.json(rows)
})

app.post('/registroSup', async(req, res) => {
    const {nome, cpf, senha, privilegio, email, chamados} = req.body;
    
    const connection = await connect();
    await connection.execute('INSERT INTO suporte (nome, cpf, senha, privilegio, email, chamados) VALUES(?, ?, ?, ?, ?, ?)', [nome, cpf, senha, privilegio, email, chamados]);

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


app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})
