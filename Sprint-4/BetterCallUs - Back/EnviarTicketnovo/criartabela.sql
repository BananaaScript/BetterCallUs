CREATE DATABASE novoteste;
USE novoteste;

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

CREATE TABLE IF NOT EXISTS suporte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cpf varchar(11),
    senha VARCHAR(100),
    privilegio int,
    email varchar(30),
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

CREATE TABLE IF NOT EXISTS equipamentos(
	id INT auto_increment primary key,
    numeroSerie varchar(10),
    nome varchar(50),
    descricao varchar(100),
    unique key nSerie (numeroSerie)
);


INSERT INTO cliente (id, nome, cpf, senha, privilegio, email, telefone, nomeSocial)
VALUES (1, 'clienteee', '123456789', 'senha123', 1, 'cliente@email.com', '123456789', 'sadsadsadsadsadsa');

INSERT INTO cliente (nome, cpf, senha, privilegio, email, telefone, nomeSocial)
VALUES ('dois', '66666', 'senhahahaha', 1, 'cliente2@email.com', '44444', 'sim');

INSERT INTO equipamentos (numeroSerie, nome, descricao) VALUES
('ABC123', 'Mouse', 'Mouse sem fio'),
('DEF456', 'Teclado', 'Teclado mecânico'),
('GHI789', 'Computador', 'Desktop de última geração'),
('JKL012', 'Monitor', 'Monitor LED de 27 polegadas'),
('MNO345', 'Cabo de Rede', 'Cabo Ethernet de alta velocidade');


select * from equipamentos;
SELECT * FROM chamado WHERE id_cliente = 2;