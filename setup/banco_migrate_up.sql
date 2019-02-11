CREATE DATABASE treinamento;
CREATE TABLE usuario(
	id int NOT NULL PRIMARY KEY auto_increment,
	nome_usuario varchar(100) NOT NULL UNIQUE,
	senha varchar(32) NOT NULL
);
CREATE TABLE autor(
	id int NOT NULL PRIMARY KEY auto_increment,
	nome varchar(60) NOT NULL,
	sobrenome varchar(100) NOT NULL,
	id_usuario int NOT NULL UNIQUE,
	CONSTRAINT fk_autor_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);
CREATE TABLE categoria(
	id int NOT NULL PRIMARY KEY auto_increment,
	descricao varchar(100) NOT null UNIQUE
);
CREATE TABLE noticia(
	id int NOT NULL PRIMARY KEY auto_increment,
	titulo varchar(100) NOT NULL,
	subtitulo varchar(200) NOT NULL,
	data_criacao timestamp NOT NULL DEFAULT current_timestamp,
	id_autor int NOT NULL,
	id_categoria int NOT NULL,
	CONSTRAINT fk_noticia_categoria FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);