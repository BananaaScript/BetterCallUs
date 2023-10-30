const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require('dotenv').config();

const port = 3001
const app = express();
const pool = mysql.createPool({
    host: "localhost",
    database: "sqltestedb",
    user: "sqltestador",
    password: "meusegredo1",
    connectionLimit: 10,
});

app.use(cors());
app.use(express.json());

app.post('/ticket', (req, res) => {
    const ticket = req.body
    pool.query("insert into ticket (sumario, prioridade, status) value (?, ?, ?)", [ticket.sumario, ticket.prioridade, ticket.status], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.send("erro na consulta sql", error);
            return;
        }

        res.send({...ticket, id: result.insertId});        
    })
})

app.put('/ticket/:id', (req, res) => {
    const id = req.params.id;
    const ticket = req.body;
    pool.query('update ticket set ? where id = ?', [ticket, id], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.send("erro na consulta sql", error);
            return;
        }

        res.send(ticket);
    })
})

app.delete('/ticket/:id', (req, res) => {
    const id = req.params.id;
    pool.query('delete from ticket where id = ?', [id], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.send("erro na consulta sql", error);
            return;
        }

        res.send("sucesso");
    })
})

app.get('/all', (req, res) => {
    pool.query('select * from ticket', (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.send("erro na consulta sql", error);
            return;
        }

        res.send(result);
    })
})

app.get('/ticket/:id', (req, res) => {
    const id = req.params.id;
    pool.query('select * from ticket where id = ?', [id], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.send("erro na consulta sql", error);
            return;
        }

        res.send(result);
    })
})

app.listen(port, () => {console.log(`servidor aberto na porta ${port}`)
})