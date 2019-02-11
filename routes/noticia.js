/*
* Arquivo de rotas do resource noticia.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var express = require('express');
var router = express.Router();
var Noticia = require('../models/Noticia');

router.post('/', Noticia.add);
router.get('/', Noticia.getAll);
router.get('/:id', Noticia.get);
router.put('/:id', Noticia.update);
router.delete('/:id', Noticia.remove);

module.exports = router;
