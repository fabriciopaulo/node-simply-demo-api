/*
* Arquivo de rotas do resource usuario.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario');

router.post('/login', Usuario.login);
router.post('/', Usuario.add);
router.delete('/:id', Usuario.remove);

/*
OBS: Forma prolixa >
router.delete('/:id', function(req,res,next){
	Usuario.remove(req,res);
});*/

module.exports = router;
