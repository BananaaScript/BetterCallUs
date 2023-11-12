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
    password: 'fatec',
    database:'bettercallus'
}

async function connect(){
    const connection = await mysql.createConnection(dbConfig);
    return connection;
}

app.get('/registroSup', async(req, res) => {
    const connection = await connect();
    const[rows] = await connection.execute('SELECT * FROM suporte')
    connection.end();

    res.json(rows)
})

app.post('/registroSup', async(req, res) => {
    const {nome, cpf, senha, privilegio} = req.body;
    
    const connection = await connect();
    await connection.execute('INSERT INTO suporte (nome, cpf, senha, privilegio) VALUES(?, ?, ?, ?)', [nome, cpf, senha, privilegio]);

    res.json({message: 'Registro feito com sucesso'});
})

app.get('/registroAdm', async(req, res) => {
    const connection = await connect();
    const[rows] = await connection.execute('SELECT * FROM ADM')
    connection.end();

    res.json(rows)
})

app.post('/registroAdm', async(req, res) => {
    const {nome, cpf, senha, privilegio} = req.body;
    
    const connection = await connect();
    await connection.execute('INSERT INTO ADM (nome, cpf, senha, privilegio) VALUES(?, ?, ?, ?)', [nome, cpf, senha, privilegio]);

    res.json({message: 'Registro feito com sucesso'});
})



app.get('/registroCliente', async (req, res) => {
    const connection = await connect();
    const[rows] = await connection.execute('SELECT * FROM cliente')
    connection.end();

    res.json(rows)
})

app.post('/registroCliente', async(req, res) => {
    const {nome, cpf, senha, privilegio} = req.body;

    const connection = await connect();
    await connection.execute('INSERT INTO cliente(nome, cpf, senha, privilegio) VALUES (?, ?, ?, ?)', [nome, cpf, senha, privilegio]);

    res.json({message: 'Registro feito com sucesso'});
})
app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})