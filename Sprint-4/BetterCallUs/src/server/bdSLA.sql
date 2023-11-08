create database teste;
use teste;

CREATE TABLE chamado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prioridade VARCHAR(10),
    area VARCHAR(255),
    tempoderesposta INT
);
