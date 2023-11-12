CREATE DATABASE IF NOT EXISTS bettercallus;
USE bettercallus;

CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    privilegio int
);

CREATE TABLE IF NOT EXISTS ADM (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf varchar(11) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    privilegio int
);

CREATE TABLE IF NOT EXISTS suporte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf varchar(11) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    privilegio int NOT NULL
);

CREATE TABLE IF NOT EXISTS Login (
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

CREATE TABLE IF NOT EXISTS CategoriasProblemas (
    nome VARCHAR(100) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS cadastro(
	id INT auto_increment primary key,
	nome VARCHAR(50),
    cpf VARCHAR(11),
    senha varchar(50),
    privilegio int
);

CREATE TABLE IF NOT EXISTS Problemas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (categoria) REFERENCES CategoriasProblemas(nome)
);

CREATE TABLE IF NOT EXISTS Respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    problema_id INT,
    resposta_texto TEXT NOT NULL,
    contador_respostas INT NOT NULL,
    FOREIGN KEY (problema_id) REFERENCES Problemas(id)
);


select * from cliente;
select * from suporte;
select * from ADM;
