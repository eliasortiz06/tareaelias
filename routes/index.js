var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");

/* GET home page. */
router.get('/', function(req, res, next) { 
  const pelicula = datos.getAllPosts();
  res.render('home', {head_title: "Principal", pelicula: pelicula});
});

router.get('/detalle', function(req, res, next) { 
  res.render('detalle', {head_title: "Detalle"});
});

router.get('/detalle/:id', (req, res) => {
  const peliculaId = parseInt(req.params.id); 
  const pelicula = datos.getPostById(peliculaId); 
  
  if (pelicula) {
      res.render('detalle', { pelicula }); 
  }
});


module.exports = router;
