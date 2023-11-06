create database sqltestedb;

use sqltestedb;

create table test (id bigint not null auto_increment, nome varchar(255), descricao varchar(255), primary key (id));

create user 'sqltestador'@'localhost' identified by 'meusegredo1';

SELECT user FROM mysql.user WHERE user = 'sqltestador';

ALTER USER 'sqltestador'@'localhost' IDENTIFIED BY 'meusegredo1';

grant select on sqltestedb.test to 'sqltestador'@'localhost';

flush privileges;

insert into test (nome, descricao) values ('teste 1', 'isso e um teste inicial');

create table ticket (id bigint not null auto_increment, sumario text not null, prioridade varchar(255) not null default 'BAIXA', status varchar(255) not null default 'CRIADO', dataDeCriacao timestamp default current_timestamp, dataDeAtualizacao timestamp default current_timestamp, primary key (id));

grant select, update, insert, delete on sqltestedb.* to 'sqltestador'@'localhost';

