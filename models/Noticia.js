/*
* Arquivo de DAO model Noticia.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var db = require('../db');

var Noticia = {
	add: (req,res) =>{
		var titulo = req.body.titulo;
		var subtitulo = req.body.subtitulo;
		var id_autor = req.body.id_autor;
		var id_categoria = req.body.id_categoria;
		
		db.query("INSERT INTO noticia (titulo,subtitulo,id_autor,id_categoria) values (?,?,?,?)",[titulo,subtitulo,id_autor,id_categoria],(err,result) => {
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
	getAll: (req,res) =>{
		db.query("SELECT * FROM noticia",[],(err,result) => {
			res.json({message:'ok',data:JSON.parse(JSON.stringify(result))});
		});
	},
	get: (req,res) => {
		db.query("SELECT * FROM noticia WHERE id = ?",[req.params.id],(err,result) => {
			res.json({message:'ok',data:JSON.parse(JSON.stringify(result))});
		});
	},
	update: (req, res) => {
		var titulo = req.body.titulo;
		var subtitulo = req.body.subtitulo;
		var id_autor = req.body.id_autor;
		var id_categoria = req.body.id_categoria;
		
		var sql = db.query("UPDATE noticia set titulo = ?, subtitulo = ?, id_autor = ?, id_categoria = ? WHERE id = ?",[titulo,subtitulo,id_autor,id_categoria,req.params.id],(err,result) => {
			res.json({message:'ok'});
		});
	},
	remove: (req,res) => {
		db.query("DELETE FROM noticia where id = ?",[req.params.id],(err, result) => {
			res.json({message:'ok'});
		});
	}
}

module.exports = Noticia;
