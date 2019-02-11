/*
* Arquivo de rotas do resource categoria.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var express = require('express');
var router = express.Router();
var Categoria = require('../models/Categoria');

router.post('/', Categoria.add);
router.get('/', Categoria.getAll);
router.get('/:id', Categoria.get);
router.delete('/:id', Categoria.remove);

module.exports = router;
