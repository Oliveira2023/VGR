var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET veiculos. */
router.get('/veiculos', function(req, res, next) {
  res.render('veiculos', { title: 'Veículos' });
});
/* GET veiculo Selecionado. */
router.get('/veiculoSelecionado', function(req, res, next) {
  res.render('veiculoSelecionado', { title: 'Veiculo Selecionado' });
});
/* GET localização. */
router.get('/localizacao', function(req, res, next) {
  res.render('localizacao', { title: 'Localização' });
});
/* GET Contato. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});
module.exports = router;
