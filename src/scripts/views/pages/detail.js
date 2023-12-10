import MovieSource from '../../data/movieSource';
import UrlParser from '../../routes/urlParser';
import {
  createDetailMovies,
  createCardMovies,
  createCreditsMovie,
  createProductionCompanies,
  createProductionCountries,
  createSideContent,
  createIframe,
  createReview,
  createMediaVideo,
} from '../templates/createMovieTemplates';
import { hideLoader } from '../../utils/loader-initiator';
import {
  swiperConfiguration,
  swiperConfigurationCredits,
  swiperConfigurationMediaPoster,
  swiperConfigurationMediaVideos,
} from '../../global/swiperConfiguration';
import LikeButtonInitiator from '../../utils/likeButtonInitiator';
import MediaChangeInitiator from '../../utils/mediaChangeInitiator';
import { fancyBoxCredit, fancyBoxDefault } from '../../global/fancyboxConfig';
// import showTooltip from '../../global/tooltip'; 
// import { Tooltip } from "bootstrap";
// import ModalInitiator from '../../utils/modalInitiator';

const Detail = {
  async render() {
    return `
        <div id="modalMovie" class="modal-box">
          <div class="modal-video">
              <div id="iframeVideo" class="iframe-video"></div>
              <button id="closeVideo" class="btn button btn-info button-modal" aria-label="Tombol untuk menutup detail foto">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
          </div>
        </div>

        <div id="modalReview" class="modal-box">
          <div class="modal-video">
              <div id="boxReview" class="iframe-video"></div>
              <button id="closeReview" class="btn button btn-info button-modal" aria-label="Tombol untuk menutup detail foto">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
          </div>
        </div>

        <div id="detailMovie"></div>

        <div class="container mt-5 mb-5">
          <div class="row gap-3 gap-md-0" style="position: relative">
            <div class="col-12 col-md-9">
              <h4 class="text-light mb-3">Top Billed Cast</h4>
              <div class="swiperCredits" style="width: 100%;">
                <div id="credits" class="swiper-wrapper"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <h4 class="text-light mb-3 mt-4">Production Companies</h4>
              <div class="swiperCredits" style="width: 100%;">
                <div id="companies" class="swiper-wrapper"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <h4 class="text-light mb-2 mt-4">Production Countries</h4>
              <div id="countries"></div>
              <h4 class="text-light mb-2 mt-4">Media</h4>
              <ul class="nav nav-underline mb-4">
                <li class="nav-item">
                  <button id="buttonVideos" class="nav-link active text-light" aria-current="page">Videos</button>
                </li>
                <li class="nav-item">
                  <button id="buttonBackdrops" class="nav-link text-light">Backdrops</button>
                </li>
                <li class="nav-item">
                  <button id="buttonPosters" class="nav-link text-light">Posters</button>
                </li>
              </ul>
              <div class="swiperVideos">
                <div id="containerVideo" class="swiper-wrapper"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <div class="swiperVideos">
                <div id="containerBackdrop" class="swiper-wrapper"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <div class="swiperPoster">
                <div id="containerPoster" class="swiper-wrapper"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <div id="mediaNotFound"></div>
            </div>
            <div id="sideContent" class="col-12 col-md-3"></div>
          </div>
        </div>
    
        <div class="container">
          <h4 class="text-light mb-4 mt-5">REVIEW</h4>
          <div id="reviews" class="d-flex flex-column gap-4 overflow-y-auto" style="max-height: 30rem; height: fit-content;">
          </div>
          <div id="reviewNotFound"></div>
        </div>

        <div class="container">
          <h4 class="text-light mb-4 mt-5">SIMILAR</h4>
          <div class="swiper">
            <div id="similar" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div id="similarNotFound"></div>

          <h4 class="text-light mb-4 mt-5">RECOMENDATION</h4>
          <div class="swiper">
            <div id="recomendation" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div id="recomendationNotFound"></div>
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await MovieSource.detail(url.id);
    const videoTrailer = await MovieSource.video(url.id);

    const detailContainer = document.getElementById('detailMovie');
    detailContainer.innerHTML += createDetailMovies(movie, videoTrailer);

    const videoContainer = document.getElementById('iframeVideo');
    if (videoTrailer.length > 0) {
      videoContainer.innerHTML = createIframe(videoTrailer[0]);

      // ModalInitiator.init({
      //   buttonCloseVideo: document.getElementById('closeVideo'),
      //   buttonTriggerVideo: document.getElementById('playVideo'),
      //   modalVideo: document.getElementById('modalMovie'),
      //   iframeVideo: document.getElementById('iframeVideo'),
      //   videoTrailer,
      // });
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('favoriteButtonBox'),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
      },
    });

    const companiesContainer = document.getElementById('companies');
    movie.production_companies.forEach((company) => {
      companiesContainer.innerHTML += createProductionCompanies(company);
    });

    const countriesContainer = document.getElementById('countries');
    movie.production_countries.forEach((country) => {
      countriesContainer.innerHTML += createProductionCountries(country);
    });

    const credits = await MovieSource.credits(url.id);
    const creditsContainer = document.getElementById('credits');
    credits.forEach((credit) => {
      creditsContainer.innerHTML += createCreditsMovie(credit);
    });

    const mediaContainer = document.getElementById('containerVideo');
    const mediaVideosNotFound = document.getElementById('mediaNotFound');
    if (videoTrailer.length > 0) {
      videoTrailer.forEach((video) => {
        mediaContainer.innerHTML += createMediaVideo(video);
      });
    } else {
      mediaVideosNotFound.innerHTML =
        '<p class="text-light fst-italic">Media videos not found.</p>';
    }

    const mediaImages = await MovieSource.images(url.id);
    console.log(mediaImages);

    MediaChangeInitiator.init({
      buttonVideo: document.getElementById('buttonVideos'),
      buttonBackdrop: document.getElementById('buttonBackdrops'),
      buttonPoster: document.getElementById('buttonPosters'),
      videoContainer: document.getElementById('containerVideo'),
      backdropContainer: document.getElementById('containerBackdrop'),
      posterContainer: document.getElementById('containerPoster'),
      mediaNotFound: document.getElementById('mediaNotFound'),
      videoTrailer,
      mediaImages,
    });

    const keywords = await MovieSource.keywords(url.id);
    const sideContentContainer = document.getElementById('sideContent');
    sideContentContainer.innerHTML += createSideContent(movie, keywords);

    const reviews = await MovieSource.review(url.id);
    const reviewsContainer = document.getElementById('reviews');
    const reviewsNotFound = document.getElementById('reviewNotFound');
    if (reviews.length > 0) {
      reviews.forEach((review) => {
        const cardElement = document.createElement('div');
        cardElement.innerHTML = createReview(review);
        reviewsContainer.appendChild(cardElement);

        const buttonTriggerReview = document.getElementById(
          `showMoreReview${review.id}`
        );
        const contentReview = document.getElementById(
          `contentReview${review.id}`
        );

        buttonTriggerReview.addEventListener('click', (event) => {
          event.preventDefault();
          contentReview.classList.toggle('active');

          buttonTriggerReview.innerHTML = contentReview.classList.contains(
            'active'
          )
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
        });
      });
    } else {
      reviewsNotFound.innerHTML =
        '<p class="text-light fst-italic">No reviews movies found.</p>';
    }

    const similars = await MovieSource.similar(url.id);
    const similarContainer = document.getElementById('similar');
    const similarNotFound = document.getElementById('similarNotFound');
    if (similars.length > 0) {
      similars.forEach((movie) => {
        similarContainer.innerHTML += createCardMovies(movie);
      });
    } else {
      similarNotFound.innerHTML =
        '<p class="text-light fst-italic">No similar movies found.</p>';
    }

    const recomendations = await MovieSource.recomendation(url.id);
    const recomendationContainer = document.getElementById('recomendation');
    const recomendationNotFound = document.getElementById(
      'recomendationNotFound'
    );
    if (recomendations.length > 0) {
      recomendations.forEach((movie) => {
        recomendationContainer.innerHTML += createCardMovies(movie);
      });
    } else {
      recomendationNotFound.innerHTML =
        '<p class="text-light fst-italic">No recommended movies found.</p>';
    }

    hideLoader();
    swiperConfiguration();
    swiperConfigurationCredits();
    swiperConfigurationMediaVideos();
    swiperConfigurationMediaPoster();
    fancyBoxDefault();
    fancyBoxCredit();
  },
};

export default Detail;
