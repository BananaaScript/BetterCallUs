CREATE DATABASE novoteste;
USE novoteste;

CREATE TABLE chamado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    area VARCHAR(255),
    titulo VARCHAR(50),
    estado VARCHAR(10) DEFAULT 'aberto',
    sumario TEXT,
    status ENUM('Em aguardo', 'Em andamento', 'Finalizado'),
    datacriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataatualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    prioridade VARCHAR(255),
    tempoderesposta INT
);