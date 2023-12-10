import FavoriteMovieIdb from '../../data/favoriteMovie';
import { hideLoader } from '../../utils/loader-initiator';
import { createCardSearch } from '../templates/createMovieTemplates';

const Favorite = {
  async render() {
    return `
      <div class="container d-flex align-items-center gap-3 mb-4 mt-5">
        <button id="button-back" type="button" class="btn d-flex align-items-center text-light p-0" onclick="window.history.back()">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
            </svg>
        </button>
        <h2 class="text-light fw-bold m-0">Favorite Movies</h2>
      </div>
      <div class="container">
        <div id="resultFavorite" class="row"></div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const favoriteContainer = document.getElementById('resultFavorite');
    if (movies.length > 0 ) {
      movies.forEach((movie) => {
        favoriteContainer.innerHTML += createCardSearch(movie);
      })
    } else {
      favoriteContainer.innerHTML = '<p class="text-light fst-italic">There are no movie added to favorites yet.</p>'
    }

    hideLoader();
  },
};

export default Favorite;
