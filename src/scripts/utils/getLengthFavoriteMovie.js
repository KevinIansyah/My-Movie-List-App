import FavoriteMovieIdb from '../data/favoriteMovie';

const getLengthFavoriteMovie = async () => {
  const movie = await FavoriteMovieIdb.getAllMovies();

  return movie.length;
};

export default getLengthFavoriteMovie;
