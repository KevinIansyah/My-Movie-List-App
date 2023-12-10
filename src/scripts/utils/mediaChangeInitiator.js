import { createMediaBackdrop, createMediaPoster, createMediaVideo } from "../views/templates/createMovieTemplates";

const MediaChangeInitiator = {
  init({ buttonVideo, buttonBackdrop, buttonPoster, videoContainer, backdropContainer, posterContainer, mediaNotFound, videoTrailer, mediaImages }) {
    buttonVideo.addEventListener('click', (event) => {
      this._renderVideos(event, buttonVideo, buttonBackdrop, buttonPoster, videoContainer, backdropContainer, posterContainer, mediaNotFound, videoTrailer);
    });

    buttonBackdrop.addEventListener('click', (event) => {
      this._renderBackdrops(event, buttonVideo, buttonBackdrop, buttonPoster, videoContainer, backdropContainer, posterContainer, mediaNotFound, mediaImages);
    });

    buttonPoster.addEventListener('click', (event) => {
      this._renderPosters(event, buttonVideo, buttonBackdrop, buttonPoster, videoContainer, backdropContainer, posterContainer, mediaNotFound, mediaImages);
    });
  },

  _renderVideos(event, buttonVideo, buttonBackdrop, buttonPoster, videoContainer, backdropContainer, posterContainer, mediaNotFound, videoTrailer) {
    event.stopPropagation();

    if (buttonBackdrop.classList.contains('active')) {
      buttonBackdrop.classList.remove('active');
    }

    if (buttonPoster.classList.contains('active')) {
      buttonPoster.classList.remove('active');
    }

    buttonVideo.classList.add('active');

    videoContainer.innerHTML = '';
    backdropContainer.innerHTML = '';
    posterContainer.innerHTML = '';
    mediaNotFound.innerHTML = '';

    if (videoTrailer.length > 0) {
      videoTrailer.forEach((video) => {
        videoContainer.innerHTML += createMediaVideo(video);
      });
    } else {
      mediaNotFound.innerHTML = '<p class="text-light fst-italic">Media videos not found.</p>';
    }
  },

  _renderBackdrops(event, buttonVideo, buttonBackdrop, buttonPoster, videoContainer, backdropContainer, posterContainer, mediaNotFound, mediaImages) {
    event.stopPropagation();

    if (buttonVideo.classList.contains('active')) {
      buttonVideo.classList.remove('active');
    }

    if (buttonPoster.classList.contains('active')) {
      buttonPoster.classList.remove('active');
    }

    buttonBackdrop.classList.add('active');

    videoContainer.innerHTML = '';
    backdropContainer.innerHTML = '';
    posterContainer.innerHTML = '';
    mediaNotFound.innerHTML = '';

    if (mediaImages.backdrops.length > 0) {
        mediaImages.backdrops.forEach((backdrop) => {
        backdropContainer.innerHTML += createMediaBackdrop(backdrop);
      });
    } else {
      mediaNotFound.innerHTML = '<p class="text-light fst-italic">Media backdrops not found.</p>';
    }
  },

  _renderPosters(event, buttonVideo, buttonBackdrop, buttonPoster, videoContainer, backdropContainer, posterContainer, mediaNotFound, mediaImages) {
    event.stopPropagation();

    if (buttonBackdrop.classList.contains('active')) {
      buttonBackdrop.classList.remove('active');
    }

    if (buttonVideo.classList.contains('active')) {
      buttonVideo.classList.remove('active');
    }

    buttonPoster.classList.add('active');

    videoContainer.innerHTML = '';
    backdropContainer.innerHTML = '';
    posterContainer.innerHTML = '';
    mediaNotFound.innerHTML = '';

    if (mediaImages.posters.length > 0) {
        mediaImages.posters.forEach((poster) => {
        posterContainer.innerHTML += createMediaPoster(poster);
      });
    } else {
      mediaNotFound.innerHTML = '<p class="text-light fst-italic">Media posters not found.</p>';
    }
  },
};

export default MediaChangeInitiator;