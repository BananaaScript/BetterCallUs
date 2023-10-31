import express from "express";
import mysql, { Pool } from "mysql";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const port = 3001;
const app = express();
const pool: Pool = mysql.createPool({
    host: 'localhost', // Altere para a configuração correta do seu banco de dados
    database: 'sqltestedb', // Altere para o nome correto do seu banco de dados
    user: 'sqltestador', // Altere para o usuário correto do seu banco de dados
    password: 'meusegredo1', // Altere para a senha correta do seu banco de dados
    connectionLimit: 10,
});

app.use(cors());
app.use(express.json());

app.post('/ticket', (req, res) => {
    const ticket = req.body;
    pool.query("insert into ticket (sumario, prioridade, status) value (?, ?, ?)", [ticket.sumario, ticket.prioridade, ticket.status], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.status(500).send("erro na consulta sql");
            return;
        }

        res.status(201).send({...ticket, id: result.insertId});
    });
});

app.put('/ticket/:id', (req, res) => {
    const id = req.params.id;
    const ticket = req.body;
    pool.query('update ticket set ? where id = ?', [ticket, id], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.status(500).send("erro na consulta sql");
            return;
        }

        res.status(200).send(ticket);
    });
});

app.delete('/ticket/:id', (req, res) => {
    const id = req.params.id;
    pool.query('delete from ticket where id = ?', [id], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.status(500).send("erro na consulta sql");
            return;
        }

        res.status(204).send("sucesso");
    });
});

app.get('/all', (req, res) => {
    pool.query('select * from ticket', (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.status(500).send("erro na consulta sql");
            return;
        }

        res.status(200).send(result);
    });
});

app.get('/ticket/:id', (req, res) => {
    const id = req.params.id;
    pool.query('select * from ticket where id = ?', [id], (error, result) => {
        if (error) {
            console.error("erro na consulta sql", error);
            res.status(500).send("erro na consulta sql");
            return;
        }

        res.status(200).send(result);
    });
});

app.listen(port, () => {
    console.log(`servidor aberto na porta ${port}`);
});
