/*
* Arquivo de rotas do resource autor.
*
* @auhtor: Fabricio Paulo
* @version 1.0
*/
var express = require('express');
var router = express.Router();
var Autor = require('../models/Autor');

router.post('/', Autor.add);
router.get('/', Autor.getAll);
router.get('/:id', Autor.get);
router.delete('/:id', Autor.remove);

module.exports = router;
