const { getAll, create, getOne, remove, update, setMoviesGenres, setMoviesActors, setMoviesDirectors } = require('../controllers/movies.controllers');
const express = require('express');

const moviesRouter = express.Router();

moviesRouter.route('/')
    .get(getAll)
    .post(create);

moviesRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

// Ruta genres id para modificar los géneros de una película
moviesRouter.route('/:id/genres')
    .post(setMoviesGenres)

// Ruta actors id para modificar el actor de una película
moviesRouter.route('/:id/actors')
    .post(setMoviesActors)

// Ruta directors id para modificar el director de una película
moviesRouter.route('/:id/directors')
    .post(setMoviesDirectors)

module.exports = moviesRouter;