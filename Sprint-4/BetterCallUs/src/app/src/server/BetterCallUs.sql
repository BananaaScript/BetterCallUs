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
    chamados int,
    chamadosRespondidos int,
    UNIQUE KEY uq_cpf_rg (cpf)
);

CREATE TABLE chamado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    area VARCHAR(255),
    titulo VARCHAR(50),
    estado VARCHAR(10) DEFAULT 'aberto',
    sumario TEXT,
    equipamento VARCHAR(100) DEFAULT 'nenhum',
    status ENUM('Em aguardo', 'Em andamento', 'Finalizado'),
    datacriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataatualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    prioridade VARCHAR(255),
    tempoderesposta INT,
    nome_equipamento VARCHAR(50),
    id_cliente INT,
    id_suporte INT,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id),
    FOREIGN KEY (id_suporte) REFERENCES suporte(id)
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

CREATE TABLE IF NOT EXISTS equipamentos(
	id INT auto_increment primary key,
    numeroSerie varchar(10),
    nome varchar(50),
    descricao varchar(100),
    unique key nSerie (numeroSerie)
);

INSERT INTO ADM (`nome`, `cpf`, `senha`, `privilegio`, `email`, `departamento`) 
VALUES ('Adm', '11111111111', 'adm123', 2, 'adm@gmail.com', 'sim');
INSERT INTO suporte(nome, cpf, senha, privilegio, email, chamados, chamadosRespondidos) values('Suporte', '12345678910', 'suporte123', 1, 'suporte@gmail.com', 0, 0);

INSERT INTO equipamentos (numeroSerie, nome, descricao) VALUES
('ABC123', 'Computador', 'Desktop Modelo Lenovo'),
('DEF456', 'Switch', 'Modelo da cisco'),
('GHI789', 'Notebook', 'Modelo vision'),
('JKL012', 'Televisão', 'Modelo samsung'),
('MNO345', 'Acess Point', 'Modelo da intelbras');

select * from cliente;
select * from suporte;
select * from ADM;
select * from equipamentos;
