import CONFIG from '../../global/config';
import convertToHoursAndMinutes from '../../utils/formatTime';
import formatCurrencyUSD from '../../utils/formatDolar';
import defaultPoster from '../../../public/images/defaultposter.png';
import defaultBackdrop from '../../../public/images/defaultbackdrop.png';
import defaultProfil from '../../../public/images/default-profil.png';

const createCardMovies = (movie) => {
  const poster = movie.poster_path
    ? `${CONFIG.BASE_IMAGE + movie.poster_path}`
    : defaultPoster;

  return `
        <a href="#/detail/${movie.id}" class="btn swiper-slide rounded text-decoration-none">
          <div class="card text-bg-light">
            <div style="height: 12rem; max-width: 12rem">
              <img src="${poster}" class="card-img-top object-fit-cover" alt="${movie.title} style="height: 100%; max-width: 100%;"/>
            </div>
            <div class="card-body m-2 p-0 d-flex align-items-center justify-content-center" style="height: 3rem; overflow: hidden">
              <h6 class="card-title mb-0 text-center" style="font-size: 0.8rem">${movie.title}</h6>
            </div>
          </div>
        </a>
      `;
};

const createDetailMovies = (movie, videoTrailer) => {
  const poster = movie.poster_path
    ? `${CONFIG.BASE_IMAGE + movie.poster_path}`
    : defaultPoster;

  const backdrop = movie.backdrop_path
    ? `${CONFIG.BASE_IMAGE + movie.backdrop_path}`
    : defaultBackdrop;

  return `
        <div class="wrapper" style="background-image: url('${backdrop}'); background-position: center; background-size: cover;">
          <div class="overlay d-flex align-items-center" style="background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%">
            <div class="container d-flex flex-column flex-md-row align-items-center gap-5 pt-5 pb-5">
              <div class="box-content">
                <div class="rounded" style="width: 18rem">
                  <img class="rounded" src="${poster}" data-fancybox alt="" style="width: 100%; cursor: pointer;" />
                </div>
              </div>
              <div class="box-content">
                <div class="d-flex align-items-center gap-3 mb-2">
                  <button id="button-back" type="button" class="btn d-flex align-items-center text-light p-0" onclick="window.history.back()"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip-top" data-bs-title="Back"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
                    </svg>
                  </button>
                  <h1 class="text-light fw-bold m-0">${movie.title}</h1>
                </div>
                <p class="text-light mb-4">${movie.release_date} • ${movie.genres.map((genre) => genre.name).join(', ')} • ${convertToHoursAndMinutes(movie.runtime)}</p>
                <div class="d-flex align-items-center gap-3">
                  <div class="progress bg-info-subtle" role="progressbar" aria-label="Info example" aria-valuenow="${movie.vote_average * 10}" aria-valuemin="0" aria-valuemax="10">
                    <div class="progress-bar bg-info text-light fs-5 fw-medium" style="width: ${movie.vote_average * 10}%">
                      ${(movie.vote_average * 10).toFixed(2)}%
                    </div>
                  </div>
                  <p class="text-light m-0 fw-medium">User Score</p>
                </div>
                <p class="text-light mt-3 fst-italic fs-5 fw-lighter">${movie.tagline}</p>
                <h4 class="text-light">Overview</h4>
                <p class="text-light">${movie.overview}</p>
                <div class="d-flex gap-2">
                  <div>
                  ${ videoTrailer.length > 0 ? `
                    <button id="playVideo" type="button" data-fancybox-trigger="video-trailer" class="btn button btn-info rounded-circle"
                        data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-right" data-bs-title="Play video"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="white" class="bi bi-play-fill" viewBox="0 0 14 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                      </svg>
                    </button>
                  `
                      : ''
                  }
                  </div>
                  <div id="favoriteButtonBox"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
};

const createCardSearch = (movie) => {
  const poster = movie.poster_path
    ? `${CONFIG.BASE_IMAGE + movie.poster_path}`
    : defaultPoster;

  return `
        <a href="#/detail/${movie.id}" class="btn rounded text-decoration-none col-4 col-md-3 col-lg-2 p-1 p-md-2 m-0">
          <div class="card text-bg-light">
            <div class="card-body p-0">
              <div style="height: 13rem">
                <img class="rounded" src="${poster}" alt="" style="width: 100%; height:100%; object-fit:cover;" />
              </div>
              <div class="d-flex align-items-center justify-content-center m-2 overflow-hidden" style="height: 3rem">
                <h6 class="card-title mb-0 text-center" style="font-size: 0.8rem">${movie.title}</h6>
              </div>
            </div>
          </div>
        </a>
      `;
};

const createCreditsMovie = (credit) => {
  const profile = credit.profile_path
    ? `${CONFIG.BASE_IMAGE + credit.profile_path}`
    : defaultProfil;

  return `
      <div class="swiper-slide rounded">
        <div class="card bg-body-secondary pb-1">
          <div class="card-body p-0">
            <div style="height: 10rem">
              <img class="rounded" src="${profile}" data-fancybox="credit" data-name="Name : ${credit.name}" data-character="Character : ${credit.character}" alt="" style="width: 100%; height:100%; object-fit:cover; cursor: pointer" />
            </div>
            <div class="d-flex flex-column m-2 overflow-hidden" style="height: 5rem">
              <h6 class="card-title m-0 fw-bold text-start" style="font-size: 0.9rem">${credit.name}</h6>
              <p class="m-0 text-start" style="font-size: 0.9rem">${credit.character}</p>
            </div>
          </div>
        </div>
      </div>
    `;
};

const createProductionCompanies = (company) => `
      <div class="swiper-slide rounded">
            <div class="card bg-body-secondary">
              <div class="card-body m-2 p-0 d-flex align-items-center justify-content-center" style="height: 5rem; overflow: hidden">
                <h6 class="card-title  m-0 fw-bold text-center" style="font-size: 0.9rem">${company.name}</h6>
              </div>
            </div>
        </div>
      `;

const createProductionCountries = (country) => `
      <p class="card-title m-0 text-light">${country.name} ( ${country.iso_3166_1} )</p>
      `;

const createSideContent = (movie, keywords) => `
      <h6 class="text-light">Status</h6>
      <p class="text-light">${movie.status}</p>
      <h6 class="text-light">Original Language</h6>
      ${movie.spoken_languages.map((language) => `
        <p class="text-light m-0">${language.english_name}</p>
      `).join('')}
      <h6 class="text-light mt-3">Budget</h6>
      <p class="text-light">${formatCurrencyUSD(movie.budget)}</p>
      <h6 class="text-light">Revenue</h6>
      <p class="text-light mb-0">${formatCurrencyUSD(movie.revenue)}</p>
      <h6 class="text-light mt-3 mb-3">Keywords</h6>
      <div class="d-flex gap-2 flex-wrap">
        ${keywords.map((keyword) => `<p class="btn btn-light mb-0">${keyword.name}</p>
        `).join('')}
      </div>
      `;

const createIframe = (video) => `
    <iframe id="videoTrailer" class="rounded-3" data-fancybox="video-trailer" width="100%" height="100%" src="https://www.youtube.com/embed/${video.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;

const createReview = (review) => {
  const profile = review.author_details.avatar_path
    ? `${CONFIG.BASE_IMAGE + review.author_details.avatar_path}`
    : defaultProfil;

  return `
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex gap-3">
          <div style="width: 3rem; height: 3rem;">
              <img class="rounded" src="${profile}" data-fancybox alt="" style="width: 100%; height:100%; object-fit:cover; cursor: pointer;" />
          </div>
          <div>
              <h6 class="text-light fw-bold">${review.author_details.username}<h6>
              <p class="text-light mb-0 fw-light" style="font-size: 0.8rem">${review.created_at}</p>
          </div>
        </div>
        <div class="me-2">
          <button id="showMoreReview${review.id}" class="btn btn-info" 
              data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-class="custom-tooltip-left" data-bs-title="Show more"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="me-2">
        <p id="contentReview${review.id}" class="text-light content-review mb-0">${review.content}</p>
      </div>
    `;
};

const createMediaVideo = (video) => `
    <div class="swiper-slide rounded bg-body-secondary">
      <div class="box-media-iframe" style="width: 100%">
        <iframe class="rounded" width="100%" height="100%" src="https://www.youtube.com/embed/${video.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="card-body m-2 p-0 d-flex align-items-center justify-content-center" style="height: 4rem; overflow: hidden">
        <h6 class="card-title  m-0 fw-bold text-center" style="font-size: 0.9rem">${video.name}</h6>
      </div>
    </div>
    `;

const createMediaBackdrop = (backdrop) => `
    <div class="swiper-slide rounded bg-body-secondary">
      <div style="width: 100%; height: 14rem">
        <img class="rounded" src="${CONFIG.BASE_IMAGE + backdrop.file_path}" data-fancybox="backdrop" alt="" style="width: 100%; height: 100%; object-fit: content; cursor: pointer;" />
      </div>
    </div>
    `;

const createMediaPoster = (poster) => `
    <div class="swiper-slide rounded bg-body-secondary">
      <div style="width: 100%; height: 18rem">
        <img class="rounded" src="${CONFIG.BASE_IMAGE + poster.file_path}" data-fancybox="poster" alt="" style="width: 100%; height: 100%; object-fit: content; cursor: pointer;"/>
      </div>
    </div>
    `;

const createLikeMovieButtonTemplate = () => `
    <button type="button" class="btn button btn-info rounded-circle"
      aria-label="like this restaurant" id="likeButton" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-right" data-bs-title="Like movie"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
    </button>
  `;

const createUnlikeMovieButtonTemplate = () => `
    <button type="button" class="btn button btn-info rounded-circle"
      aria-label="unlike this restaurant" id="likeButton" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-right" data-bs-title="Unlike movie"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>
    </button>
  `;

export {
  createCardMovies,
  createCardSearch,
  createDetailMovies,
  createCreditsMovie,
  createProductionCompanies,
  createProductionCountries,
  createSideContent,
  createIframe,
  createReview,
  createMediaVideo,
  createMediaBackdrop,
  createMediaPoster,
  createLikeMovieButtonTemplate,
  createUnlikeMovieButtonTemplate,
};
