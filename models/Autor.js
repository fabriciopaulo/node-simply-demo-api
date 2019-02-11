/*
* Arquivo de DAO model Autor.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var db = require('../db');

var Autor = {
	add: (req,res) =>{
		var nome = req.body.nome;
		var sobrenome = req.body.sobrenome;
		var id_usuario = req.body.id_usuario;
		
		db.query("INSERT INTO autor (nome,sobrenome,id_usuario) values (?,?,?)",[nome,sobrenome,id_usuario],(err,result) =>{
			if(err){
				if(err.errno == 1062){
					res.status(400).json({message:"Autor ja cadastrado"});
				}else{
					throw err;
				}
			}else{
				res.json({message:'ok',id:result.insertId});
			}
		});
	},
	getAll: (req,res) =>{
		db.query("SELECT * FROM autor",[],(err,result) => {
			res.json({message:'ok',data:JSON.parse(JSON.stringify(result))});
		});
	},
	get: (req,res) => {
		db.query("SELECT * FROM autor WHERE id = ?",[req.params.id],(err,result) => {
			res.json({message:'ok',data:JSON.parse(JSON.stringify(result))});
		});
	},
	remove: (req,res) => {
		db.query("DELETE FROM autor where id = ?",[req.params.id],(err, result) =>{
			res.json({message:'ok'});
		});
	}
}

module.exports = Autor;
