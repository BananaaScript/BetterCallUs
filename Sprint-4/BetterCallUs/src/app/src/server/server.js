const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'adm123',
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
    const {nome, cpf, senha, privilegio, email} = req.body;
    
    const connection = await connect();
    await connection.execute('INSERT INTO suporte (nome, cpf, senha, privilegio, email) VALUES(?, ?, ?, ?, ?)', [nome, cpf, senha, privilegio, email]);

    res.json({message: 'Registro feito com sucesso'});
})


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
    const {nome, descricao} = req.body;

    const connection = await connect();
    await connection.execute('INSERT INTO equipamentos(nome, descricao) VALUES (?, ?)', [nome, descricao]);

    res.json({message: 'Registro feito com sucesso'});
})

app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})
