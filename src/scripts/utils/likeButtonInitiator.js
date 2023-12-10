import FavoriteMovieIdb from '../data/favoriteMovie';
import { createLikeMovieButtonTemplate, createUnlikeMovieButtonTemplate } from '../views/templates/createMovieTemplates';
// import { createNotification } from './notification-initiator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const restaurant = await FavoriteMovieIdb.getMovie(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeMovieButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.putMovie(this._movie);
      this._renderButton();
    //   createNotification('success', `Added ${this._restaurant.name} to Favorites`);
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeMovieButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.deleteMovie(this._movie.id);
      this._renderButton();
    //   createNotification('success', `Removed ${this._restaurant.name} from Favorites`);
    });
  },
};

export default LikeButtonInitiator;
