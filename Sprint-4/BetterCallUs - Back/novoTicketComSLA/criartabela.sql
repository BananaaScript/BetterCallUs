CREATE DATABASE novoteste;
USE novoteste;

CREATE TABLE chamado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prioridade VARCHAR(10),
    area VARCHAR(255),
    titulo VARCHAR(50),
    sumario TEXT,
    status ENUM('Em aguardo', 'Em andamento', 'Finalizado'),
    tempoderesposta INT,
    datacriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataatualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
