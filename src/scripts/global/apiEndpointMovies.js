import CONFIG from './config';

const API_ENDPOINT_MOVIES = {
  TODAYS_TRENDING: `${CONFIG.BASE_URL}trending/movie/day?language=en-US`,
  CURRENT_TRENDING: `${CONFIG.BASE_URL}trending/movie/week?language=en-US`,
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing`,
  POPULAR: `${CONFIG.BASE_URL}movie/popular`,
  TOP_RATED: `${CONFIG.BASE_URL}movie/top_rated`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}`,
  RECOMENDATION: (id) => `${CONFIG.BASE_URL}movie/${id}/recommendations`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}search/movie?query=${keyword}`,
  REVIEW: (id) => `${CONFIG.BASE_URL}movie/${id}/reviews`,
  VIDEO: (id) => `${CONFIG.BASE_URL}movie/${id}/videos`,
  ALL_MOVIES: (page) => `${CONFIG.BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
  CREDITS: (id) => `${CONFIG.BASE_URL}movie/${id}/credits`,
  IMAGES: (id) => `${CONFIG.BASE_URL}movie/${id}/images`,
  KEYWORDS: (id) => `${CONFIG.BASE_URL}movie/${id}/keywords`,
  SIMILAR: (id) => `${CONFIG.BASE_URL}movie/${id}/similar`,
};

export default API_ENDPOINT_MOVIES;


