/*
* Módulo de conexão com o banco de dados mysql.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var mysql = require('mysql');

var conexao = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'treinamento'
});

conexao.connect();

module.exports = conexao;