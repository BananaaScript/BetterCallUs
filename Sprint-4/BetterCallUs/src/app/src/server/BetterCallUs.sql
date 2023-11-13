CREATE DATABASE IF NOT EXISTS bettercallus;
USE bettercallus;

CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cpf VARCHAR(11),
    senha VARCHAR(100),
    privilegio int,
    email VARCHAR(50),
    telefone VARCHAR(20),
    nomeSocial VARCHAR(50),
    UNIQUE KEY uq_cpf_rg (cpf)
);

CREATE TABLE IF NOT EXISTS ADM (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cpf varchar(11),
    senha VARCHAR(100),
    privilegio int,
    email varchar(30),
    departamento VARCHAR(50),
    UNIQUE KEY uq_cpf_rg (cpf)
);

CREATE TABLE IF NOT EXISTS suporte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cpf varchar(11),
    senha VARCHAR(100),
    privilegio int,
    email varchar(30),
    UNIQUE KEY uq_cpf_rg (cpf)
);

CREATE TABLE IF NOT EXISTS Login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE,
    senha VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Cliente(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES ADM(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Suporte(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS Ticket (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    suporte_id INT,
    adm_id INT,
    assunto VARCHAR(100),
    descricao TEXT,
    prioridade INT,
    area_problema VARCHAR(100),
    status ENUM('Aberto', 'Em Andamento', 'Finalizado'),
    data_envio DATETIME,
    data_finalizacao DATETIME,
    historico TEXT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    FOREIGN KEY (suporte_id) REFERENCES Suporte(id),
    FOREIGN KEY (adm_id) REFERENCES ADM(id)
);

CREATE TABLE IF NOT EXISTS SLA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id INT,
    tempo_resposta INT,
    prioridade INT,
    categoria_problema VARCHAR(50),
    FOREIGN KEY (ticket_id) REFERENCES Ticket(id)
);

CREATE TABLE IF NOT EXISTS CategoriasProblemas (
    nome VARCHAR(100) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Problemas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50),
    descricao TEXT,
    FOREIGN KEY (categoria) REFERENCES CategoriasProblemas(nome)
);

CREATE TABLE IF NOT EXISTS Respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    problema_id INT,
    resposta_texto TEXT,
    contador_respostas INT,
    FOREIGN KEY (problema_id) REFERENCES Problemas(id)
);


select * from cliente;
select * from suporte;
select * from ADM;