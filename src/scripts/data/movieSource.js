import axios from 'axios';
import API_ENDPOINT_MOVIES from '../global/apiEndpointMovies';
import CONFIG from '../global/config';
// import { createNotification } from '../utils/notification-initiator';
// import {
//   showLoadingIndicator,
//   hideLoadingIndicator,
// } from '../utils/loading-indicator-initiator';

// const ERROR_MESSAGES = {
//   FETCH_RESTAURANT: 'Failed to fetch restaurant data',
//   ADD_REVIEW: 'Failed to add a review',
// };

class MovieSource {
  static async search(keyword) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.SEARCH(keyword), CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async todaysTrending() {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.TODAYS_TRENDING, CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async currentTrending() {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.CURRENT_TRENDING, CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async nowPlaying() {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.NOW_PLAYING, CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async popular() {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.POPULAR, CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async topRated() {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.TOP_RATED, CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async upcoming() {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.UPCOMING, CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async detail(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.DETAIL(id), CONFIG.OPTIONS);
      return response.data;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async similar(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.SIMILAR(id), CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async recomendation(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.RECOMENDATION(id), CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async credits(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.CREDITS(id), CONFIG.OPTIONS);
      return response.data.cast;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async images(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.IMAGES(id), CONFIG.OPTIONS);
      return response.data;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async keywords(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.KEYWORDS(id), CONFIG.OPTIONS);
      return response.data.keywords;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async review(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.REVIEW(id), CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async video(id) {
    try {
      const response = await axios.get(API_ENDPOINT_MOVIES.VIDEO(id), CONFIG.OPTIONS);
      return response.data.results;
    } catch (error) {
      //   createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }
}

export default MovieSource;
