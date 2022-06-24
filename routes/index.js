const express = require('express');
const router = express.Router();
const Movie=require('../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs')); // prueba .hbs, si peta borrar extension
//prueba link
router.get("/movies", (req, res) => {
    Movie
    .find()
    .then(moviesFromApi => {
        console.log(moviesFromApi)
      res.render("movies.hbs",{ moviesFromApi });
    })
    .catch(error => console.log(error));
  });
  
module.exports = router;
