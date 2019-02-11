/*
* Arquivo de DAO model Categoria.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var db = require('../db');

var Categoria = {
	add: (req,res) =>{
		var descricao = req.body.descricao;
	
		db.query("INSERT INTO categoria (descricao) values (?)",[descricao],(err,result) => {
			if(err){
				if(err.errno == 1062){
					res.status(400).json({message:"Categoria já cadastrada"});
				}else{
					throw err;
				}
			}else{
				res.json({message:'ok',id:result.insertId});
			}
		});
	},
	getAll: (req,res) =>{
		db.query("SELECT * FROM categoria",[],(err,result) => {
			res.json({message:'ok',data:JSON.parse(JSON.stringify(result))});
		});
	},
	get: (req,res) => {
		db.query("SELECT * FROM categoria WHERE id = ?",[req.params.id],(err,result) => {
			res.json({message:'ok',data:JSON.parse(JSON.stringify(result))});
		});
	},
	remove: (req,res) => {
		db.query("DELETE FROM categoria where id = ?",[req.params.id],(err, result) =>{
			res.json({message:'ok'});
		});
	}
}

module.exports = Categoria;
