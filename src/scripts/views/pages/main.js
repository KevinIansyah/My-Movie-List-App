import MovieSource from '../../data/movieSource';
import { createCardMovies } from '../templates/createMovieTemplates';
import { swiperConfiguration } from '../../global/swiperConfiguration';
import { hideLoader } from '../../utils/loader-initiator';

const Main = {
  async render() {
    // const carouselElement = document.getElementById('carousel');
    // carouselElement.innerHTML = '<carousel-element></carousel-element>';

    return `
        <carousel-element></carousel-element>
        <div class="container">
            <h5 class="text-light mb-4 mt-5">TODAY'S TRENDING</h5>
            <div class="swiper">
            <div id="trending-day" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>

            <h5 class="text-light mb-4 mt-5">CURRENT TRENDS</h5>
            <div class="swiper">
            <div id="trending-week" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>

            <h5 class="text-light mb-4 mt-5">NOW PLAYING</h5>
            <div class="swiper">
            <div id="now-playing" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>

            <h5 class="text-light mb-4 mt-5">POPULAR</h5>
            <div class="swiper">
            <div id="popular" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>

            <h5 class="text-light mb-4 mt-5">TOP RATED</h5>
            <div class="swiper">
            <div id="top-rated" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>

            <h5 class="text-light mb-4 mt-5">UPCOMING</h5>
            <div class="swiper">
            <div id="upcoming" class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    swiperConfiguration();

    const todaysTrending = await MovieSource.todaysTrending();
    const todaysTrendingContainer = document.getElementById('trending-day');
    todaysTrending.forEach((movie) => {
      todaysTrendingContainer.innerHTML += createCardMovies(movie);
    });

    const currentTrending = await MovieSource.currentTrending();
    const currentTrendingContainer = document.getElementById('trending-week');
    currentTrending.forEach((movie) => {
      currentTrendingContainer.innerHTML += createCardMovies(movie);
    });

    const nowPlaying = await MovieSource.nowPlaying();
    const nowPlayingContainer = document.getElementById('now-playing');
    nowPlaying.forEach((movie) => {
      nowPlayingContainer.innerHTML += createCardMovies(movie);
    });

    const popular = await MovieSource.popular();
    const popularContainer = document.getElementById('popular');
    popular.forEach((movie) => {
      popularContainer.innerHTML += createCardMovies(movie);
    });

    const topRated = await MovieSource.topRated();
    const topRatedContainer = document.getElementById('top-rated');
    topRated.forEach((movie) => {
      topRatedContainer.innerHTML += createCardMovies(movie);
    });

    const upcoming = await MovieSource.upcoming();
    const upcomingContainer = document.getElementById('upcoming');
    upcoming.forEach((movie) => {
      upcomingContainer.innerHTML += createCardMovies(movie);
    });

    hideLoader();
  },
};

export default Main;
