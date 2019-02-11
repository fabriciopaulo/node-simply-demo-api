/*
* Arquivo de DAO model Usuario.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var db = require('../db');

var Usuario = {
	login: (req,res) =>{
		var nome_usuario = req.body.nome_usuario;
		var senha = req.body.senha;
	
		db.query('Select id from usuario where nome_usuario = ? and senha = ?',[nome_usuario,senha],(err,row,fields) =>{
			res.json({message:'ok',id:row[0].id});
		});
	},
	add: (req,res) =>{
		var nome_usuario = req.body.nome_usuario;
		var senha = req.body.senha;
		
		db.query("INSERT INTO usuario (nome_usuario,senha) values (?,?)",[nome_usuario,senha],(err,result) =>{
				if(err){
					if(err.errno == 1062){
						res.status(400).json({message:"Usuário já cadastrado"});
					}else{
						throw err;
					}
				}else{
					res.json({message:'ok',id:result.insertId});
				}
		});
	},
	remove: (req,res) => {
		db.query("DELETE FROM usuario where id = ?",[req.params.id],(err, result) => {
			res.json({message:'ok'});
		});
	}
}

module.exports = Usuario;
