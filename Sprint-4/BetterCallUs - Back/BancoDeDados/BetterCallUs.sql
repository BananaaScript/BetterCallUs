CREATE DATABASE IF NOT EXISTS BetterCallUs;
USE BetterCallUs;

CREATE TABLE IF NOT EXISTS Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    nivel_prioridade INT NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    rg VARCHAR(20) NOT NULL,
    nome_social VARCHAR(50),
    UNIQUE KEY uq_cpf_rg (cpf, rg)
);

CREATE TABLE IF NOT EXISTS ADM (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    departamento VARCHAR(50) NOT NULL,
    nivel_prioridade INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Suporte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    nivel_prioridade INT NOT NULL
);

CREATE TABLE Login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Cliente(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES ADM(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Suporte(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS Ticket (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    suporte_id INT,
    adm_id INT,
    assunto VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    prioridade INT NOT NULL,
    area_problema VARCHAR(100) NOT NULL,
    status ENUM('Aberto', 'Em Andamento', 'Finalizado') NOT NULL,
    data_envio DATETIME NOT NULL,
    data_finalizacao DATETIME,
    historico TEXT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    FOREIGN KEY (suporte_id) REFERENCES Suporte(id),
    FOREIGN KEY (adm_id) REFERENCES ADM(id)
);

CREATE TABLE IF NOT EXISTS SLA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id INT,
    tempo_resposta INT NOT NULL,
    prioridade INT NOT NULL,
    categoria_problema VARCHAR(50) NOT NULL,
    FOREIGN KEY (ticket_id) REFERENCES Ticket(id)
);

CREATE TABLE IF NOT EXISTS Problemas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (categoria) REFERENCES CategoriasProblemas(nome)
);

CREATE TABLE Respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    problema_id INT,
    resposta_texto TEXT NOT NULL,
    contador_respostas INT NOT NULL,
    FOREIGN KEY (problema_id) REFERENCES Problemas(id)
);

CREATE TABLE IF NOT EXISTS CategoriasProblemas (
    nome VARCHAR(100) PRIMARY KEY
);

