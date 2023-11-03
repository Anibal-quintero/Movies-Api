const Actors = require("./Actors");
const Directors = require("./Directors");
const Genres = require("./Genres");
const Movies = require("./Movies");

// Relaciones muchos a muchos

// una película puede tener muchos actores, muchos directores y ser de muchos géneros.

// Relacion entre Movies y Actors
Movies.belongsToMany(Actors, { through: 'MovieActors'} );
Actors.belongsToMany(Movies, { through: 'MovieActors'} );

// Relacion entre Movies y Directors
Movies.belongsToMany(Directors, { through: 'MoviesDirectors'} );
Directors.belongsToMany(Movies, { through: 'MoviesDirectors'} );

// Relacion entre Movies y Genres
Movies.belongsToMany(Genres, { through: 'MovieGenres'} );
Genres.belongsToMany(Movies, { through: 'MovieGenres'} );