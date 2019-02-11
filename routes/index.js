/*
* Arquivo de rotas do resource principal.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message:'Micro API Treinamento'});
});

module.exports = router;
