var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
// /* GET veiculos. */
// router.get('/veiculos', function(req, res, next) {
//   res.render('veiculos', { title: 'Veículos' });
// });
/* GET veiculos. */
// router.get('/veiculoSelecionado', function(req, res, next) {
//   res.render('veiculoSelecionado', { title: 'Veículos' });
// });

module.exports = router;
