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
    database:'testecadastro'
}

async function connect(){
    const connection = await mysql.createConnection(dbConfig);
    return connection;
}

app.get('/registros', async (req, res) => {
    const connection = await connect();
    const[rows] = await connection.execute('SELECT * FROM cadastro')
    connection.end();

    res.json(rows)
})

app.post('/registros', async(req, res) => {
    const {nome, cpf, senha, privilegio} = req.body;

    const connection = await connect();
    await connection.execute('INSERT INTO cadastro (nome, cpf, senha, privilegio) VALUES (?, ?, ?, ?)', [nome, cpf, senha, privilegio]);

    res.json({message: 'Registro feito com sucesso'});
})
app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})